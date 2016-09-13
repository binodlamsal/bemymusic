(function ($) {

/**
 * Provides Ajax page updating via jQuery $.ajax (Asynchronous JavaScript and XML).
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with #ajax['path'] and
 * #ajax['wrapper'] properties. If set, this file will automatically be included
 * to provide Ajax capabilities.
 */

Drupal.ajax = Drupal.ajax || {};

/**
 * Attaches the Ajax behavior to each Ajax form element.
 */
Drupal.behaviors.AJAX = {
  attach: function (context, settings) {
    // Load all Ajax behaviors specified in the settings.
    for (var base in settings.ajax) {
      if (!$('#' + base + '.ajax-processed').length) {
        var element_settings = settings.ajax[base];

        if (typeof element_settings.selector == 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).each(function () {
          element_settings.element = this;
          Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
        });

        $('#' + base).addClass('ajax-processed');
      }
    }

    // Bind Ajax behaviors to all items showing the class.
    $('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};
      // Clicked links look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      // For anchor tags, these will go to the target of the anchor rather
      // than the usual location.
      if ($(this).attr('href')) {
        element_settings.url = $(this).attr('href');
        element_settings.event = 'click';
      }
      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });

    // This class means to submit the form to the action using Ajax.
    $('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};

      // Ajax submits specified in this manner automatically submit to the
      // normal form action.
      element_settings.url = $(this.form).attr('action');
      // Form submit button clicks need to tell the form what was clicked so
      // it gets passed in the POST request.
      element_settings.setClick = true;
      // Form buttons use the 'click' event rather than mousedown.
      element_settings.event = 'click';
      // Clicked form buttons look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });
  }
};

/**
 * Ajax object.
 *
 * All Ajax objects on a page are accessible through the global Drupal.ajax
 * object and are keyed by the submit button's ID. You can access them from
 * your module's JavaScript file to override properties or functions.
 *
 * For example, if your Ajax enabled button has the ID 'edit-submit', you can
 * redefine the function that is called to insert the new content like this
 * (inside a Drupal.behaviors attach block):
 * @code
 *    Drupal.behaviors.myCustomAJAXStuff = {
 *      attach: function (context, settings) {
 *        Drupal.ajax['edit-submit'].commands.insert = function (ajax, response, status) {
 *          new_content = $(response.data);
 *          $('#my-wrapper').append(new_content);
 *          alert('New content was appended to #my-wrapper');
 *        }
 *      }
 *    };
 * @endcode
 */
Drupal.ajax = function (base, element, element_settings) {
  var defaults = {
    url: 'system/ajax',
    event: 'mousedown',
    keypress: true,
    selector: '#' + base,
    effect: 'none',
    speed: 'none',
    method: 'replaceWith',
    progress: {
      type: 'throbber',
      message: Drupal.t('Please wait...')
    },
    submit: {
      'js': true
    }
  };

  $.extend(this, defaults, element_settings);

  this.element = element;
  this.element_settings = element_settings;

  // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
  // the server detect when it needs to degrade gracefully.
  // There are five scenarios to check for:
  // 1. /nojs/
  // 2. /nojs$ - The end of a URL string.
  // 3. /nojs? - Followed by a query (with clean URLs enabled).
  //      E.g.: path/nojs?destination=foobar
  // 4. /nojs& - Followed by a query (without clean URLs enabled).
  //      E.g.: ?q=path/nojs&destination=foobar
  // 5. /nojs# - Followed by a fragment.
  //      E.g.: path/nojs#myfragment
  this.url = element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g, '/ajax$1');
  this.wrapper = '#' + element_settings.wrapper;

  // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
  // bind Ajax to links as well.
  if (this.element.form) {
    this.form = $(this.element.form);
  }

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ajax = this;
  ajax.options = {
    url: ajax.url,
    data: ajax.submit,
    beforeSerialize: function (element_settings, options) {
      return ajax.beforeSerialize(element_settings, options);
    },
    beforeSubmit: function (form_values, element_settings, options) {
      ajax.ajaxing = true;
      return ajax.beforeSubmit(form_values, element_settings, options);
    },
    beforeSend: function (xmlhttprequest, options) {
      ajax.ajaxing = true;
      return ajax.beforeSend(xmlhttprequest, options);
    },
    success: function (response, status) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof response == 'string') {
        response = $.parseJSON(response);
      }
      return ajax.success(response, status);
    },
    complete: function (response, status) {
      ajax.ajaxing = false;
      if (status == 'error' || status == 'parsererror') {
        return ajax.error(response, ajax.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(ajax.element).bind(element_settings.event, function (event) {
    return ajax.eventResponse(this, event);
  });

  // If necessary, enable keyboard submission so that Ajax behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(ajax.element).keypress(function (event) {
      return ajax.keypressResponse(this, event);
    });
  }

  // If necessary, prevent the browser default action of an additional event.
  // For example, prevent the browser default action of a click, even if the
  // AJAX behavior binds to mousedown.
  if (element_settings.prevent) {
    $(ajax.element).bind(element_settings.prevent, false);
  }
};

/**
 * Handle a key press.
 *
 * The Ajax object will, if instructed, bind to a key press response. This
 * will test to see if the key press is valid to trigger this event and
 * if it is, trigger it for us and prevent other keypresses from triggering.
 * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
 * and 32. RETURN is often used to submit a form when in a textfield, and 
 * SPACE is often used to activate an element without submitting. 
 */
Drupal.ajax.prototype.keypressResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Detect enter key and space bar and allow the standard response for them,
  // except for form elements of type 'text' and 'textarea', where the 
  // spacebar activation causes inappropriate activation if #ajax['keypress'] is 
  // TRUE. On a text-type widget a space should always be a space.
  if (event.which == 13 || (event.which == 32 && element.type != 'text' && element.type != 'textarea')) {
    $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    return false;
  }
};

/**
 * Handle an event that triggers an Ajax response.
 *
 * When an event that triggers an Ajax response happens, this method will
 * perform the actual Ajax call. It is bound to the event using
 * bind() in the constructor, and it uses the options specified on the
 * ajax object.
 */
Drupal.ajax.prototype.eventResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Do not perform another ajax command if one is already in progress.
  if (ajax.ajaxing) {
    return false;
  }

  try {
    if (ajax.form) {
      // If setClick is set, we must set this to ensure that the button's
      // value is passed.
      if (ajax.setClick) {
        // Mark the clicked button. 'form.clk' is a special variable for
        // ajaxSubmit that tells the system which element got clicked to
        // trigger the submit. Without it there would be no 'op' or
        // equivalent.
        element.form.clk = element;
      }

      ajax.form.ajaxSubmit(ajax.options);
    }
    else {
      ajax.beforeSerialize(ajax.element, ajax.options);
      $.ajax(ajax.options);
    }
  }
  catch (e) {
    // Unset the ajax.ajaxing flag here because it won't be unset during
    // the complete response.
    ajax.ajaxing = false;
    alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message);
  }

  // For radio/checkbox, allow the default event. On IE, this means letting
  // it actually check the box.
  if (typeof element.type != 'undefined' && (element.type == 'checkbox' || element.type == 'radio')) {
    return true;
  }
  else {
    return false;
  }

};

/**
 * Handler for the form serialization.
 *
 * Runs before the beforeSend() handler (see below), and unlike that one, runs
 * before field data is collected.
 */
Drupal.ajax.prototype.beforeSerialize = function (element, options) {
  // Allow detaching behaviors to update field values before collecting them.
  // This is only needed when field values are added to the POST data, so only
  // when there is a form such that this.form.ajaxSubmit() is used instead of
  // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
  // isn't called, but don't rely on that: explicitly check this.form.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.detachBehaviors(this.form, settings, 'serialize');
  }

  // Prevent duplicate HTML ids in the returned markup.
  // @see drupal_html_id()
  options.data['ajax_html_ids[]'] = [];
  $('[id]').each(function () {
    options.data['ajax_html_ids[]'].push(this.id);
  });

  // Allow Drupal to return new JavaScript and CSS files to load without
  // returning the ones already loaded.
  // @see ajax_base_page_theme()
  // @see drupal_get_css()
  // @see drupal_get_js()
  options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
  options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
  for (var key in Drupal.settings.ajaxPageState.css) {
    options.data['ajax_page_state[css][' + key + ']'] = 1;
  }
  for (var key in Drupal.settings.ajaxPageState.js) {
    options.data['ajax_page_state[js][' + key + ']'] = 1;
  }
};

/**
 * Modify form values prior to form submission.
 */
Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {
  // This function is left empty to make it simple to override for modules
  // that wish to add functionality here.
};

/**
 * Prepare the Ajax request before it is sent.
 */
Drupal.ajax.prototype.beforeSend = function (xmlhttprequest, options) {
  // For forms without file inputs, the jQuery Form plugin serializes the form
  // values, and then calls jQuery's $.ajax() function, which invokes this
  // handler. In this circumstance, options.extraData is never used. For forms
  // with file inputs, the jQuery Form plugin uses the browser's normal form
  // submission mechanism, but captures the response in a hidden IFRAME. In this
  // circumstance, it calls this handler first, and then appends hidden fields
  // to the form to submit the values in options.extraData. There is no simple
  // way to know which submission mechanism will be used, so we add to extraData
  // regardless, and allow it to be ignored in the former case.
  if (this.form) {
    options.extraData = options.extraData || {};

    // Let the server know when the IFRAME submission mechanism is used. The
    // server can use this information to wrap the JSON response in a TEXTAREA,
    // as per http://jquery.malsup.com/form/#file-upload.
    options.extraData.ajax_iframe_upload = '1';

    // The triggering element is about to be disabled (see below), but if it
    // contains a value (e.g., a checkbox, textfield, select, etc.), ensure that
    // value is included in the submission. As per above, submissions that use
    // $.ajax() are already serialized prior to the element being disabled, so
    // this is only needed for IFRAME submissions.
    var v = $.fieldValue(this.element);
    if (v !== null) {
      options.extraData[this.element.name] = Drupal.checkPlain(v);
    }
  }

  // Disable the element that received the change to prevent user interface
  // interaction while the Ajax request is in progress. ajax.ajaxing prevents
  // the element from triggering a new request, but does not prevent the user
  // from changing its value.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ajax-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ajax.prototype.success = function (response, status) {
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');

  Drupal.freezeHeight();

  for (var i in response) {
    if (response.hasOwnProperty(i) && response[i]['command'] && this.commands[response[i]['command']]) {
      this.commands[response[i]['command']](this, response[i], status);
    }
  }

  // Reattach behaviors, if they were detached in beforeSerialize(). The
  // attachBehaviors() called on the new content from processing the response
  // commands is not sufficient, because behaviors from the entire form need
  // to be reattached.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }

  Drupal.unfreezeHeight();

  // Remove any response-specific settings so they don't get used on the next
  // call by mistake.
  this.settings = null;
};

/**
 * Build an effect object which tells us how to apply the effect when adding new HTML.
 */
Drupal.ajax.prototype.getEffect = function (response) {
  var type = response.effect || this.effect;
  var speed = response.speed || this.speed;

  var effect = {};
  if (type == 'none') {
    effect.showEffect = 'show';
    effect.hideEffect = 'hide';
    effect.showSpeed = '';
  }
  else if (type == 'fade') {
    effect.showEffect = 'fadeIn';
    effect.hideEffect = 'fadeOut';
    effect.showSpeed = speed;
  }
  else {
    effect.showEffect = type + 'Toggle';
    effect.hideEffect = type + 'Toggle';
    effect.showSpeed = speed;
  }

  return effect;
};

/**
 * Handler for the form redirection error.
 */
Drupal.ajax.prototype.error = function (response, uri) {
  alert(Drupal.ajaxError(response, uri));
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');
  // Reattach behaviors, if they were detached in beforeSerialize().
  if (this.form) {
    var settings = response.settings || this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }
};

/**
 * Provide a series of commands that the server can request the client perform.
 */
Drupal.ajax.prototype.commands = {
  /**
   * Command to insert new content into the DOM.
   */
  insert: function (ajax, response, status) {
    // Get information from the response. If it is not there, default to
    // our presets.
    var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
    var method = response.method || ajax.method;
    var effect = ajax.getEffect(response);

    // We don't know what response.data contains: it might be a string of text
    // without HTML, so don't rely on jQuery correctly iterpreting
    // $(response.data) as new HTML rather than a CSS selector. Also, if
    // response.data contains top-level text nodes, they get lost with either
    // $(response.data) or $('<div></div>').replaceWith(response.data).
    var new_content_wrapped = $('<div></div>').html(response.data);
    var new_content = new_content_wrapped.contents();

    // For legacy reasons, the effects processing code assumes that new_content
    // consists of a single top-level element. Also, it has not been
    // sufficiently tested whether attachBehaviors() can be successfully called
    // with a context object that includes top-level text nodes. However, to
    // give developers full control of the HTML appearing in the page, and to
    // enable Ajax content to be inserted in places where DIV elements are not
    // allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
    // content satisfies the requirement of a single top-level element, and
    // only use the container DIV created above when it doesn't. For more
    // information, please see http://drupal.org/node/736066.
    if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
      new_content = new_content_wrapped;
    }

    // If removing content from the wrapper, detach behaviors first.
    switch (method) {
      case 'html':
      case 'replaceWith':
      case 'replaceAll':
      case 'empty':
      case 'remove':
        var settings = response.settings || ajax.settings || Drupal.settings;
        Drupal.detachBehaviors(wrapper, settings);
    }

    // Add the new content to the page.
    wrapper[method](new_content);

    // Immediately hide the new content if we're using any effects.
    if (effect.showEffect != 'show') {
      new_content.hide();
    }

    // Determine which effect to use and what content will receive the
    // effect, then show the new content.
    if ($('.ajax-new-content', new_content).length > 0) {
      $('.ajax-new-content', new_content).hide();
      new_content.show();
      $('.ajax-new-content', new_content)[effect.showEffect](effect.showSpeed);
    }
    else if (effect.showEffect != 'show') {
      new_content[effect.showEffect](effect.showSpeed);
    }

    // Attach all JavaScript behaviors to the new content, if it was successfully
    // added to the page, this if statement allows #ajax['wrapper'] to be
    // optional.
    if (new_content.parents('html').length > 0) {
      // Apply any settings from the returned JSON if available.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(new_content, settings);
    }
  },

  /**
   * Command to remove a chunk from the page.
   */
  remove: function (ajax, response, status) {
    var settings = response.settings || ajax.settings || Drupal.settings;
    Drupal.detachBehaviors($(response.selector), settings);
    $(response.selector).remove();
  },

  /**
   * Command to mark a chunk changed.
   */
  changed: function (ajax, response, status) {
    if (!$(response.selector).hasClass('ajax-changed')) {
      $(response.selector).addClass('ajax-changed');
      if (response.asterisk) {
        $(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ');
      }
    }
  },

  /**
   * Command to provide an alert.
   */
  alert: function (ajax, response, status) {
    alert(response.text, response.title);
  },

  /**
   * Command to provide the jQuery css() function.
   */
  css: function (ajax, response, status) {
    $(response.selector).css(response.argument);
  },

  /**
   * Command to set the settings that will be used for other commands in this response.
   */
  settings: function (ajax, response, status) {
    if (response.merge) {
      $.extend(true, Drupal.settings, response.settings);
    }
    else {
      ajax.settings = response.settings;
    }
  },

  /**
   * Command to attach data using jQuery's data API.
   */
  data: function (ajax, response, status) {
    $(response.selector).data(response.name, response.value);
  },

  /**
   * Command to apply a jQuery method.
   */
  invoke: function (ajax, response, status) {
    var $element = $(response.selector);
    $element[response.method].apply($element, response.arguments);
  },

  /**
   * Command to restripe a table.
   */
  restripe: function (ajax, response, status) {
    // :even and :odd are reversed because jQuery counts from 0 and
    // we count from 1, so we're out of sync.
    // Match immediate children of the parent element to allow nesting.
    $('> tbody > tr:visible, > tr:visible', $(response.selector))
      .removeClass('odd even')
      .filter(':even').addClass('odd').end()
      .filter(':odd').addClass('even');
  },

  /**
   * Command to add css.
   *
   * Uses the proprietary addImport method if available as browsers which
   * support that method ignore @import statements in dynamically added
   * stylesheets.
   */
  add_css: function (ajax, response, status) {
    // Add the styles in the normal way.
    $('head').prepend(response.data);
    // Add imports in the styles using the addImport method if available.
    var match, importMatch = /^@import url\("(.*)"\);$/igm;
    if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
      importMatch.lastIndex = 0;
      while (match = importMatch.exec(response.data)) {
        document.styleSheets[0].addImport(match[1]);
      }
    }
  },

  /**
   * Command to update a form's build ID.
   */
  updateBuildId: function(ajax, response, status) {
    $('input[name="form_build_id"][value="' + response['old'] + '"]').val(response['new']);
  }
};

})(jQuery);
;
(function ($) {

/**
 * Attaches double-click behavior to toggle full path of Krumo elements.
 */
Drupal.behaviors.devel = {
  attach: function (context, settings) {

    // Add hint to footnote
    $('.krumo-footnote .krumo-call').once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="' + settings.basePath + 'misc/help.png"/>');

    var krumo_name = [];
    var krumo_type = [];

    function krumo_traverse(el) {
      krumo_name.push($(el).html());
      krumo_type.push($(el).siblings('em').html().match(/\w*/)[0]);

      if ($(el).closest('.krumo-nest').length > 0) {
        krumo_traverse($(el).closest('.krumo-nest').prev().find('.krumo-name'));
      }
    }

    $('.krumo-child > div:first-child', context).dblclick(
      function(e) {
        if ($(this).find('> .krumo-php-path').length > 0) {
          // Remove path if shown.
          $(this).find('> .krumo-php-path').remove();
        }
        else {
          // Get elements.
          krumo_traverse($(this).find('> a.krumo-name'));

          // Create path.
          var krumo_path_string = '';
          for (var i = krumo_name.length - 1; i >= 0; --i) {
            // Start element.
            if ((krumo_name.length - 1) == i)
              krumo_path_string += '$' + krumo_name[i];

            if (typeof krumo_name[(i-1)] !== 'undefined') {
              if (krumo_type[i] == 'Array') {
                krumo_path_string += "[";
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += krumo_name[(i-1)];
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += "]";
              }
              if (krumo_type[i] == 'Object')
                krumo_path_string += '->' + krumo_name[(i-1)];
            }
          }
          $(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">' + krumo_path_string + '</div>');

          // Reset arrays.
          krumo_name = [];
          krumo_type = [];
        }
      }
    );
  }
};

})(jQuery);
;
/**
 * @file
 * Implement a simple, clickable dropbutton menu.
 *
 * See dropbutton.theme.inc for primary documentation.
 *
 * The javascript relies on four classes:
 * - The dropbutton must be fully contained in a div with the class
 *   ctools-dropbutton. It must also contain the class ctools-no-js
 *   which will be immediately removed by the javascript; this allows for
 *   graceful degradation.
 * - The trigger that opens the dropbutton must be an a tag wit hthe class
 *   ctools-dropbutton-link. The href should just be '#' as this will never
 *   be allowed to complete.
 * - The part of the dropbutton that will appear when the link is clicked must
 *   be a div with class ctools-dropbutton-container.
 * - Finally, ctools-dropbutton-hover will be placed on any link that is being
 *   hovered over, so that the browser can restyle the links.
 *
 * This tool isn't meant to replace click-tips or anything, it is specifically
 * meant to work well presenting menus.
 */

(function ($) {
  Drupal.behaviors.CToolsDropbutton = {
    attach: function() {
      // Process buttons. All dropbuttons are buttons.
      $('.ctools-button')
        .once('ctools-button')
        .removeClass('ctools-no-js');

      // Process dropbuttons. Not all buttons are dropbuttons.
      $('.ctools-dropbutton').once('ctools-dropbutton', function() {
        var $dropbutton = $(this);
        var $button = $('.ctools-content', $dropbutton);
        var $secondaryActions = $('li', $button).not(':first');
        var $twisty = $(".ctools-link", $dropbutton);
        var open = false;
        var hovering = false;
        var timerID = 0;

        var toggle = function(close) {
          // if it's open or we're told to close it, close it.
          if (open || close) {
            // If we're just toggling it, close it immediately.
            if (!close) {
              open = false;
              $secondaryActions.slideUp(100);
              $dropbutton.removeClass('open');
            }
            else {
              // If we were told to close it, wait half a second to make
              // sure that's what the user wanted.
              // Clear any previous timer we were using.
              if (timerID) {
                clearTimeout(timerID);
              }
              timerID = setTimeout(function() {
                if (!hovering) {
                  open = false;
                  $secondaryActions.slideUp(100);
                  $dropbutton.removeClass('open');
                }}, 500);
            }
          }
          else {
            // open it.
            open = true;
            $secondaryActions.animate({height: "show", opacity: "show"}, 100);
            $dropbutton.addClass('open');
          }
        }
        // Hide the secondary actions initially.
        $secondaryActions.hide();

        $twisty.click(function() {
            toggle();
            return false;
          });

        $dropbutton.hover(
          function() {
            hovering = true;
          }, // hover in
          function() { // hover out
            hovering = false;
            toggle(true);
            return false;
          }
        );
      });
    }
  }
})(jQuery);
;

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;
(function ($) {

Drupal.ModuleFilter = {};

Drupal.ModuleFilter.explode = function(string) {
  var queryArray = string.match(/([a-zA-Z]+\:(\w+|"[^"]+")*)|\w+|"[^"]+"/g);
  if (!queryArray) {
    queryArray = new Array();
  }
  var i = queryArray.length;
  while (i--) {
    queryArray[i] = queryArray[i].replace(/"/g, "");
  }
  return queryArray;
};

Drupal.ModuleFilter.getState = function(key) {
  if (!Drupal.ModuleFilter.state) {
    Drupal.ModuleFilter.state = {};
    var cookie = $.cookie('DrupalModuleFilter');
    var query = cookie ? cookie.split('&') : [];
    if (query) {
      for (var i in query) {
        // Extra check to avoid js errors in Chrome, IE and Safari when
        // combined with JS like twitter's widget.js.
        // See http://drupal.org/node/798764.
        if (typeof(query[i]) == 'string' && query[i].indexOf('=') != -1) {
          var values = query[i].split('=');
          if (values.length === 2) {
            Drupal.ModuleFilter.state[values[0]] = values[1];
          }
        }
      }
    }
  }
  return Drupal.ModuleFilter.state[key] ? Drupal.ModuleFilter.state[key] : false;
};

Drupal.ModuleFilter.setState = function(key, value) {
  var existing = Drupal.ModuleFilter.getState(key);
  if (existing != value) {
    Drupal.ModuleFilter.state[key] = value;
    var query = [];
    for (var i in Drupal.ModuleFilter.state) {
      query.push(i + '=' + Drupal.ModuleFilter.state[i]);
    }
    $.cookie('DrupalModuleFilter', query.join('&'), { expires: 7, path: '/' });
  }
};

Drupal.ModuleFilter.Filter = function(element, selector, options) {
  var self = this;

  this.element = element;
  this.text = $(this.element).val();

  this.settings = Drupal.settings.moduleFilter;

  this.selector = selector;

  this.options = $.extend({
    delay: 500,
    striping: false,
    childSelector: null,
    empty: Drupal.t('No results'),
    rules: new Array()
  }, options);
  if (this.options.wrapper == undefined) {
    this.options.wrapper = $(self.selector).parent();
  }

  // Add clear button.
  this.element.after('<div class="module-filter-clear"><a href="#" class="js-hide">' + Drupal.t('clear') + '</a></div>');
  if (this.text) {
    $('.module-filter-clear a', this.element.parent()).removeClass('js-hide');
  }
  $('.module-filter-clear a', this.element.parent()).click(function() {
    self.element.val('');
    self.text = '';
    delete self.queries;
    self.applyFilter();
    self.element.focus();
    $(this).addClass('js-hide');
    return false;
  });

  this.updateQueries = function() {
    var queryStrings = Drupal.ModuleFilter.explode(self.text);

    self.queries = new Array();
    for (var i in queryStrings) {
      var query = { operator: 'text', string: queryStrings[i] };

      if (self.operators != undefined) {
        // Check if an operator is possibly used.
        if (queryStrings[i].indexOf(':') > 0) {
          // Determine operator used.
          var args = queryStrings[i].split(':', 2);
          var operator = args.shift();
          if (self.operators[operator] != undefined) {
            query.operator = operator;
            query.string = args.shift();
          }
        }
      }

      query.string = query.string.toLowerCase();

      self.queries.push(query);
    }

    if (self.queries.length <= 0) {
      // Add a blank string query.
      self.queries.push({ operator: 'text', string: '' });
    }
  };

  this.applyFilter = function() {
    self.results = new Array();

    self.updateQueries();

    if (self.index == undefined) {
      self.buildIndex();
    }

    self.element.trigger('moduleFilter:start');

    $.each(self.index, function(key, item) {
      var $item = item.element;

      for (var i in self.queries) {
        var query = self.queries[i];
        if (query.operator == 'text') {
          if (item.text.indexOf(query.string) < 0) {
            continue;
          }
        }
        else {
          var func = self.operators[query.operator];
          if (!(func(query.string, self, item))) {
            continue;
          }
        }

        var rulesResult = self.processRules(item);
        if (rulesResult !== false) {
          return true;
        }
      }

      $item.addClass('js-hide');
    });

    self.element.trigger('moduleFilter:finish', { results: self.results });

    if (self.options.striping) {
      self.stripe();
    }

    if (self.results.length > 0) {
      self.options.wrapper.find('.module-filter-no-results').remove();
    }
    else {
      if (!self.options.wrapper.find('.module-filter-no-results').length) {
        self.options.wrapper.append($('<p class="module-filter-no-results"/>').text(self.options.empty));
      };
    }
  };

  self.element.keyup(function(e) {
    switch (e.which) {
      case 13:
        if (self.timeOut) {
          clearTimeout(self.timeOut);
        }
        self.applyFilter();
        break;
      default:
        if (self.text != $(this).val()) {
          if (self.timeOut) {
            clearTimeout(self.timeOut);
          }

          self.text = $(this).val();

          if (self.text) {
            self.element.parent().find('.module-filter-clear a').removeClass('js-hide');
          }
          else {
            self.element.parent().find('.module-filter-clear a').addClass('js-hide');
          }

          self.element.trigger('moduleFilter:keyup');

          self.timeOut = setTimeout(self.applyFilter, self.options.delay);
        }
        break;
    }
  });

  self.element.keypress(function(e) {
    if (e.which == 13) e.preventDefault();
  });
};

Drupal.ModuleFilter.Filter.prototype.buildIndex = function() {
  var self = this;
  var index = new Array();
  $(this.selector).each(function(i) {
    var text = (self.options.childSelector) ? $(self.options.childSelector, this).text() : $(this).text();
    var item = {
      key: i,
      element: $(this),
      text: text.toLowerCase()
    };
    for (var j in self.options.buildIndex) {
      var func = self.options.buildIndex[j];
      item = $.extend(func(self, item), item);
    }
    $(this).data('indexKey', i);
    index.push(item);
    delete item;
  });
  this.index = index;
};

Drupal.ModuleFilter.Filter.prototype.processRules = function(item) {
  var self = this;
  var $item = item.element;
  var rulesResult = true;
  if (self.options.rules.length > 0) {
    for (var i in self.options.rules) {
      var func = self.options.rules[i];
      rulesResult = func(self, item);
      if (rulesResult === false) {
        break;
      }
    }
  }
  if (rulesResult !== false) {
    $item.removeClass('js-hide');
    self.results.push(item);
  }
  return rulesResult;
};

Drupal.ModuleFilter.Filter.prototype.stripe = function() {
  var self = this;
  var flip = { even: 'odd', odd: 'even' };
  var stripe = 'odd';

  $.each(self.index, function(key, item) {
    if (!item.element.hasClass('js-hide')) {
      item.element.removeClass('odd even')
        .addClass(stripe);
      stripe = flip[stripe];
    }
  });
};

$.fn.moduleFilter = function(selector, options) {
  var filterInput = this;
  filterInput.parents('.module-filter-inputs-wrapper').show();
  if (Drupal.settings.moduleFilter.setFocus) {
    filterInput.focus();
  }
  filterInput.data('moduleFilter', new Drupal.ModuleFilter.Filter(this, selector, options));
};

})(jQuery);
;
(function($) {

Drupal.behaviors.moduleFilter = {
  attach: function(context) {
    $('#system-modules td.description').once('description', function() {
      $('.inner.expand', $(this)).click(function() {
        $(this).toggleClass('expanded');
      });
    });

    $('.module-filter-inputs-wrapper', context).once('module-filter', function() {
      var filterInput = $('input[name="module_filter[name]"]', context);
      var selector = '#system-modules table tbody tr';
      if (Drupal.settings.moduleFilter.tabs) {
        selector += '.module';
      }

      filterInput.moduleFilter(selector, {
        wrapper: $('#module-filter-modules'),
        delay: 500,
        striping: true,
        childSelector: 'td:nth(1)',
        rules: [
          function(moduleFilter, item) {
            if (!item.unavailable) {
              if (moduleFilter.options.showEnabled) {
                if (item.status && !item.disabled) {
                  return true;
                }
              }
              if (moduleFilter.options.showDisabled) {
                if (!item.status && !item.disabled) {
                  return true;
                }
              }
              if (moduleFilter.options.showRequired) {
                if (item.status && item.disabled) {
                  return true;
                }
              }
            }
            if (moduleFilter.options.showUnavailable) {
              if (item.unavailable || (!item.status && item.disabled)) {
                return true;
              }
            }
            return false;
          }
        ],
        buildIndex: [
          function(moduleFilter, item) {
            var $checkbox = $('td.checkbox :checkbox', item.element);
            if ($checkbox.size() > 0) {
              item.status = $checkbox.is(':checked');
              item.disabled = $checkbox.is(':disabled');
            }
            else {
              item.status = false;
              item.disabled = true;
              item.unavailable = true;
            }
            return item;
          }
        ],
        showEnabled: $('#edit-module-filter-show-enabled').is(':checked'),
        showDisabled: $('#edit-module-filter-show-disabled').is(':checked'),
        showRequired: $('#edit-module-filter-show-required').is(':checked'),
        showUnavailable: $('#edit-module-filter-show-unavailable').is(':checked')
      });

      var moduleFilter = filterInput.data('moduleFilter');

      moduleFilter.operators = {
        description: function(string, moduleFilter, item) {
          if (item.description == undefined) {
            var description = $('.description', item.element).clone();
            $('.admin-requirements', description).remove();
            $('.admin-operations', description).remove();
            item.description = description.text().toLowerCase();
          }

          if (item.description.indexOf(string) >= 0) {
            return true;
          }
        },
        requiredBy: function(string, moduleFilter, item) {
          if (item.requiredBy == undefined) {
            var requirements = Drupal.ModuleFilter.getRequirements(item.element);
            item.requires = requirements.requires;
            item.requiredBy = requirements.requiredBy;
          }

          for (var i in item.requiredBy) {
            if (item.requiredBy[i].indexOf(string) >= 0) {
              return true;
            }
          }
        },
        requires: function(string, moduleFilter, item) {
          if (item.requires == undefined) {
            var requirements = Drupal.ModuleFilter.getRequirements(item.element);
            item.requires = requirements.requires;
            item.requiredBy = requirements.requiredBy;
          }

          for (var i in item.requires) {
            if (item.requires[i].indexOf(string) >= 0) {
              return true;
            }
          }
        }
      };

      $('#edit-module-filter-show-enabled', context).change(function() {
        moduleFilter.options.showEnabled = $(this).is(':checked');
        moduleFilter.applyFilter();
      });
      $('#edit-module-filter-show-disabled', context).change(function() {
        moduleFilter.options.showDisabled = $(this).is(':checked');
        moduleFilter.applyFilter();
      });
      $('#edit-module-filter-show-required', context).change(function() {
        moduleFilter.options.showRequired = $(this).is(':checked');
        moduleFilter.applyFilter();
      });
      $('#edit-module-filter-show-unavailable', context).change(function() {
        moduleFilter.options.showUnavailable = $(this).is(':checked');
        moduleFilter.applyFilter();
      });

      if (!Drupal.settings.moduleFilter.tabs) {
        moduleFilter.element.bind('moduleFilter:start', function() {
          $('#system-modules fieldset').show();
        });

        moduleFilter.element.bind('moduleFilter:finish', function(e, data) {
          $('#system-modules fieldset').each(function(i) {
            $fieldset = $(this);
            if ($('tbody tr', $fieldset).filter(':visible').length == 0) {
              $fieldset.hide();
            }
          });
        });

        moduleFilter.applyFilter();
      }
    });
  }
};

Drupal.ModuleFilter.getRequirements = function(element) {
  var requires = new Array();
  var requiredBy = new Array();
  $('.admin-requirements', element).each(function() {
    var text = $(this).text();
    if (text.substr(0, 9) == 'Requires:') {
      // Requires element.
      requiresString = text.substr(9);
      requires = requiresString.replace(/\([a-z]*\)/g, '').split(',');
    }
    else if (text.substr(0, 12) == 'Required by:') {
      // Required by element.
      requiredByString = text.substr(12);
      requiredBy = requiredByString.replace(/\([a-z]*\)/g, '').split(',');
    }
  });
  for (var i in requires) {
    requires[i] = $.trim(requires[i].toLowerCase());
  }
  for (var i in requiredBy) {
    requiredBy[i] = $.trim(requiredBy[i].toLowerCase());
  }
  return { requires: requires, requiredBy: requiredBy };
};

})(jQuery);
;

(function ($) {

Drupal.ModuleFilter.tabs = {};
Drupal.ModuleFilter.enabling = {};
Drupal.ModuleFilter.disabling = {};

Drupal.ModuleFilter.jQueryIsNewer = function() {
  if (Drupal.ModuleFilter.jQueryNewer == undefined) {
    var v1parts = $.fn.jquery.split('.');
    var v2parts = new Array('1', '4', '4');

    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length == i) {
        Drupal.ModuleFilter.jQueryNewer = true;
        return Drupal.ModuleFilter.jQueryNewer;
      }

      if (v1parts[i] == v2parts[i]) {
        continue;
      }
      else if (v1parts[i] > v2parts[i]) {
        Drupal.ModuleFilter.jQueryNewer = true;
        return Drupal.ModuleFilter.jQueryNewer;
      }
      else {
        Drupal.ModuleFilter.jQueryNewer = false;
        return Drupal.ModuleFilter.jQueryNewer;
      }
    }

    if (v1parts.length != v2parts.length) {
      Drupal.ModuleFilter.jQueryNewer = false;
      return Drupal.ModuleFilter.jQueryNewer;
    }

    Drupal.ModuleFilter.jQueryNewer = false;
  }
  return Drupal.ModuleFilter.jQueryNewer;
};

Drupal.behaviors.moduleFilterTabs = {
  attach: function(context) {
    if (Drupal.settings.moduleFilter.tabs) {
      $('#module-filter-wrapper table:not(.sticky-header)', context).once('module-filter-tabs', function() {
        var $modules = $('#module-filter-modules');
        var moduleFilter = $('input[name="module_filter[name]"]').data('moduleFilter');
        var table = $(this);

        $('thead', table).show();

        // Remove package header rows.
        $('tr.admin-package-header', table).remove();

        var $tabsWrapper = $('<div id="module-filter-tabs"></div>');

        // Build tabs from package title rows.
        var tabs = '<ul>';
        for (var i in Drupal.settings.moduleFilter.packageIDs) {
          var id = Drupal.settings.moduleFilter.packageIDs[i];

          var name = id;
          var tabClass = 'project-tab';
          var title = null;
          var summary = (Drupal.settings.moduleFilter.countEnabled) ? '<span class="count">' + Drupal.ModuleFilter.countSummary(id) + '</span>' : '';

          switch (id) {
            case 'all':
              name = Drupal.t('All');
              break;
            case 'new':
              name = Drupal.t('New');
              title = Drupal.t('Modules installed within the last week.');
              if (Drupal.settings.moduleFilter.enabledCounts['new'].total == 0) {
                tabClass += ' disabled';
                summary += '<span>' + Drupal.t('No modules added within the last week.') + '</span>';
              }
              break;
            case 'recent':
              name = Drupal.t('Recent');
              title = Drupal.t('Modules enabled/disabled within the last week.');
              if (Drupal.settings.moduleFilter.enabledCounts['recent'].total == 0) {
                tabClass += ' disabled';
                summary += '<span>' + Drupal.t('No modules were enabled or disabled within the last week.') + '</span>';
              }
              break;
            default: 
              var $row = $('#' + id + '-package');
              name = $.trim($row.text());
              $row.remove();
              break;
          }

          tabs += '<li id="' + id + '-tab" class="' + tabClass + '"><a href="#' + id + '" class="overlay-exclude"' + (title ? ' title="' + title + '"' : '') + '><strong>' + name + '</strong><span class="summary">' + summary + '</span></a></li>';
        }
        tabs += '</ul>';
        $tabsWrapper.append(tabs);
        $modules.before($tabsWrapper);

        // Index tabs.
        $('#module-filter-tabs li').each(function() {
          var $tab = $(this);
          var id = $tab.attr('id');
          Drupal.ModuleFilter.tabs[id] = new Drupal.ModuleFilter.Tab($tab, id);
        });

        $('tbody td.checkbox input', $modules).change(function() {
          var $checkbox = $(this);
          var key = $checkbox.parents('tr').data('indexKey');

          moduleFilter.index[key].status = $checkbox.is(':checked');

          if (Drupal.settings.moduleFilter.visualAid) {
            var type = ($checkbox.is(':checked')) ? 'enable' : 'disable';
            Drupal.ModuleFilter.updateVisualAid(type, $checkbox.parents('tr'));
          }
        });

        // Sort rows.
        var rows = $('tbody tr.module', table).get();
        rows.sort(function(a, b) {
          var compA = $('td:nth(1)', a).text().toLowerCase();
          var compB = $('td:nth(1)', b).text().toLowerCase();
          return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        });
        $.each(rows, function(idx, itm) { table.append(itm); });

        // Re-stripe rows.
        $('tr.module', table)
          .removeClass('odd even')
          .filter(':odd').addClass('even').end()
          .filter(':even').addClass('odd');

        moduleFilter.adjustHeight();

        moduleFilter.element.bind('moduleFilter:start', function() {
          moduleFilter.tabResults = {
            'all-tab': { items: {}, count: 0 },
            'recent-tab': { items: {}, count: 0 },
            'new-tab': { items: {}, count: 0 }
          };

          // Empty result info from tabs.
          for (var i in Drupal.ModuleFilter.tabs) {
            if (Drupal.ModuleFilter.tabs[i].resultInfo != undefined) {
              Drupal.ModuleFilter.tabs[i].resultInfo.empty();
            }
          }
        });

        moduleFilter.element.bind('moduleFilter:finish', function(e, data) {
          $.each(moduleFilter.index, function(key, item) {
            if (!item.element.hasClass('js-hide')) {
              var id = Drupal.ModuleFilter.getTabID(item.element);

              if (moduleFilter.tabResults[id] == undefined) {
                moduleFilter.tabResults[id] = { items: {}, count: 0 };
              }
              if (moduleFilter.tabResults[id].items[item.key] == undefined) {
                // All tab
                moduleFilter.tabResults['all-tab'].count++;

                // Recent tab
                if (item.element.hasClass('recent-module')) {
                  moduleFilter.tabResults['recent-tab'].count++;
                }

                // New tab
                if (item.element.hasClass('new-module')) {
                  moduleFilter.tabResults['new-tab'].count++;
                }

                moduleFilter.tabResults[id].items[item.key] = item;
                moduleFilter.tabResults[id].count++;
              }

              if (Drupal.ModuleFilter.activeTab != undefined && Drupal.ModuleFilter.activeTab.id != 'all-tab') {
                if ((Drupal.ModuleFilter.activeTab.id == 'recent-tab' && !item.element.hasClass('recent-module')) || (Drupal.ModuleFilter.activeTab.id == 'new-tab' && !item.element.hasClass('new-module')) || (Drupal.ModuleFilter.activeTab.id != 'recent-tab' && Drupal.ModuleFilter.activeTab.id != 'new-tab' && id != Drupal.ModuleFilter.activeTab.id)) {
                  // The item is not in the active tab, so hide it.
                  item.element.addClass('js-hide');
                }
              }
            }
          });

          if (Drupal.settings.moduleFilter.visualAid) {
            if (moduleFilter.text) {
              // Add result info to tabs.
              for (var id in moduleFilter.tabResults) {
                var tab = Drupal.ModuleFilter.tabs[id];

                if (tab.resultInfo == undefined) {
                  var resultInfo = '<span class="result-info"></span>'
                  $('a', tab.element).prepend(resultInfo);
                  tab.resultInfo = $('span.result-info', tab.element);
                }

                tab.resultInfo.append(moduleFilter.tabResults[id].count);
              }

              if (Drupal.settings.moduleFilter.hideEmptyTabs) {
                for (var id in Drupal.ModuleFilter.tabs) {
                  if (moduleFilter.tabResults[id] != undefined) {
                    Drupal.ModuleFilter.tabs[id].element.show();
                  }
                  else if (Drupal.ModuleFilter.activeTab == undefined || Drupal.ModuleFilter.activeTab.id != id) {
                    Drupal.ModuleFilter.tabs[id].element.hide();
                  }
                }
              }
            }
            else {
              // Make sure all tabs are visible.
              if (Drupal.settings.moduleFilter.hideEmptyTabs) {
                $('#module-filter-tabs li').show();
              }
            }
          }

          if ((Drupal.ModuleFilter.activeTab != undefined && (moduleFilter.tabResults[Drupal.ModuleFilter.activeTab.id] == undefined || moduleFilter.tabResults[Drupal.ModuleFilter.activeTab.id].count <= 0))) {
            // The current tab contains no results.
            moduleFilter.results = 0;
          }

          moduleFilter.adjustHeight();
        });

        if (Drupal.settings.moduleFilter.useURLFragment) {
          $(window).bind('hashchange.module-filter', $.proxy(Drupal.ModuleFilter, 'eventHandlerOperateByURLFragment')).triggerHandler('hashchange.module-filter');
        }
        else {
          Drupal.ModuleFilter.selectTab();
        }

        if (Drupal.settings.moduleFilter.useSwitch) {
          $('td.checkbox div.form-item').hide();
          $('td.checkbox').each(function(i) {
            var $cell = $(this);
            var $checkbox = $(':checkbox', $cell);
            var $switch = $('.toggle-enable', $cell);
            $switch.removeClass('js-hide').click(function() {
              if (!$(this).hasClass('disabled')) {
                if (Drupal.ModuleFilter.jQueryIsNewer()) {
                  $checkbox.click();
                }
                else {
                  $checkbox.click().change();
                }
              }
            });
            $checkbox.click(function() {
              if (!$switch.hasClass('disabled')) {
                $switch.toggleClass('off');
              }
            });
          });
        }

        var $tabs = $('#module-filter-tabs');

        function getParentTopOffset($obj, offset) {
          var $parent = $obj.offsetParent();
          if ($obj[0] != $parent[0]) {
            offset += $parent.position().top;
            return getParentTopOffset($parent, offset);
          }
          return offset;
        }

        var tabsTopOffset = null;
        function getParentsTopOffset() {
          if (tabsTopOffset === null) {
            tabsTopOffset = getParentTopOffset($tabs.parent(), 0);
          }
          return tabsTopOffset;
        }

        function viewportTop() {
          var top = $(window).scrollTop();
          return top;
        }

        function viewportBottom() {
          var top = $(window).scrollTop();
          var bottom = top + $(window).height();

          bottom -= $('#page-actions').height();

          return bottom;
        }

        function fixToTop(top) {
          if ($tabs.hasClass('bottom-fixed')) {
            $tabs.css({
              'position': 'absolute',
              'top': $tabs.position().top - getParentsTopOffset(),
              'bottom': 'auto'
            });
            $tabs.removeClass('bottom-fixed');
          }

          if (($tabs.css('position') == 'absolute' && $tabs.offset().top - top >= 0) || ($tabs.css('position') != 'absolute' && $tabs.offset().top - top <= 0)) {
            $tabs.addClass('top-fixed');
            $tabs.attr('style', '');
          }
        }

        function fixToBottom(bottom) {
          if ($tabs.hasClass('top-fixed')) {
            $tabs.css({
              'position': 'absolute',
              'top': $tabs.position().top - getParentsTopOffset(),
              'bottom': 'auto'
            });
            $tabs.removeClass('top-fixed');
          }

          if ($tabs.offset().top + $tabs.height() - bottom <= 0) {
            $tabs.addClass('bottom-fixed');
            var style = '';
            var pageActionsHeight = $('#page-actions').height();
            if (pageActionsHeight > 0) {
              style = 'bottom: ' + pageActionsHeight + 'px';
            }
            else if (Drupal.settings.moduleFilter.dynamicPosition) {
              // style = 'bottom: ' + $('#module-filter-submit', $tabs).height() + 'px';
            }
            $tabs.attr('style', style);
          }
        }

        var lastTop = 0;
        $(window).scroll(function() {
          var top = viewportTop();
          var bottom = viewportBottom();

          if ($modules.offset().top >= top) {
            $tabs.removeClass('top-fixed').attr('style', '');
          }
          else {
            if (top > lastTop) { // Downward scroll.
              if ($tabs.height() > bottom - top) {
                fixToBottom(bottom);
              }
              else {
                fixToTop(top);
              }
            }
            else { // Upward scroll.
              fixToTop(top);
            }
          }
          lastTop = top;
        });

        moduleFilter.adjustHeight();
      });
    }
  }
};

Drupal.ModuleFilter.Tab = function(element, id) {
  var self = this;

  this.id = id;
  this.hash = id.substring(0, id.length - 4);
  this.element = element;

  $('a', this.element).click(function() {
    if (!Drupal.settings.moduleFilter.useURLFragment) {
      var hash = (!self.element.hasClass('selected')) ? self.hash : 'all';
      Drupal.ModuleFilter.selectTab(hash);
      return false;
    }

    if (self.element.hasClass('selected')) {
      // Clear the active tab.
      window.location.hash = 'all';
      return false;
    }
  });

  $('tr.' + this.id, $('#system-modules')).hover(
    function() {
      self.element.addClass('suggest');
    },
    function() {
      self.element.removeClass('suggest');
    }
  );
};

Drupal.ModuleFilter.selectTab = function(hash) {
  if (!hash || Drupal.ModuleFilter.tabs[hash + '-tab'] == undefined || Drupal.settings.moduleFilter.enabledCounts[hash].total == 0) {
    if (Drupal.settings.moduleFilter.rememberActiveTab) {
      var activeTab = Drupal.ModuleFilter.getState('activeTab');
      if (activeTab && Drupal.ModuleFilter.tabs[activeTab + '-tab'] != undefined) {
        hash = activeTab;
      }
    }

    if (!hash) {
      hash = 'all';
    }
  }

  if (Drupal.ModuleFilter.activeTab != undefined) {
    Drupal.ModuleFilter.activeTab.element.removeClass('selected');
  }

  Drupal.ModuleFilter.activeTab = Drupal.ModuleFilter.tabs[hash + '-tab'];
  Drupal.ModuleFilter.activeTab.element.addClass('selected');

  var moduleFilter = $('input[name="module_filter[name]"]').data('moduleFilter');
  var filter = moduleFilter.applyFilter();

  if (!Drupal.ModuleFilter.modulesTop) {
    Drupal.ModuleFilter.modulesTop = $('#module-filter-modules').offset().top;
  }
  else {
    // Calculate header offset; this is important in case the site is using
    // admin_menu module which has fixed positioning and is on top of everything
    // else.
    var headerOffset = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
    // Scroll back to top of #module-filter-modules.
    $('html, body').animate({
      scrollTop: Drupal.ModuleFilter.modulesTop - headerOffset
    }, 500);
    // $('html, body').scrollTop(Drupal.ModuleFilter.modulesTop);
  }

  Drupal.ModuleFilter.setState('activeTab', hash);
};

Drupal.ModuleFilter.eventHandlerOperateByURLFragment = function(event) {
  var hash = $.param.fragment();
  Drupal.ModuleFilter.selectTab(hash);
};

Drupal.ModuleFilter.countSummary = function(id) {
  return Drupal.t('@enabled of @total', { '@enabled': Drupal.settings.moduleFilter.enabledCounts[id].enabled, '@total': Drupal.settings.moduleFilter.enabledCounts[id].total });
};

Drupal.ModuleFilter.Tab.prototype.updateEnabling = function(name, remove) {
  this.enabling = this.enabling || {};
  if (!remove) {
    this.enabling[name] = name;
  }
  else {
    delete this.enabling[name];
  }
};

Drupal.ModuleFilter.Tab.prototype.updateDisabling = function(name, remove) {
  this.disabling = this.disabling || {};
  if (!remove) {
    this.disabling[name] = name;
  }
  else {
    delete this.disabling[name];
  }
};

Drupal.ModuleFilter.Tab.prototype.updateVisualAid = function() {
  var visualAid = '';
  var enabling = new Array();
  var disabling = new Array();

  if (this.enabling != undefined) {
    for (var i in this.enabling) {
      enabling.push(this.enabling[i]);
    }
    if (enabling.length > 0) {
      enabling.sort();
      visualAid += '<span class="enabling">+' + enabling.join('</span>, <span class="enabling">') + '</span>';
    }
  }
  if (this.disabling != undefined) {
    for (var i in this.disabling) {
      disabling.push(this.disabling[i]);
    }
    if (disabling.length > 0) {
      disabling.sort();
      if (enabling.length > 0) {
        visualAid += '<br />';
      }
      visualAid += '<span class="disabling">-' + disabling.join('</span>, <span class="disabling">') + '</span>';
    }
  }

  if (this.visualAid == undefined) {
    $('a span.summary', this.element).append('<span class="visual-aid"></span>');
    this.visualAid = $('span.visual-aid', this.element);
  }

  this.visualAid.empty().append(visualAid);
};

Drupal.ModuleFilter.getTabID = function($row) {
  var id = $row.data('moduleFilterTabID');
  if (!id) {
    // Find the tab ID.
    var classes = $row.attr('class').split(' ');
    for (var i in classes) {
      if (Drupal.ModuleFilter.tabs[classes[i]] != undefined) {
        id = classes[i];
        break;
      }
    }
    $row.data('moduleFilterTabID', id);
  }
  return id;
};

Drupal.ModuleFilter.updateVisualAid = function(type, $row) {
  var id = Drupal.ModuleFilter.getTabID($row);

  if (!id) {
    return false;
  }

  var tab = Drupal.ModuleFilter.tabs[id];
  var name = $('td:nth(1) strong', $row).text();
  switch (type) {
    case 'enable':
      if (Drupal.ModuleFilter.disabling[id + name] != undefined) {
        delete Drupal.ModuleFilter.disabling[id + name];
        tab.updateDisabling(name, true);
        $row.removeClass('disabling');
      }
      else {
        Drupal.ModuleFilter.enabling[id + name] = name;
        tab.updateEnabling(name);
        $row.addClass('enabling');
      }
      break;
    case 'disable':
      if (Drupal.ModuleFilter.enabling[id + name] != undefined) {
        delete Drupal.ModuleFilter.enabling[id + name];
        tab.updateEnabling(name, true);
        $row.removeClass('enabling');
      }
      else {
        Drupal.ModuleFilter.disabling[id + name] = name;
        tab.updateDisabling(name);
        $row.addClass('disabling');
      }
      break;
  }

  tab.updateVisualAid();
};

Drupal.ModuleFilter.Filter.prototype.adjustHeight = function() {
  // Hack for adjusting the height of the modules section.
  var minHeight = $('#module-filter-tabs ul').height() + 10;
  minHeight += $('#module-filter-tabs #module-filter-submit').height();
  $('#module-filter-modules').css('min-height', minHeight);
  this.element.trigger('moduleFilter:adjustHeight');
}

})(jQuery);
;
(function($) {

Drupal.behaviors.moduleFilterDynamicPosition = {
  attach: function(context) {
    var $window = $(window);

    $('#module-filter-wrapper', context).once('dynamic-position', function() {
      // Move the submit button just below the tabs.
      $('#module-filter-tabs').append($('#module-filter-submit'));

      var positionSubmit = function() {
        var $tabs = $('#module-filter-tabs');
        var $submit = $('#module-filter-submit', $tabs);

        // Vertical movement.
        var bottom = $tabs.offset().top + $tabs.outerHeight();
        if ($submit.hasClass('fixed-bottom')) {
          bottom += $submit.height();
        }
        if (bottom >= $window.height() + $window.scrollTop()) {
          $submit.addClass('fixed fixed-bottom');
          $tabs.css('padding-bottom', $submit.height());
        }
        else {
          $submit.removeClass('fixed fixed-bottom');
          $tabs.css('padding-bottom', 0);
        }

        // Horizontal movement.
        if ($submit.hasClass('fixed-bottom') || $submit.hasClass('fixed-top')) {
          var left = $tabs.offset().left - $window.scrollLeft();
          if (left != $submit.offset().left - $window.scrollLeft()) {
            $submit.css('left', left);
          }
        }
      };

      // Control the positioning.
      $window.scroll(positionSubmit);
      $window.resize(positionSubmit);
      var moduleFilter = $('input[name="module_filter[name]"]').data('moduleFilter');
      moduleFilter.element.bind('moduleFilter:adjustHeight', positionSubmit);
      moduleFilter.adjustHeight();
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');
  this.displayWeight = null;

  // React to columns change to avoid making checks in the scroll callback.
  this.originalTable.bind('columnschange', function (e, display) {
    // This will force header size to be calculated on scroll.
    self.widthCalculated = (self.displayWeight !== null && self.displayWeight === display);
    self.displayWeight = display;
  });

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    var $that = null;
    var $stickyCell = null;
    var display = null;
    var cellWidth = null;
    // Resize header and its cell widths.
    // Only apply width to visible table cells. This prevents the header from
    // displaying incorrectly when the sticky header is no longer visible.
    for (var i = 0, il = this.originalHeaderCells.length; i < il; i += 1) {
      $that = $(this.originalHeaderCells[i]);
      $stickyCell = this.stickyHeaderCells.eq($that.index());
      display = $that.css('display');
      if (display !== 'none') {
        cellWidth = $that.css('width');
        // Exception for IE7.
        if (cellWidth === 'auto') {
          cellWidth = $that[0].clientWidth + 'px';
        }
        $stickyCell.css({'width': cellWidth, 'display': display});
      }
      else {
        $stickyCell.css('display', 'none');
      }
    }
    this.stickyTable.css('width', this.originalTable.outerWidth());
  }
};

})(jQuery);
;
