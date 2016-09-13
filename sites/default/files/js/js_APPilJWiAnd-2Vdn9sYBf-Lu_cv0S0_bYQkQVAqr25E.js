/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);;
(function($,window){"$:nomunge";var undefined,aps=Array.prototype.slice,decode=decodeURIComponent,jq_param=$.param,jq_param_sorted,jq_param_fragment,jq_deparam,jq_deparam_fragment,jq_bbq=$.bbq=$.bbq||{},jq_bbq_pushState,jq_bbq_getState,jq_elemUrlAttr,special=$.event.special,str_hashchange="hashchange",str_querystring="querystring",str_fragment="fragment",str_elemUrlAttr="elemUrlAttr",str_href="href",str_src="src",re_params_querystring=/^.*\?|#.*$/g,re_params_fragment,re_fragment,re_no_escape,ajax_crawlable,fragment_prefix,elemUrlAttr_cache={};function is_string(arg){return typeof arg==="string"}function curry(func){var args=aps.call(arguments,1);return function(){return func.apply(this,args.concat(aps.call(arguments)))}}function get_fragment(url){return url.replace(re_fragment,"$2")}function get_querystring(url){return url.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function jq_param_sub(is_fragment,get_func,url,params,merge_mode){var result,qs,matches,url_params,hash;if(params!==undefined){matches=url.match(is_fragment?re_fragment:/^([^#?]*)\??([^#]*)(#?.*)/);hash=matches[3]||"";if(merge_mode===2&&is_string(params)){qs=params.replace(is_fragment?re_params_fragment:re_params_querystring,"")}else{url_params=jq_deparam(matches[2]);params=is_string(params)?jq_deparam[is_fragment?str_fragment:str_querystring](params):params;qs=merge_mode===2?params:merge_mode===1?$.extend({},params,url_params):$.extend({},url_params,params);qs=jq_param_sorted(qs);if(is_fragment){qs=qs.replace(re_no_escape,decode)}}result=matches[1]+(is_fragment?fragment_prefix:qs||!matches[1]?"?":"")+qs+hash}else{result=get_func(url!==undefined?url:location.href)}return result}jq_param[str_querystring]=curry(jq_param_sub,0,get_querystring);jq_param[str_fragment]=jq_param_fragment=curry(jq_param_sub,1,get_fragment);jq_param.sorted=jq_param_sorted=function(a,traditional){var arr=[],obj={};$.each(jq_param(a,traditional).split("&"),function(i,v){var key=v.replace(/(?:%5B|=).*$/,""),key_obj=obj[key];if(!key_obj){key_obj=obj[key]=[];arr.push(key)}key_obj.push(v)});return $.map(arr.sort(),function(v){return obj[v]}).join("&")};jq_param_fragment.noEscape=function(chars){chars=chars||"";var arr=$.map(chars.split(""),encodeURIComponent);re_no_escape=new RegExp(arr.join("|"),"g")};jq_param_fragment.noEscape(",/");jq_param_fragment.ajaxCrawlable=function(state){if(state!==undefined){if(state){re_params_fragment=/^.*(?:#!|#)/;re_fragment=/^([^#]*)(?:#!|#)?(.*)$/;fragment_prefix="#!"}else{re_params_fragment=/^.*#/;re_fragment=/^([^#]*)#?(.*)$/;fragment_prefix="#"}ajax_crawlable=!!state}return ajax_crawlable};jq_param_fragment.ajaxCrawlable(0);$.deparam=jq_deparam=function(params,coerce){var obj={},coerce_types={"true":!0,"false":!1,"null":null};$.each(params.replace(/\+/g," ").split("&"),function(j,v){var param=v.split("="),key=decode(param[0]),val,cur=obj,i=0,keys=key.split("]["),keys_last=keys.length-1;if(/\[/.test(keys[0])&&/\]$/.test(keys[keys_last])){keys[keys_last]=keys[keys_last].replace(/\]$/,"");keys=keys.shift().split("[").concat(keys);keys_last=keys.length-1}else{keys_last=0}if(param.length===2){val=decode(param[1]);if(coerce){val=val&&!isNaN(val)?+val:val==="undefined"?undefined:coerce_types[val]!==undefined?coerce_types[val]:val}if(keys_last){for(;i<=keys_last;i++){key=keys[i]===""?cur.length:keys[i];cur=cur[key]=i<keys_last?cur[key]||(keys[i+1]&&isNaN(keys[i+1])?{}:[]):val}}else{if($.isArray(obj[key])){obj[key].push(val)}else if(obj[key]!==undefined){obj[key]=[obj[key],val]}else{obj[key]=val}}}else if(key){obj[key]=coerce?undefined:""}});return obj};function jq_deparam_sub(is_fragment,url_or_params,coerce){if(url_or_params===undefined||typeof url_or_params==="boolean"){coerce=url_or_params;url_or_params=jq_param[is_fragment?str_fragment:str_querystring]()}else{url_or_params=is_string(url_or_params)?url_or_params.replace(is_fragment?re_params_fragment:re_params_querystring,""):url_or_params}return jq_deparam(url_or_params,coerce)}jq_deparam[str_querystring]=curry(jq_deparam_sub,0);jq_deparam[str_fragment]=jq_deparam_fragment=curry(jq_deparam_sub,1);$[str_elemUrlAttr]||($[str_elemUrlAttr]=function(obj){return $.extend(elemUrlAttr_cache,obj)})({a:str_href,base:str_href,iframe:str_src,img:str_src,input:str_src,form:"action",link:str_href,script:str_src});jq_elemUrlAttr=$[str_elemUrlAttr];function jq_fn_sub(mode,force_attr,params,merge_mode){if(!is_string(params)&&typeof params!=="object"){merge_mode=params;params=force_attr;force_attr=undefined}return this.each(function(){var that=$(this),attr=force_attr||jq_elemUrlAttr()[(this.nodeName||"").toLowerCase()]||"",url=attr&&that.attr(attr)||"";that.attr(attr,jq_param[mode](url,params,merge_mode))})}$.fn[str_querystring]=curry(jq_fn_sub,str_querystring);$.fn[str_fragment]=curry(jq_fn_sub,str_fragment);jq_bbq.pushState=jq_bbq_pushState=function(params,merge_mode){if(is_string(params)&&/^#/.test(params)&&merge_mode===undefined){merge_mode=2}var has_args=params!==undefined,url=jq_param_fragment(location.href,has_args?params:{},has_args?merge_mode:2);location.href=url};jq_bbq.getState=jq_bbq_getState=function(key,coerce){return key===undefined||typeof key==="boolean"?jq_deparam_fragment(key):jq_deparam_fragment(coerce)[key]};jq_bbq.removeState=function(arr){var state={};if(arr!==undefined){state=jq_bbq_getState();$.each($.isArray(arr)?arr:arguments,function(i,v){delete state[v]})}jq_bbq_pushState(state,2)};special[str_hashchange]=$.extend(special[str_hashchange],{add:function(handleObj){var old_handler;function new_handler(e){var hash=e[str_fragment]=jq_param_fragment();e.getState=function(key,coerce){return key===undefined||typeof key==="boolean"?jq_deparam(hash,key):jq_deparam(hash,coerce)[key]};old_handler.apply(this,arguments)}if($.isFunction(handleObj)){old_handler=handleObj;return new_handler}else{old_handler=handleObj.handler;handleObj.handler=new_handler}}})})(jQuery,this);(function($,window,undefined){"$:nomunge";var str_hashchange="hashchange",doc=document,fake_onhashchange,special=$.event.special,doc_mode=doc.documentMode,supports_onhashchange="on"+str_hashchange in window&&(doc_mode===undefined||doc_mode>7);function get_fragment(url){url=url||location.href;return"#"+url.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[str_hashchange]=function(fn){return fn?this.bind(str_hashchange,fn):this.trigger(str_hashchange)};$.fn[str_hashchange].delay=50;special[str_hashchange]=$.extend(special[str_hashchange],{setup:function(){if(supports_onhashchange){return false}$(fake_onhashchange.start)},teardown:function(){if(supports_onhashchange){return false}$(fake_onhashchange.stop)}});fake_onhashchange=function(){var self={},timeout_id,last_hash=get_fragment(),fn_retval=function(val){return val},history_set=fn_retval,history_get=fn_retval;self.start=function(){timeout_id||poll()};self.stop=function(){timeout_id&&clearTimeout(timeout_id);timeout_id=undefined};function poll(){var hash=get_fragment(),history_hash=history_get(last_hash);if(hash!==last_hash){history_set(last_hash=hash,history_hash);$(window).trigger(str_hashchange)}else if(history_hash!==last_hash){location.href=location.href.replace(/#.*/,"")+history_hash}timeout_id=setTimeout(poll,$.fn[str_hashchange].delay)}return self}()})(jQuery,this);;
/**
 * Modified by ericduran for jQuery Update compatibility.
 *
 * Patches overlay-parent.js for jQuery 1.9.1 compatibility.
 */

/**
 * @file
 * Attaches the behaviors for the Overlay parent pages.
 */

(function ($) {

/**
 * Open the overlay, or load content into it, when an admin link is clicked.
 */
Drupal.behaviors.overlayParent = {
  attach: function (context, settings) {
    if (Drupal.overlay.isOpen) {
      Drupal.overlay.makeDocumentUntabbable(context);
    }

    if (this.processed) {
      return;
    }
    this.processed = true;

    $(window)
      // When the hash (URL fragment) changes, open the overlay if needed.
      .bind('hashchange.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOperateByURLFragment'))
      // Trigger the hashchange handler once, after the page is loaded, so that
      // permalinks open the overlay.
      .triggerHandler('hashchange.drupal-overlay');

    $(document)
      // Instead of binding a click event handler to every link we bind one to
      // the document and only handle events that bubble up. This allows other
      // scripts to bind their own handlers to links and also to prevent
      // overlay's handling.
      .bind('click.drupal-overlay mouseup.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOverrideLink'));
  }
};

/**
 * Overlay object for parent windows.
 *
 * Events
 * Overlay triggers a number of events that can be used by other scripts.
 * - drupalOverlayOpen: This event is triggered when the overlay is opened.
 * - drupalOverlayBeforeClose: This event is triggered when the overlay attempts
 *   to close. If an event handler returns false, the close will be prevented.
 * - drupalOverlayClose: This event is triggered when the overlay is closed.
 * - drupalOverlayBeforeLoad: This event is triggered right before a new URL
 *   is loaded into the overlay.
 * - drupalOverlayReady: This event is triggered when the DOM of the overlay
 *   child document is fully loaded.
 * - drupalOverlayLoad: This event is triggered when the overlay is finished
 *   loading.
 * - drupalOverlayResize: This event is triggered when the overlay is being
 *   resized to match the parent window.
 */
Drupal.overlay = Drupal.overlay || {
  isOpen: false,
  isOpening: false,
  isClosing: false,
  isLoading: false
};

Drupal.overlay.prototype = {};

/**
 * Open the overlay.
 *
 * @param url
 *   The URL of the page to open in the overlay.
 *
 * @return
 *   TRUE if the overlay was opened, FALSE otherwise.
 */
Drupal.overlay.open = function (url) {
  // Just one overlay is allowed.
  if (this.isOpen || this.isOpening) {
    return this.load(url);
  }
  this.isOpening = true;
  // Store the original document title.
  this.originalTitle = document.title;

  // Create the dialog and related DOM elements.
  this.create();

  this.isOpening = false;
  this.isOpen = true;
  $(document.documentElement).addClass('overlay-open');
  this.makeDocumentUntabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayOpen');

  return this.load(url);
};

/**
 * Create the underlying markup and behaviors for the overlay.
 */
Drupal.overlay.create = function () {
  this.$container = $(Drupal.theme('overlayContainer'))
    .appendTo(document.body);

  // Overlay uses transparent iframes that cover the full parent window.
  // When the overlay is open the scrollbar of the parent window is hidden.
  // Because some browsers show a white iframe background for a short moment
  // while loading a page into an iframe, overlay uses two iframes. By loading
  // the page in a hidden (inactive) iframe the user doesn't see the white
  // background. When the page is loaded the active and inactive iframes
  // are switched.
  this.activeFrame = this.$iframeA = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.inactiveFrame = this.$iframeB = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.$iframeA.bind('load.drupal-overlay', { self: this.$iframeA[0], sibling: this.$iframeB }, $.proxy(this, 'loadChild'));
  this.$iframeB.bind('load.drupal-overlay', { self: this.$iframeB[0], sibling: this.$iframeA }, $.proxy(this, 'loadChild'));

  // Add a second class "drupal-overlay-open" to indicate these event handlers
  // should only be bound when the overlay is open.
  var eventClass = '.drupal-overlay.drupal-overlay-open';
  $(window)
    .bind('resize' + eventClass, $.proxy(this, 'eventhandlerOuterResize'));
  $(document)
    .bind('drupalOverlayLoad' + eventClass, $.proxy(this, 'eventhandlerOuterResize'))
    .bind('drupalOverlayReady' + eventClass +
          ' drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerSyncURLFragment'))
    .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRefreshPage'))
    .bind('drupalOverlayBeforeClose' + eventClass +
          ' drupalOverlayBeforeLoad' + eventClass +
          ' drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerDispatchEvent'));

  if ($('.overlay-displace-top, .overlay-displace-bottom').length) {
    $(document)
      .bind('drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerAlterDisplacedElements'))
      .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRestoreDisplacedElements'));
  }
};

/**
 * Load the given URL into the overlay iframe.
 *
 * Use this method to change the URL being loaded in the overlay if it is
 * already open.
 *
 * @return
 *   TRUE if URL is loaded into the overlay, FALSE otherwise.
 */
Drupal.overlay.load = function (url) {
  if (!this.isOpen) {
    return false;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayBeforeLoad');

  $(document.documentElement).addClass('overlay-loading');

  // The contentDocument property is not supported in IE until IE8.
  var iframeDocument = this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document;

  // location.replace doesn't create a history entry. location.href does.
  // In this case, we want location.replace, as we're creating the history
  // entry using URL fragments.
  iframeDocument.location.replace(url);

  return true;
};

/**
 * Close the overlay and remove markup related to it from the document.
 *
 * @return
 *   TRUE if the overlay was closed, FALSE otherwise.
 */
Drupal.overlay.close = function () {
  // Prevent double execution when close is requested more than once.
  if (!this.isOpen || this.isClosing) {
    return false;
  }

  // Allow other scripts to respond to this event.
  var event = $.Event('drupalOverlayBeforeClose');
  $(document).trigger(event);
  // If a handler returned false, the close will be prevented.
  if (event.isDefaultPrevented()) {
    return false;
  }

  this.isClosing = true;
  this.isOpen = false;
  $(document.documentElement).removeClass('overlay-open');
  // Restore the original document title.
  document.title = this.originalTitle;
  this.makeDocumentTabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayClose');

  // When the iframe is still loading don't destroy it immediately but after
  // the content is loaded (see Drupal.overlay.loadChild).
  if (!this.isLoading) {
    this.destroy();
    this.isClosing = false;
  }
  return true;
};

/**
 * Destroy the overlay.
 */
Drupal.overlay.destroy = function () {
  $([document, window]).unbind('.drupal-overlay-open');
  this.$container.remove();

  this.$container = null;
  this.$iframeA = null;
  this.$iframeB = null;

  this.iframeWindow = null;
};

/**
 * Redirect the overlay parent window to the given URL.
 *
 * @param url
 *   Can be an absolute URL or a relative link to the domain root.
 */
Drupal.overlay.redirect = function (url) {
  // Create a native Link object, so we can use its object methods.
  var link = $(url.link(url)).get(0);

  // If the link is already open, force the hashchange event to simulate reload.
  if (window.location.href == link.href) {
    $(window).triggerHandler('hashchange.drupal-overlay');
  }

  window.location.href = link.href;
  return true;
};

/**
 * Bind the child window.
 *
 * Note that this function is fired earlier than Drupal.overlay.loadChild.
 */
Drupal.overlay.bindChild = function (iframeWindow, isClosing) {
  this.iframeWindow = iframeWindow;

  // We are done if the child window is closing.
  if (isClosing || this.isClosing || !this.isOpen) {
    return;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayReady');
};

/**
 * Event handler: load event handler for the overlay iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: load
 *   - event.currentTarget: iframe
 */
Drupal.overlay.loadChild = function (event) {
  var iframe = event.data.self;
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var iframeWindow = iframeDocument.defaultView || iframeDocument.parentWindow;
  if (iframeWindow.location == 'about:blank') {
    return;
  }

  this.isLoading = false;
  $(document.documentElement).removeClass('overlay-loading');
  event.data.sibling.removeClass('overlay-active').attr({ 'tabindex': -1 });

  // Only continue when overlay is still open and not closing.
  if (this.isOpen && !this.isClosing) {
    // And child document is an actual overlayChild.
    if (iframeWindow.Drupal && iframeWindow.Drupal.overlayChild) {
      // Replace the document title with title of iframe.
      document.title = iframeWindow.document.title;

      this.activeFrame = $(iframe)
        .addClass('overlay-active')
        // Add a title attribute to the iframe for accessibility.
        .attr('title', Drupal.t('@title dialog', { '@title': iframeWindow.jQuery('#overlay-title').text() })).removeAttr('tabindex');
      this.inactiveFrame = event.data.sibling;

      // Load an empty document into the inactive iframe.
      (this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document).location.replace('about:blank');

      // Move the focus to just before the "skip to main content" link inside
      // the overlay.
      this.activeFrame.focus();
      var skipLink = iframeWindow.jQuery('a:first');
      Drupal.overlay.setFocusBefore(skipLink, iframeWindow.document);

      // Allow other scripts to respond to this event.
      $(document).trigger('drupalOverlayLoad');
    }
    else {
      window.location = iframeWindow.location.href.replace(/([?&]?)render=overlay&?/g, '$1').replace(/\?$/, '');
    }
  }
  else {
    this.destroy();
  }
};

/**
 * Creates a placeholder element to receive document focus.
 *
 * Setting the document focus to a link will make it visible, even if it's a
 * "skip to main content" link that should normally be visible only when the
 * user tabs to it. This function can be used to set the document focus to
 * just before such an invisible link.
 *
 * @param $element
 *   The jQuery element that should receive focus on the next tab press.
 * @param document
 *   The iframe window element to which the placeholder should be added. The
 *   placeholder element has to be created inside the same iframe as the element
 *   it precedes, to keep IE happy. (http://bugs.jquery.com/ticket/4059)
 */
Drupal.overlay.setFocusBefore = function ($element, document) {
  // Create an anchor inside the placeholder document.
  var placeholder = document.createElement('a');
  var $placeholder = $(placeholder).addClass('element-invisible').attr('href', '#');
  // Put the placeholder where it belongs, and set the document focus to it.
  $placeholder.insertBefore($element);
  $placeholder.focus();
  // Make the placeholder disappear as soon as it loses focus, so that it
  // doesn't appear in the tab order again.
  $placeholder.one('blur', function () {
    $(this).remove();
  });
};

/**
 * Check if the given link is in the administrative section of the site.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL represents an administrative link, FALSE otherwise.
 */
Drupal.overlay.isAdminLink = function (url) {
  if (Drupal.overlay.isExternalLink(url)) {
    return false;
  }

  var path = this.getPath(url);

  // Turn the list of administrative paths into a regular expression.
  if (!this.adminPathRegExp) {
    var prefix = '';
    if (Drupal.settings.overlay.pathPrefixes.length) {
      // Allow path prefixes used for language negatiation followed by slash,
      // and the empty string.
      prefix = '(' + Drupal.settings.overlay.pathPrefixes.join('/|') + '/|)';
    }
    var adminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.admin.replace(/\s+/g, '|') + ')$';
    var nonAdminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.non_admin.replace(/\s+/g, '|') + ')$';
    adminPaths = adminPaths.replace(/\*/g, '.*');
    nonAdminPaths = nonAdminPaths.replace(/\*/g, '.*');
    this.adminPathRegExp = new RegExp(adminPaths);
    this.nonAdminPathRegExp = new RegExp(nonAdminPaths);
  }

  return this.adminPathRegExp.exec(path) && !this.nonAdminPathRegExp.exec(path);
};

/**
 * Determine whether a link is external to the site.
 *
 * Deprecated. Use Drupal.urlIsLocal() instead.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL is external to the site, FALSE otherwise.
 */
Drupal.overlay.isExternalLink = function (url) {

  // Drupal.urlIsLocal() was added in Drupal 7.39.
  if (typeof Drupal.urlIsLocal === 'function') {
    return !Drupal.urlIsLocal(url);
  }

  var re = RegExp('^((f|ht)tps?:)?//(?!' + window.location.host + ')');
  return re.test(url);
};

/**
 * Constructs an internal URL (relative to this site) from the provided path.
 *
 * For example, if the provided path is 'admin' and the site is installed at
 * http://example.com/drupal, this function will return '/drupal/admin'.
 *
 * @param path
 *   The internal path, without any leading slash.
 *
 * @return
 *   The internal URL derived from the provided path, or null if a valid
 *   internal path cannot be constructed (for example, if an attempt to create
 *   an external link is detected).
 */
Drupal.overlay.getInternalUrl = function (path) {
  var url = Drupal.settings.basePath + path;
  if (!this.isExternalLink(url)) {
    return url;
  }
};

/**
 * Event handler: resizes overlay according to the size of the parent window.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerOuterResize = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  // IE6 uses position:absolute instead of position:fixed.
  if (typeof document.body.style.maxHeight != 'string') {
    this.activeFrame.height($(window).height());
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayResize');
};

/**
 * Event handler: resizes displaced elements so they won't overlap the scrollbar
 * of overlay's iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerAlterDisplacedElements = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  $(this.iframeWindow.document.body).css({
    marginTop: Drupal.overlay.getDisplacement('top'),
    marginBottom: Drupal.overlay.getDisplacement('bottom')
  })
  // IE7 isn't reflowing the document immediately.
  // @todo This might be fixed in a cleaner way.
  .addClass('overlay-trigger-reflow').removeClass('overlay-trigger-reflow');

  var documentHeight = this.iframeWindow.document.body.clientHeight;
  var documentWidth = this.iframeWindow.document.body.clientWidth;
  // IE6 doesn't support maxWidth, use width instead.
  var maxWidthName = (typeof document.body.style.maxWidth == 'string') ? 'maxWidth' : 'width';

  if (Drupal.overlay.leftSidedScrollbarOffset === undefined && $(document.documentElement).attr('dir') === 'rtl') {
    // We can't use element.clientLeft to detect whether scrollbars are placed
    // on the left side of the element when direction is set to "rtl" as most
    // browsers dont't support it correctly.
    // http://www.gtalbot.org/BugzillaSection/DocumentAllDHTMLproperties.html
    // There seems to be absolutely no way to detect whether the scrollbar
    // is on the left side in Opera; always expect scrollbar to be on the left.
    if ($.browser.opera) {
      Drupal.overlay.leftSidedScrollbarOffset = document.documentElement.clientWidth - this.iframeWindow.document.documentElement.clientWidth + this.iframeWindow.document.documentElement.clientLeft;
    }
    else if (this.iframeWindow.document.documentElement.clientLeft) {
      Drupal.overlay.leftSidedScrollbarOffset = this.iframeWindow.document.documentElement.clientLeft;
    }
    else {
      var el1 = $('<div style="direction: rtl; overflow: scroll;"></div>').appendTo(document.body);
      var el2 = $('<div></div>').appendTo(el1);
      Drupal.overlay.leftSidedScrollbarOffset = parseInt(el2[0].offsetLeft - el1[0].offsetLeft);
      el1.remove();
    }
  }

  // Consider any element that should be visible above the overlay (such as
  // a toolbar).
  $('.overlay-displace-top, .overlay-displace-bottom').each(function () {
    var data = $(this).data();
    var maxWidth = documentWidth;
    // In IE, Shadow filter makes element to overlap the scrollbar with 1px.
    if (this.filters && this.filters.length && this.filters.item('DXImageTransform.Microsoft.Shadow')) {
      maxWidth -= 1;
    }

    if (Drupal.overlay.leftSidedScrollbarOffset) {
      $(this).css('left', Drupal.overlay.leftSidedScrollbarOffset);
    }

    // Prevent displaced elements overlapping window's scrollbar.
    var currentMaxWidth = parseInt($(this).css(maxWidthName));
    if ((data.drupalOverlay && data.drupalOverlay.maxWidth) || isNaN(currentMaxWidth) || currentMaxWidth > maxWidth || currentMaxWidth <= 0) {
      $(this).css(maxWidthName, maxWidth);
      (data.drupalOverlay = data.drupalOverlay || {}).maxWidth = true;
    }

    // Use a more rigorous approach if the displaced element still overlaps
    // window's scrollbar; clip the element on the right.
    var offset = $(this).offset();
    var offsetRight = offset.left + $(this).outerWidth();
    if ((data.drupalOverlay && data.drupalOverlay.clip) || offsetRight > maxWidth) {
      if (Drupal.overlay.leftSidedScrollbarOffset) {
        $(this).css('clip', 'rect(auto, auto, ' + (documentHeight - offset.top) + 'px, ' + (Drupal.overlay.leftSidedScrollbarOffset + 2) + 'px)');
      }
      else {
        $(this).css('clip', 'rect(auto, ' + (maxWidth - offset.left) + 'px, ' + (documentHeight - offset.top) + 'px, auto)');
      }
      (data.drupalOverlay = data.drupalOverlay || {}).clip = true;
    }
  });
};

/**
 * Event handler: restores size of displaced elements as they were before
 * overlay was opened.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerRestoreDisplacedElements = function (event) {
  var $displacedElements = $('.overlay-displace-top, .overlay-displace-bottom');
  try {
    $displacedElements.css({ maxWidth: '', clip: '' });
  }
  // IE bug that doesn't allow unsetting style.clip (http://dev.jquery.com/ticket/6512).
  catch (err) {
    $displacedElements.attr('style', function (index, attr) {
      return attr.replace(/clip\s*:\s*rect\([^)]+\);?/i, '');
    });
  }
};

/**
 * Event handler: overrides href of administrative links to be opened in
 * the overlay.
 *
 * This click event handler should be bound to any document (for example the
 * overlay iframe) of which you want links to open in the overlay.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: click, mouseup
 *   - event.currentTarget: document
 *
 * @see Drupal.overlayChild.behaviors.addClickHandler
 */
Drupal.overlay.eventhandlerOverrideLink = function (event) {
  // In some browsers the click event isn't fired for right-clicks. Use the
  // mouseup event for right-clicks and the click event for everything else.
  if ((event.type == 'click' && event.button == 2) || (event.type == 'mouseup' && event.button != 2)) {
    return;
  }

  var $target = $(event.target);

  // Only continue if clicked target (or one of its parents) is a link.
  if (!$target.is('a')) {
    $target = $target.closest('a');
    if (!$target.length) {
      return;
    }
  }

  // Never open links in the overlay that contain the overlay-exclude class.
  if ($target.hasClass('overlay-exclude')) {
    return;
  }

  // Close the overlay when the link contains the overlay-close class.
  if ($target.hasClass('overlay-close')) {
    // Clearing the overlay URL fragment will close the overlay.
    $.bbq.removeState('overlay');
    return;
  }

  var target = $target[0];
  var href = target.href;
  // Only handle links that have an href attribute and use the HTTP(S) protocol.
  if (href != undefined && href != '' && target.protocol.match(/^https?\:/)) {
    var anchor = href.replace(target.ownerDocument.location.href, '');
    // Skip anchor links.
    if (anchor.length == 0 || anchor.charAt(0) == '#') {
      return;
    }
    // Open admin links in the overlay.
    else if (this.isAdminLink(href)) {
      // If the link contains the overlay-restore class and the overlay-context
      // state is set, also update the parent window's location.
      var parentLocation = ($target.hasClass('overlay-restore') && typeof $.bbq.getState('overlay-context') == 'string')
        ? this.getInternalUrl($.bbq.getState('overlay-context'))
        : null;
      href = this.fragmentizeLink($target.get(0), parentLocation);
      // Only override default behavior when left-clicking and user is not
      // pressing the ALT, CTRL, META (Command key on the Macintosh keyboard)
      // or SHIFT key.
      if (event.button == 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        // Redirect to a fragmentized href. This will trigger a hashchange event.
        this.redirect(href);
        // Prevent default action and further propagation of the event.
        return false;
      }
      // Otherwise alter clicked link's href. This is being picked up by
      // the default action handler.
      else {
        $target
          // Restore link's href attribute on blur or next click.
          .one('blur mousedown', { target: target, href: target.href }, function (event) { $(event.data.target).attr('href', event.data.href); })
          .attr('href', href);
      }
    }
    // Non-admin links should close the overlay and open in the main window,
    // which is the default action for a link. We only need to handle them
    // if the overlay is open and the clicked link is inside the overlay iframe.
    else if (this.isOpen && target.ownerDocument === this.iframeWindow.document) {
      // Open external links in the immediate parent of the frame, unless the
      // link already has a different target.
      if (target.hostname != window.location.hostname) {
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
      else {
        // Add the overlay-context state to the link, so "overlay-restore" links
        // can restore the context.
        if ($target[0].hash) {
          // Leave links with an existing fragment alone. Adding an extra
          // parameter to a link like "node/1#section-1" breaks the link.
        }
        else {
          // For links with no existing fragment, add the overlay context.
          $target.attr('href', $.param.fragment(href, { 'overlay-context': this.getPath(window.location) + window.location.search }));
        }

        // When the link has a destination query parameter and that destination
        // is an admin link we need to fragmentize it. This will make it reopen
        // in the overlay.
        var params = $.deparam.querystring(href);
        if (params.destination && this.isAdminLink(params.destination)) {
          var fragmentizedDestination = $.param.fragment(this.getPath(window.location), { overlay: params.destination });
          $target.attr('href', $.param.querystring(href, { destination: fragmentizedDestination }));
        }

        // Make the link open in the immediate parent of the frame, unless the
        // link already has a different target.
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
    }
  }
};

/**
 * Event handler: opens or closes the overlay based on the current URL fragment.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: hashchange
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerOperateByURLFragment = function (event) {
  // If we changed the hash to reflect an internal redirect in the overlay,
  // its location has already been changed, so don't do anything.
  if ($.data(window.location, window.location.href) === 'redirect') {
    $.data(window.location, window.location.href, null);
    return;
  }

  // Get the overlay URL from the current URL fragment.
  var internalUrl = null;
  var state = $.bbq.getState('overlay');
  if (state) {
    internalUrl = this.getInternalUrl(state);
  }
  if (internalUrl) {
    // Append render variable, so the server side can choose the right
    // rendering and add child frame code to the page if needed.
    var url = $.param.querystring(internalUrl, { render: 'overlay' });

    this.open(url);
    this.resetActiveClass(this.getPath(Drupal.settings.basePath + state));
  }
  // If there is no overlay URL in the fragment and the overlay is (still)
  // open, close the overlay.
  else if (this.isOpen && !this.isClosing) {
    this.close();
    this.resetActiveClass(this.getPath(window.location));
  }
};

/**
 * Event handler: makes sure the internal overlay URL is reflected in the parent
 * URL fragment.
 *
 * Normally the parent URL fragment determines the overlay location. However, if
 * the overlay redirects internally, the parent doesn't get informed, and the
 * parent URL fragment will be out of date. This is a sanity check to make
 * sure we're in the right place.
 *
 * The parent URL fragment is also not updated automatically when overlay's
 * open, close or load functions are used directly (instead of through
 * eventhandlerOperateByURLFragment).
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayReady, drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerSyncURLFragment = function (event) {
  if (this.isOpen) {
    var expected = $.bbq.getState('overlay');
    // This is just a sanity check, so we're comparing paths, not query strings.
    if (this.getPath(Drupal.settings.basePath + expected) != this.getPath(this.iframeWindow.document.location)) {
      // There may have been a redirect inside the child overlay window that the
      // parent wasn't aware of. Update the parent URL fragment appropriately.
      var newLocation = Drupal.overlay.fragmentizeLink(this.iframeWindow.document.location);
      // Set a 'redirect' flag on the new location so the hashchange event handler
      // knows not to change the overlay's content.
      $.data(window.location, newLocation, 'redirect');
      // Use location.replace() so we don't create an extra history entry.
      window.location.replace(newLocation);
    }
  }
  else {
    $.bbq.removeState('overlay');
  }
};

/**
 * Event handler: if the child window suggested that the parent refresh on
 * close, force a page refresh.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerRefreshPage = function (event) {
  if (Drupal.overlay.refreshPage) {
    window.location.reload(true);
  }
};

/**
 * Event handler: dispatches events to the overlay document.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerDispatchEvent = function (event) {
  if (this.iframeWindow && this.iframeWindow.document) {
    this.iframeWindow.jQuery(this.iframeWindow.document).trigger(event);
  }
};

/**
 * Make a regular admin link into a URL that will trigger the overlay to open.
 *
 * @param link
 *   A JavaScript Link object (i.e. an <a> element).
 * @param parentLocation
 *   (optional) URL to override the parent window's location with.
 *
 * @return
 *   A URL that will trigger the overlay (in the form
 *   /node/1#overlay=admin/config).
 */
Drupal.overlay.fragmentizeLink = function (link, parentLocation) {
  // Don't operate on links that are already overlay-ready.
  var params = $.deparam.fragment(link.href);
  if (params.overlay) {
    return link.href;
  }

  // Determine the link's original destination. Set ignorePathFromQueryString to
  // true to prevent transforming this link into a clean URL while clean URLs
  // may be disabled.
  var path = this.getPath(link, true);
  // Preserve existing query and fragment parameters in the URL, except for
  // "render=overlay" which is re-added in Drupal.overlay.eventhandlerOperateByURLFragment.
  var destination = path + link.search.replace(/&?render=overlay/, '').replace(/\?$/, '') + link.hash;

  // Assemble and return the overlay-ready link.
  return $.param.fragment(parentLocation || window.location.href, { overlay: destination });
};

/**
 * Refresh any regions of the page that are displayed outside the overlay.
 *
 * @param data
 *   An array of objects with information on the page regions to be refreshed.
 *   For each object, the key is a CSS class identifying the region to be
 *   refreshed, and the value represents the section of the Drupal $page array
 *   corresponding to this region.
 */
Drupal.overlay.refreshRegions = function (data) {
  $.each(data, function () {
    var region_info = this;
    $.each(region_info, function (regionClass) {
      var regionName = region_info[regionClass];
      var regionSelector = '.' + regionClass;
      // Allow special behaviors to detach.
      Drupal.detachBehaviors($(regionSelector));
      $.get(Drupal.settings.basePath + Drupal.settings.overlay.ajaxCallback + '/' + regionName, function (newElement) {
        $(regionSelector).replaceWith($(newElement));
        Drupal.attachBehaviors($(regionSelector), Drupal.settings);
      });
    });
  });
};

/**
 * Reset the active class on links in displaced elements according to
 * given path.
 *
 * @param activePath
 *   Path to match links against.
 */
Drupal.overlay.resetActiveClass = function(activePath) {
  var self = this;
  var windowDomain = window.location.protocol + window.location.hostname;

  $('.overlay-displace-top, .overlay-displace-bottom')
  .find('a[href]')
  // Remove active class from all links in displaced elements.
  .removeClass('active')
  // Add active class to links that match activePath.
  .each(function () {
    var linkDomain = this.protocol + this.hostname;
    var linkPath = self.getPath(this);

    // A link matches if it is part of the active trail of activePath, except
    // for frontpage links.
    if (linkDomain == windowDomain && (activePath + '/').indexOf(linkPath + '/') === 0 && (linkPath !== '' || activePath === '')) {
      $(this).addClass('active');
    }
  });
};

/**
 * Helper function to get the (corrected) Drupal path of a link.
 *
 * @param link
 *   Link object or string to get the Drupal path from.
 * @param ignorePathFromQueryString
 *   Boolean whether to ignore path from query string if path appears empty.
 *
 * @return
 *   The Drupal path.
 */
Drupal.overlay.getPath = function (link, ignorePathFromQueryString) {
  if (typeof link == 'string') {
    // Create a native Link object, so we can use its object methods.
    link = $(link.link(link)).get(0);
  }

  var path = link.pathname;
  // Ensure a leading slash on the path, omitted in some browsers.
  if (path.charAt(0) != '/') {
    path = '/' + path;
  }
  path = path.replace(new RegExp(Drupal.settings.basePath + '(?:index.php)?'), '');
  if (path == '' && !ignorePathFromQueryString) {
    // If the path appears empty, it might mean the path is represented in the
    // query string (clean URLs are not used).
    var match = new RegExp('([?&])q=(.+)([&#]|$)').exec(link.search);
    if (match && match.length == 4) {
      path = match[2];
    }
  }

  return path;
};

/**
 * Get the total displacement of given region.
 *
 * @param region
 *   Region name. Either "top" or "bottom".
 *
 * @return
 *   The total displacement of given region in pixels.
 */
Drupal.overlay.getDisplacement = function (region) {
  var displacement = 0;
  var lastDisplaced = $('.overlay-displace-' + region + ':last');
  if (lastDisplaced.length) {
    displacement = lastDisplaced.offset().top + lastDisplaced.outerHeight();

    // In modern browsers (including IE9), when box-shadow is defined, use the
    // normal height.
    var cssBoxShadowValue = lastDisplaced.css('box-shadow');
    var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
    // In IE8 and below, we use the shadow filter to apply box-shadow styles to
    // the toolbar. It adds some extra height that we need to remove.
    if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test(lastDisplaced.css('filter'))) {
      displacement -= lastDisplaced[0].filters.item('DXImageTransform.Microsoft.Shadow').strength;
      displacement = Math.max(0, displacement);
    }
  }
  return displacement;
};

/**
 * Makes elements outside the overlay unreachable via the tab key.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes changed. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentUntabbable = function (context) {

  context = context || document.body;
  var $overlay, $tabbable, $hasTabindex;

  // Determine which elements on the page already have a tabindex.
  $hasTabindex = $('[tabindex] :not(.overlay-element)', context);
  // Record the tabindex for each element, so we can restore it later.
  $hasTabindex.each(Drupal.overlay._recordTabindex);
  // Add the tabbable elements from the current context to any that we might
  // have previously recorded.
  Drupal.overlay._hasTabindex = $hasTabindex.add(Drupal.overlay._hasTabindex);

  // Set tabindex to -1 on everything outside the overlay and toolbars, so that
  // the underlying page is unreachable.

  // By default, browsers make a, area, button, input, object, select, textarea,
  // and iframe elements reachable via the tab key.
  $tabbable = $('a, area, button, input, object, select, textarea, iframe');
  // If another element (like a div) has a tabindex, it's also tabbable.
  $tabbable = $tabbable.add($hasTabindex);
  // Leave links inside the overlay and toolbars alone.
  $overlay = $('.overlay-element, #overlay-container, .overlay-displace-top, .overlay-displace-bottom').find('*');
  $tabbable = $tabbable.not($overlay);
  // We now have a list of everything in the underlying document that could
  // possibly be reachable via the tab key. Make it all unreachable.
  $tabbable.attr('tabindex', -1);
};

/**
 * Restores the original tabindex value of a group of elements.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes restored. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentTabbable = function (context) {

  var $needsTabindex;
  context = context || document.body;

  // Make the underlying document tabbable again by removing all existing
  // tabindex attributes.
  var $tabindex = $('[tabindex]', context);
  $tabindex.removeAttr('tabindex');

  // Restore the tabindex attributes that existed before the overlay was opened.
  $needsTabindex = $(Drupal.overlay._hasTabindex, context);
  $needsTabindex.each(Drupal.overlay._restoreTabindex);
  Drupal.overlay._hasTabindex = Drupal.overlay._hasTabindex.not($needsTabindex);
};

/**
 * Record the tabindex for an element, using $.data.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._recordTabindex = function () {
  var $element = $(this);
  var tabindex = $(this).attr('tabindex');
  $element.data('drupalOverlayOriginalTabIndex', tabindex);
};

/**
 * Restore an element's original tabindex.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._restoreTabindex = function () {
  var $element = $(this);
  var tabindex = $element.data('drupalOverlayOriginalTabIndex');
  $element.attr('tabindex', tabindex);
};

/**
 * Theme function to create the overlay iframe element.
 */
Drupal.theme.prototype.overlayContainer = function () {
  return '<div id="overlay-container"><div class="overlay-modal-background"></div></div>';
};

/**
 * Theme function to create an overlay iframe element.
 */
Drupal.theme.prototype.overlayElement = function (url) {
  return '<iframe class="overlay-element" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>';
};

})(jQuery);
;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);;
(function($) {
  var plugins = {};
  Drupal.behaviors.mediafront = {
    attach: function(context) {
      // Iterate through each mediafront player settings.
      if (Drupal.settings.hasOwnProperty('mediafront')) {
        $.each(Drupal.settings.mediafront, function(id, settings) {
          $("#" + id + ":not(.mediafront-processed)").each(function() {
            if (typeof plugins[settings.preset] !== 'object') {
              plugins[settings.preset] = {};
            }
            plugins[settings.preset][settings.id] = $(this).addClass('mediafront-processed').osmplayer(settings);
          });
        });
      }

      // Now setup the mediafront connections.
      if (Drupal.settings.hasOwnProperty('mediafront_connect')) {
        $.each(Drupal.settings.mediafront_connect, function(plugin_id, settings) {
          if (!settings.connected) {
            settings.connected = true;
            minplayer.get(plugin_id, settings.type, function(plugin) {
              $.each(settings.connect, function(preset, preset) {
                if (plugins[preset]) {
                  $.each(plugins[preset], function(player_id, player) {
                    minplayer.get(player_id, "player", function(player) {
                      player.addPlugin(settings.type, plugin);
                    });
                  });
                }
              });
            });
          }
        });
      }
    }
  };
})(jQuery);;
(function(a,b){function c(a){if(""===g)return a;a=a.charAt(0).toUpperCase()+a.substr(1);return g+a}var d=Math,e=b.createElement("div").style,g=function(){for(var a=["t","webkitT","MozT","msT","OT"],b,c=0,d=a.length;c<d;c++)if(b=a[c]+"ransform",b in e)return a[c].substr(0,a[c].length-1);return!1}(),k=g?"-"+g.toLowerCase()+"-":"",p=c("transform"),l=c("transitionProperty"),q=c("transitionDuration"),H=c("transformOrigin"),I=c("transitionTimingFunction"),z=c("transitionDelay"),A=/android/gi.test(navigator.appVersion),
D=/iphone|ipad/gi.test(navigator.appVersion),v=/hp-tablet/gi.test(navigator.appVersion),E=c("perspective")in e,r="ontouchstart"in a&&!v,F=!1!==g,J=c("transition")in e,B="onorientationchange"in a?"orientationchange":"resize",C=r?"touchstart":"mousedown",w=r?"touchmove":"mousemove",x=r?"touchend":"mouseup",y=r?"touchcancel":"mouseup",u=!1===g?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[g],K=function(){return a.requestAnimationFrame||
a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){return setTimeout(a,1)}}(),G=a.cancelRequestAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||clearTimeout,t=E?" translateZ(0)":"",v=function(c,d){var h=this,e;h.wrapper="object"==typeof c?c:b.getElementById(c);h.wrapper.style.overflow="hidden";
h.scroller=h.wrapper.children[0];h.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:A,hideScrollbar:D,fadeScrollbar:D&&E,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,
onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(e in d)h.options[e]=d[e];h.x=h.options.x;h.y=h.options.y;h.options.useTransform=F&&h.options.useTransform;h.options.hScrollbar=h.options.hScroll&&h.options.hScrollbar;h.options.vScrollbar=h.options.vScroll&&h.options.vScrollbar;h.options.zoom=h.options.useTransform&&h.options.zoom;h.options.useTransition=J&&h.options.useTransition;h.options.zoom&&A&&(t="");h.scroller.style[l]=
h.options.useTransform?k+"transform":"top left";h.scroller.style[q]="0";h.scroller.style[H]="0 0";h.options.useTransition&&(h.scroller.style[I]="cubic-bezier(0.33,0.66,0.66,1)");h.options.useTransform?h.scroller.style[p]="translate("+h.x+"px,"+h.y+"px)"+t:h.scroller.style.cssText+=";position:absolute;top:"+h.y+"px;left:"+h.x+"px";h.options.useTransition&&(h.options.fixedScrollbar=!0);h.refresh();h._bind(B,a);h._bind(C);r||"none"==h.options.wheelAction||(h._bind("DOMMouseScroll"),h._bind("mousewheel"));
h.options.checkDOMChanges&&(h.checkDOMTime=setInterval(function(){h._checkDOMChanges()},500))};v.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(a){switch(a.type){case C:if(!r&&0!==a.button)break;this._start(a);break;case w:this._move(a);break;case x:case y:this._end(a);break;case B:this._resize();break;case "DOMMouseScroll":case "mousewheel":this._wheel(a);break;case u:this._transitionEnd(a)}},_checkDOMChanges:function(){this.moved||
this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(a){var c;this[a+"Scrollbar"]?(this[a+"ScrollbarWrapper"]||(c=b.createElement("div"),this.options.scrollbarClass?c.className=this.options.scrollbarClass+a.toUpperCase():c.style.cssText="position:absolute;z-index:100;"+("h"==a?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?
"7":"2")+"px;top:2px;right:1px"),c.style.cssText+=";pointer-events:none;"+k+"transition-property:opacity;"+k+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(c),this[a+"ScrollbarWrapper"]=c,c=b.createElement("div"),this.options.scrollbarClass||(c.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+k+"background-clip:padding-box;"+k+"box-sizing:border-box;"+
("h"==a?"height:100%":"width:100%")+";"+k+"border-radius:3px;border-radius:3px"),c.style.cssText+=";pointer-events:none;"+k+"transition-property:"+k+"transform;"+k+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+k+"transition-duration:0;"+k+"transform: translate(0,0)"+t,this.options.useTransition&&(c.style.cssText+=";"+k+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[a+"ScrollbarWrapper"].appendChild(c),this[a+"ScrollbarIndicator"]=c),"h"==a?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,
this.hScrollbarIndicatorSize=d.max(d.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=d.max(d.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=
this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(a,!0)):this[a+"ScrollbarWrapper"]&&(F&&(this[a+"ScrollbarIndicator"].style[p]=""),this[a+"ScrollbarWrapper"].parentNode.removeChild(this[a+"ScrollbarWrapper"]),this[a+"ScrollbarWrapper"]=null,this[a+"ScrollbarIndicator"]=null)},_resize:function(){var a=this;setTimeout(function(){a.refresh()},A?200:0)},_pos:function(a,
b){this.zoomed||(a=this.hScroll?a:0,b=this.vScroll?b:0,this.options.useTransform?this.scroller.style[p]="translate("+a+"px,"+b+"px) scale("+this.scale+")"+t:(a=d.round(a),b=d.round(b),this.scroller.style.left=a+"px",this.scroller.style.top=b+"px"),this.x=a,this.y=b,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(a,b){var c="h"==a?this.x:this.y;this[a+"Scrollbar"]&&(c*=this[a+"ScrollbarProp"],0>c?(this.options.fixedScrollbar||(c=this[a+"ScrollbarIndicatorSize"]+d.round(3*c),
8>c&&(c=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=c+"px"),c=0):c>this[a+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?c=this[a+"ScrollbarMaxScroll"]:(c=this[a+"ScrollbarIndicatorSize"]-d.round(3*(c-this[a+"ScrollbarMaxScroll"])),8>c&&(c=8),this[a+"ScrollbarIndicator"].style["h"==a?"width":"height"]=c+"px",c=this[a+"ScrollbarMaxScroll"]+(this[a+"ScrollbarIndicatorSize"]-c))),this[a+"ScrollbarWrapper"].style[z]="0",this[a+"ScrollbarWrapper"].style.opacity=b&&this.options.hideScrollbar?
"0":"1",this[a+"ScrollbarIndicator"].style[p]="translate("+("h"==a?c+"px,0)":"0,"+c+"px)")+t)},_start:function(b){var c=r?b.touches[0]:b,h,e;this.enabled&&(this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,b),(this.options.useTransition||this.options.zoom)&&this._transitionTime(0),this.zoomed=this.animating=this.moved=!1,this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0,this.options.zoom&&r&&1<b.touches.length&&(e=d.abs(b.touches[0].pageX-b.touches[1].pageX),
h=d.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDistStart=d.sqrt(e*e+h*h),this.originX=d.abs(b.touches[0].pageX+b.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=d.abs(b.touches[0].pageY+b.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,b)),this.options.momentum&&(this.options.useTransform?(h=getComputedStyle(this.scroller,null)[p].replace(/[^0-9\-.,]/g,"").split(","),e=+(h[12]||h[4]),h=+(h[13]||h[5])):(e=
+getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),h=+getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),e!=this.x||h!=this.y)&&(this.options.useTransition?this._unbind(u):G(this.aniTime),this.steps=[],this._pos(e,h),this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.absStartX=this.x,this.absStartY=this.y,this.startX=this.x,this.startY=this.y,this.pointX=c.pageX,this.pointY=c.pageY,this.startTime=b.timeStamp||Date.now(),this.options.onScrollStart&&this.options.onScrollStart.call(this,
b),this._bind(w,a),this._bind(x,a),this._bind(y,a))},_move:function(a){var b=r?a.touches[0]:a,c=b.pageX-this.pointX,e=b.pageY-this.pointY,g=this.x+c,k=this.y+e,m=a.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,a);if(this.options.zoom&&r&&1<a.touches.length)g=d.abs(a.touches[0].pageX-a.touches[1].pageX),k=d.abs(a.touches[0].pageY-a.touches[1].pageY),this.touchesDist=d.sqrt(g*g+k*k),this.zoomed=!0,b=1/this.touchesDistStart*this.touchesDist*this.scale,
b<this.options.zoomMin?b=0.5*this.options.zoomMin*Math.pow(2,b/this.options.zoomMin):b>this.options.zoomMax&&(b=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/b)),this.lastScale=b/this.scale,g=this.originX-this.originX*this.lastScale+this.x,k=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[p]="translate("+g+"px,"+k+"px) scale("+b+")"+t,this.options.onZoom&&this.options.onZoom.call(this,a);else{this.pointX=b.pageX;this.pointY=b.pageY;if(0<g||g<this.maxScrollX)g=this.options.bounce?
this.x+c/2:0<=g||0<=this.maxScrollX?0:this.maxScrollX;if(k>this.minScrollY||k<this.maxScrollY)k=this.options.bounce?this.y+e/2:k>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY;this.distX+=c;this.distY+=e;this.absDistX=d.abs(this.distX);this.absDistY=d.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(k=this.y,e=0):this.absDistY>this.absDistX+5&&(g=this.x,c=0)),this.moved=!0,this._pos(g,k),this.dirX=0<c?-1:0>c?1:0,this.dirY=
0<e?-1:0>e?1:0,300<m-this.startTime&&(this.startTime=m,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,a))}},_end:function(c){if(!r||0===c.touches.length){var f=this,h=r?c.changedTouches[0]:c,e,g,k={dist:0,time:0},m={dist:0,time:0},l=(c.timeStamp||Date.now())-f.startTime,n=f.x,s=f.y;f._unbind(w,a);f._unbind(x,a);f._unbind(y,a);f.options.onBeforeScrollEnd&&f.options.onBeforeScrollEnd.call(f,c);if(f.zoomed)n=f.scale*f.lastScale,n=Math.max(f.options.zoomMin,
n),n=Math.min(f.options.zoomMax,n),f.lastScale=n/f.scale,f.scale=n,f.x=f.originX-f.originX*f.lastScale+f.x,f.y=f.originY-f.originY*f.lastScale+f.y,f.scroller.style[q]="200ms",f.scroller.style[p]="translate("+f.x+"px,"+f.y+"px) scale("+f.scale+")"+t,f.zoomed=!1,f.refresh(),f.options.onZoomEnd&&f.options.onZoomEnd.call(f,c);else{if(f.moved){if(300>l&&f.options.momentum){k=n?f._momentum(n-f.startX,l,-f.x,f.scrollerW-f.wrapperW+f.x,f.options.bounce?f.wrapperW:0):k;m=s?f._momentum(s-f.startY,l,-f.y,0>
f.maxScrollY?f.scrollerH-f.wrapperH+f.y-f.minScrollY:0,f.options.bounce?f.wrapperH:0):m;n=f.x+k.dist;s=f.y+m.dist;if(0<f.x&&0<n||f.x<f.maxScrollX&&n<f.maxScrollX)k={dist:0,time:0};if(f.y>f.minScrollY&&s>f.minScrollY||f.y<f.maxScrollY&&s<f.maxScrollY)m={dist:0,time:0}}k.dist||m.dist?(k=d.max(d.max(k.time,m.time),10),f.options.snap&&(m=n-f.absStartX,l=s-f.absStartY,d.abs(m)<f.options.snapThreshold&&d.abs(l)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(m=f._snap(n,s),n=m.x,s=m.y,
k=d.max(m.time,k))),f.scrollTo(d.round(n),d.round(s),k)):f.options.snap?(m=n-f.absStartX,l=s-f.absStartY,d.abs(m)<f.options.snapThreshold&&d.abs(l)<f.options.snapThreshold?f.scrollTo(f.absStartX,f.absStartY,200):(m=f._snap(f.x,f.y),m.x==f.x&&m.y==f.y||f.scrollTo(m.x,m.y,m.time))):f._resetPos(200)}else r&&(f.doubleTapTimer&&f.options.zoom?(clearTimeout(f.doubleTapTimer),f.doubleTapTimer=null,f.options.onZoomStart&&f.options.onZoomStart.call(f,c),f.zoom(f.pointX,f.pointY,1==f.scale?f.options.doubleTapZoom:
1),f.options.onZoomEnd&&setTimeout(function(){f.options.onZoomEnd.call(f,c)},200)):this.options.handleClick&&(f.doubleTapTimer=setTimeout(function(){f.doubleTapTimer=null;for(e=h.target;1!=e.nodeType;)e=e.parentNode;"SELECT"!=e.tagName&&"INPUT"!=e.tagName&&"TEXTAREA"!=e.tagName&&(g=b.createEvent("MouseEvents"),g.initMouseEvent("click",!0,!0,c.view,1,h.screenX,h.screenY,h.clientX,h.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,0,null),g._fake=!0,e.dispatchEvent(g))},f.options.zoom?250:0))),f._resetPos(400);
f.options.onTouchEnd&&f.options.onTouchEnd.call(f,c)}}},_resetPos:function(a){var b=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,c=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;b==this.x&&c==this.y?(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==g&&(this.hScrollbarWrapper.style[z]="300ms"),this.hScrollbarWrapper.style.opacity="0"),
this.vScrollbar&&this.options.hideScrollbar&&("webkit"==g&&(this.vScrollbarWrapper.style[z]="300ms"),this.vScrollbarWrapper.style.opacity="0")):this.scrollTo(b,c,a||0)},_wheel:function(a){var b=this,c,d;if("wheelDeltaX"in a)c=a.wheelDeltaX/12,d=a.wheelDeltaY/12;else if("wheelDelta"in a)c=d=a.wheelDelta/12;else if("detail"in a)c=d=3*-a.detail;else return;"zoom"==b.options.wheelAction?(d=b.scale*Math.pow(2,1/3*(d?d/Math.abs(d):0)),d<b.options.zoomMin&&(d=b.options.zoomMin),d>b.options.zoomMax&&(d=b.options.zoomMax),
d!=b.scale&&(!b.wheelZoomCount&&b.options.onZoomStart&&b.options.onZoomStart.call(b,a),b.wheelZoomCount++,b.zoom(a.pageX,a.pageY,d,400),setTimeout(function(){b.wheelZoomCount--;!b.wheelZoomCount&&b.options.onZoomEnd&&b.options.onZoomEnd.call(b,a)},400))):(c=b.x+c,d=b.y+d,0<c?c=0:c<b.maxScrollX&&(c=b.maxScrollX),d>b.minScrollY?d=b.minScrollY:d<b.maxScrollY&&(d=b.maxScrollY),0>b.maxScrollY&&b.scrollTo(c,d,0))},_transitionEnd:function(a){a.target==this.scroller&&(this._unbind(u),this._startAni())},_startAni:function(){var a=
this,b=a.x,c=a.y,e=Date.now(),g,k,p;a.animating||(a.steps.length?(g=a.steps.shift(),g.x==b&&g.y==c&&(g.time=0),a.animating=!0,a.moved=!0,a.options.useTransition?(a._transitionTime(g.time),a._pos(g.x,g.y),a.animating=!1,g.time?a._bind(u):a._resetPos(0)):(p=function(){var l=Date.now(),n;l>=e+g.time?(a._pos(g.x,g.y),a.animating=!1,a.options.onAnimationEnd&&a.options.onAnimationEnd.call(a),a._startAni()):(l=(l-e)/g.time-1,k=d.sqrt(1-l*l),l=(g.x-b)*k+b,n=(g.y-c)*k+c,a._pos(l,n),a.animating&&(a.aniTime=
K(p)))},p())):a._resetPos(400))},_transitionTime:function(a){a+="ms";this.scroller.style[q]=a;this.hScrollbar&&(this.hScrollbarIndicator.style[q]=a);this.vScrollbar&&(this.vScrollbarIndicator.style[q]=a)},_momentum:function(a,b,c,e,g){b=d.abs(a)/b;var k=b*b/0.0012;0<a&&k>c?(c+=g/(6/(6E-4*(k/b))),b=b*c/k,k=c):0>a&&k>e&&(e+=g/(6/(6E-4*(k/b))),b=b*e/k,k=e);return{dist:k*(0>a?-1:1),time:d.round(b/6E-4)}},_offset:function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;
a!=this.wrapper&&(b*=this.scale,c*=this.scale);return{left:b,top:c}},_snap:function(a,b){var c,e,g;g=this.pagesX.length-1;c=0;for(e=this.pagesX.length;c<e;c++)if(a>=this.pagesX[c]){g=c;break}g==this.currPageX&&0<g&&0>this.dirX&&g--;a=this.pagesX[g];e=(e=d.abs(a-this.pagesX[this.currPageX]))?500*(d.abs(this.x-a)/e):0;this.currPageX=g;g=this.pagesY.length-1;for(c=0;c<g;c++)if(b>=this.pagesY[c]){g=c;break}g==this.currPageY&&0<g&&0>this.dirY&&g--;b=this.pagesY[g];c=(c=d.abs(b-this.pagesY[this.currPageY]))?
500*(d.abs(this.y-b)/c):0;this.currPageY=g;g=d.round(d.max(e,c))||200;return{x:a,y:b,time:g}},_bind:function(a,b,c){(b||this.scroller).addEventListener(a,this,!!c)},_unbind:function(a,b,c){(b||this.scroller).removeEventListener(a,this,!!c)},destroy:function(){this.scroller.style[p]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(B,a);this._unbind(C);this._unbind(w,a);this._unbind(x,a);this._unbind(y,a);this.options.hasTouch||(this._unbind("DOMMouseScroll"),
this._unbind("mousewheel"));this.options.useTransition&&this._unbind(u);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var a,b,c,e=0;b=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=d.round(this.scroller.offsetWidth*this.scale);this.scrollerH=
d.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&
this.scrollerH>this.wrapperH;a=this._offset(this.wrapper);this.wrapperOffsetLeft=-a.left;this.wrapperOffsetTop=-a.top;if("string"==typeof this.options.snap)for(this.pagesX=[],this.pagesY=[],c=this.scroller.querySelectorAll(this.options.snap),a=0,b=c.length;a<b;a++)e=this._offset(c[a]),e.left+=this.wrapperOffsetLeft,e.top+=this.wrapperOffsetTop,this.pagesX[a]=e.left<this.maxScrollX?this.maxScrollX:e.left*this.scale,this.pagesY[a]=e.top<this.maxScrollY?this.maxScrollY:e.top*this.scale;else if(this.options.snap){for(this.pagesX=
[];e>=this.maxScrollX;)this.pagesX[b]=e,e-=this.wrapperW,b++;this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);b=e=0;for(this.pagesY=[];e>=this.maxScrollY;)this.pagesY[b]=e,e-=this.wrapperH,b++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[q]=
"0",this._resetPos(400))},scrollTo:function(a,b,c,d){var e=a;this.stop();e.length||(e=[{x:a,y:b,time:c,relative:d}]);a=0;for(b=e.length;a<b;a++)e[a].relative&&(e[a].x=this.x-e[a].x,e[a].y=this.y-e[a].y),this.steps.push({x:e[a].x,y:e[a].y,time:e[a].time||0});this._startAni()},scrollToElement:function(a,b){var c;if(a=a.nodeType?a:this.scroller.querySelector(a))c=this._offset(a),c.left+=this.wrapperOffsetLeft,c.top+=this.wrapperOffsetTop,c.left=0<c.left?0:c.left<this.maxScrollX?this.maxScrollX:c.left,
c.top=c.top>this.minScrollY?this.minScrollY:c.top<this.maxScrollY?this.maxScrollY:c.top,b=void 0===b?d.max(2*d.abs(c.left),2*d.abs(c.top)):b,this.scrollTo(c.left,c.top,b)},scrollToPage:function(a,b,c){c=void 0===c?400:c;this.options.onScrollStart&&this.options.onScrollStart.call(this);this.options.snap?(a="next"==a?this.currPageX+1:"prev"==a?this.currPageX-1:a,b="next"==b?this.currPageY+1:"prev"==b?this.currPageY-1:b,a=0>a?0:a>this.pagesX.length-1?this.pagesX.length-1:a,b=0>b?0:b>this.pagesY.length-
1?this.pagesY.length-1:b,this.currPageX=a,this.currPageY=b,a=this.pagesX[a],b=this.pagesY[b]):(a*=-this.wrapperW,b*=-this.wrapperH,a<this.maxScrollX&&(a=this.maxScrollX),b<this.maxScrollY&&(b=this.maxScrollY));this.scrollTo(a,b,c)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(w,a);this._unbind(x,a);this._unbind(y,a)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(u):G(this.aniTime);this.steps=[];this.animating=this.moved=
!1},zoom:function(a,b,c,d){var e=c/this.scale;this.options.useTransform&&(this.zoomed=!0,d=void 0===d?200:d,a=a-this.wrapperOffsetLeft-this.x,b=b-this.wrapperOffsetTop-this.y,this.x=a-a*e+this.x,this.y=b-b*e+this.y,this.scale=c,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[q]=d+"ms",this.scroller.style[p]="translate("+this.x+"px,"+this.y+"px) scale("+c+")"+
t,this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}};e=null;"undefined"!==typeof exports?exports.iScroll=v:a.iScroll=v})(window,document);var minplayer=minplayer||{};function checkPlayType(a,b){if("function"===typeof a.canPlayType){if("object"===typeof b){for(var c=b.length,d="";c--&&!(d=checkPlayType(a,b[c])););return d}c=a.canPlayType(b);if("no"!==c&&""!==c)return b}return""}
minplayer.compatibility=function(){var a=null,a=document.createElement("video");this.videoOGG=checkPlayType(a,"video/ogg");this.videoH264=checkPlayType(a,["video/mp4","video/h264"]);this.videoWEBM=checkPlayType(a,["video/x-webm","video/webm","application/octet-stream"]);this.videoMPEGURL=checkPlayType(a,"application/vnd.apple.mpegurl");a=document.createElement("audio");this.audioOGG=checkPlayType(a,"audio/ogg");this.audioMP3=checkPlayType(a,"audio/mpeg");this.audioMP4=checkPlayType(a,"audio/mp4")};
minplayer.playTypes||(minplayer.playTypes=new minplayer.compatibility,minplayer.isAndroid=/android/gi.test(navigator.appVersion),minplayer.isIDevice=/iphone|ipad/gi.test(navigator.appVersion),minplayer.isPlaybook=/playbook/gi.test(navigator.appVersion),minplayer.isTouchPad=/hp-tablet/gi.test(navigator.appVersion),minplayer.hasTouch="ontouchstart"in window&&!minplayer.isTouchPad);
if(!minplayer.urlVars){minplayer.urlVars={};var regEx=/[?&]+([^=&]+)=([^&]*)/gi;window.location.href.replace(regEx,function(a,b,c){minplayer.urlVars[b]=c})}minplayer=minplayer||{};minplayer.async=function(){this.value=null;this.queue=[]};minplayer.async.prototype.get=function(a,b){null!==this.value?a(this.value):this.queue.push(a)};minplayer.async.prototype.set=function(a){this.value=a;var b=this.queue.length;if(b){for(;b--;)this.queue[b](a);this.queue=[]}};minplayer=minplayer||{};
minplayer.flags=function(){this.flag=0;this.ids={};this.numFlags=0};minplayer.flags.prototype.setFlag=function(a,b){this.ids.hasOwnProperty(a)||(this.ids[a]=this.numFlags,this.numFlags++);this.flag=b?this.flag|1<<this.ids[a]:this.flag&~(1<<this.ids[a])};minplayer=minplayer||{};minplayer.plugins=minplayer.plugins||{};minplayer.queue=minplayer.queue||[];minplayer.lock=!1;
minplayer.plugin=function(a,b,c,d){this.options=c||{};this.name=a;this.pluginReady=!1;this.queue=d||{};this.triggered={};this.lock=!1;this.uuid=0;if(b){this.context=jQuery(b);a={};this.defaultOptions(a);for(var e in a)this.options.hasOwnProperty(e)||(this.options[e]=a[e]);this.initialize()}};minplayer.plugin.prototype.initialize=function(){this.construct()};minplayer.plugin.prototype.defaultOptions=function(a){};minplayer.plugin.prototype.construct=function(){this.active=!0;this.addPlugin()};
minplayer.plugin.prototype.destroy=function(){this.active=!1;this.unbind()};minplayer.plugin.prototype.create=function(a,b,c){var d=null;b=b||"minplayer";window[b][a]||(b="minplayer");c=c||this.display;return window[b][a]&&(d=window[b][a],d[this.options.template]&&(d=d[this.options.template]),"function"!==typeof d&&(d=window.minplayer[a]),"function"===typeof d)?new d(c,this.options):null};minplayer.plugin.prototype.ready=function(){this.pluginReady||(this.pluginReady=!0,this.trigger("ready"),this.checkQueue())};
minplayer.plugin.prototype.isValid=function(){return!!this.options.id&&this.active};minplayer.plugin.prototype.onAdded=function(a){};minplayer.plugin.prototype.addPlugin=function(a,b){a=a||this.name;b=b||this;if(b.isValid()){minplayer.plugins[this.options.id]||(minplayer.plugins[this.options.id]={});minplayer.plugins[this.options.id][a]||(minplayer.plugins[this.options.id][a]=[]);var c=minplayer.plugins[this.options.id][a].push(b);this.uuid=this.options.id+"__"+a+"__"+c;this.checkQueue(b);b.onAdded(this)}};
minplayer.timers={};minplayer.plugin.prototype.poll=function(a,b,c){minplayer.timers.hasOwnProperty(a)&&clearTimeout(minplayer.timers[a]);minplayer.timers[a]=setTimeout(function(d){return function g(){b.call(d)&&(minplayer.timers[a]=setTimeout(g,c))}}(this),c);return minplayer.timers[a]};minplayer.plugin.prototype.get=function(a,b){"function"===typeof a&&(b=a,a=null);return minplayer.get.call(this,this.options.id,a,b)};
minplayer.plugin.prototype.checkQueue=function(a){var b=null,c=0,d=!1;a=a||this;minplayer.lock=!0;for(var e=minplayer.queue.length,c=0;c<e;c++)minplayer.queue.hasOwnProperty(c)&&(b=minplayer.queue[c],d=!b.id&&!b.plugin,d|=b.plugin===a.name,(d&=!b.id||b.id===this.options.id)&&!b.addedto.hasOwnProperty(a.options.id)&&(b.addedto[a.options.id]=!0,minplayer.bind.call(b.context,b.event,this.options.id,a.name,b.callback,!0)));minplayer.lock=!1};minplayer.eventTypes={};
minplayer.plugin.prototype.isEvent=function(a,b){var c=a+"__"+b;"undefined"===typeof minplayer.eventTypes[c]&&(minplayer.eventTypes[c]=null!==a.match(b));return minplayer.eventTypes[c]};minplayer.plugin.prototype.trigger=function(a,b,c){if(!this.active)return this;c||(this.triggered[a]=b);c=0;var d={},e=null,g;for(g in this.queue)if(this.isEvent(g,a))for(c in e=this.queue[g],e)e.hasOwnProperty(c)&&(d=e[c],d.callback({target:this,data:d.data},b));return this};
minplayer.plugin.prototype.ubind=function(a,b,c){this.unbind(a);return this.bind(a,b,c)};minplayer.plugin.prototype.bind=function(a,b,c){if(!this.active)return this;"function"===typeof b&&(c=b,b=null);if(a&&c){this.queue[a]=this.queue[a]||[];this.queue[a].push({callback:c,data:b});for(var d in this.triggered)this.triggered.hasOwnProperty(d)&&this.isEvent(a,d)&&c({target:this,data:b},this.triggered[d]);return this}};
minplayer.plugin.prototype.unbind=function(a){this.lock&&setTimeout(function(b){return function(){b.unbind(a)}}(this),10);this.lock=!0;a?this.queue.hasOwnProperty(a)&&0<this.queue[a].length&&(this.queue[a].length=0):this.queue={};this.lock=!1;return this};minplayer.addQueue=function(a,b,c,d,e){minplayer.lock?setTimeout(function(){minplayer.addQueue(a,c,b,d,e)},10):minplayer.queue.push({context:a,id:c,event:b,plugin:d,callback:e,addedto:{}})};
minplayer.bind=function(a,b,c,d,e){if(!d)return!1;var g=minplayer.plugins,k=null,p=null,l=[],q=function(a,b){if(g.hasOwnProperty(a)&&g[a].hasOwnProperty(b))for(var c=g[a][b].length;c--;)l.push(g[a][b][c])};if(b&&c)q(b,c);else if(!b&&c)for(p in g)q(p,c);else if(b&&!c&&g[b])for(k in g[b])q(b,k);else if(!b&&!c)for(p in g)for(k in g[p])q(p,k);for(k=l.length;k--;)l[k].bind(a,function(a){return function(b){d.call(a,b.target)}}(this));e||minplayer.addQueue(this,a,b,c,d);return 0<l.length};
minplayer.get=function(a,b,c){var d=typeof b,e=typeof c;"function"===typeof a?(c=a,b=a=null):"function"===d?(c=b,b=a,a=null):"undefined"===d&&"undefined"===e&&(b=a,c=a=null);if(c="function"===typeof c?c:null)minplayer.bind.call(this,"ready",a,b,c);else if(d=minplayer.plugins,e=null,a||b||c)if(!a||b||c){if(a&&b&&!c)return d[a][b];if(!a&&b&&!c){a=[];for(e in d)if(d.hasOwnProperty(e)&&d[e].hasOwnProperty(b))for(c=d[e][b].length;c--;)a.push(d[e][b][c]);return a}}else return d[a];else return d};
minplayer=minplayer||{};minplayer.display=function(a,b,c,d){minplayer.plugin.call(this,a,b,c,d)};minplayer.display.prototype=new minplayer.plugin;minplayer.display.prototype.constructor=minplayer.display;minplayer.display.prototype.getDisplay=function(a,b){return a};minplayer.display.prototype.initialize=function(){this.display||(this.display=this.getDisplay(this.context,this.options));this.display&&(this.options.pluginName="display",this.elements=this.getElements(),minplayer.plugin.prototype.initialize.call(this))};
minplayer.display.prototype.construct=function(){minplayer.plugin.prototype.construct.call(this);this.autoHide=!1;if(this.onResize){var a=0;jQuery(window).resize(function(b){return function(){clearTimeout(a);a=setTimeout(function(){b.onResize()},200)}}(this))}};minplayer.display.prototype.onResize=!1;minplayer.display.prototype.hide=function(a){if(a=a||this.display)a.forceHide=!0,a.unbind().hide()};minplayer.display.prototype.fullScreenElement=function(){return this.display};
minplayer.click=function(a,b){var c=!1;a=jQuery(a);a.bind("touchstart click",function(a){c||(c=!0,setTimeout(function(){c=!1},100),b.call(this,a))});return a};minplayer.display.prototype.onFocus=function(a){this.hasFocus=this.focus=a;this.autoHide&&this.showThenHide(this.autoHide.element,this.autoHide.timeout,this.autoHide.cb)};
minplayer.display.prototype.showThenHide=function(a,b,c){var d=typeof a;"undefined"===d?(c=null,a=this.display):"number"===d?(c=b,b=a,a=this.display):"function"===d&&(c=a,a=this.display);a&&(b=b||5E3,this.autoHide={element:a,timeout:b,cb:c},a.forceHide||("undefined"!==typeof a.showMe?a.showMe&&a.showMe(c):(a.show(),c&&c(!0))),a.hoverState||(jQuery(a).bind("mouseenter",function(){a.hoverState=!0}),jQuery(a).bind("mouseleave",function(){a.hoverState=!1})),clearTimeout(this.showTimer),this.showTimer=
setTimeout(function(d){return function k(){a.hoverState?d.showTimer=setTimeout(k,b):"undefined"!==typeof a.hideMe?a.hideMe&&a.hideMe(c):a.hide("slow",function(){c&&c(!1)})}}(this),b))};
minplayer.display.prototype.fullscreen=function(a){var b=this.isFullScreen(),c=this.fullScreenElement();b&&!a?(c.removeClass("fullscreen"),screenfull&&screenfull.exit(),this.trigger("fullscreen",!1)):!b&&a&&(c.addClass("fullscreen"),screenfull&&(screenfull.request(c[0]),screenfull.onchange=function(a){return function(b){screenfull.isFullscreen||a.fullscreen(!1)}}(this)),this.trigger("fullscreen",!0))};minplayer.display.prototype.toggleFullScreen=function(){this.fullscreen(!this.isFullScreen())};
minplayer.display.prototype.isFullScreen=function(){return this.fullScreenElement().hasClass("fullscreen")};minplayer.display.prototype.getScaledRect=function(a,b){var c={};c.x=b.x?b.x:0;c.y=b.y?b.y:0;c.width=b.width?b.width:0;c.height=b.height?b.height:0;a&&(b.width/b.height>a?(c.height=b.height,c.width=Math.floor(b.height*a)):(c.height=Math.floor(b.width/a),c.width=b.width),c.x=Math.floor((b.width-c.width)/2),c.y=Math.floor((b.height-c.height)/2));return c};
minplayer.display.prototype.getElements=function(){return{}};
(function(a,b){var c=function(){for(var a=[["requestFullscreen","exitFullscreen","fullscreenchange","fullscreen","fullscreenElement"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitfullscreenchange","webkitIsFullScreen","webkitCurrentFullScreenElement"],["mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozFullScreen","mozFullScreenElement"]],c=0,d=a.length;c<d;c++)if(a.hasOwnProperty(c)){var e=a[c];if(e[1]in b)return e}}();if(!c)return a.screenfull=!1,a.screenfull;var d=
"ALLOW_KEYBOARD_INPUT"in Element,e={init:function(){b.addEventListener(c[2],function(a){e.isFullscreen=b[c[3]];e.element=b[c[4]];e.onchange(a)});return this},isFullscreen:b[c[3]],element:b[c[4]],request:function(a){a=a||b.documentElement;a[c[0]](d&&Element.ALLOW_KEYBOARD_INPUT);if(!b.isFullscreen)a[c[0]]()},exit:function(){b[c[1]]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},onchange:function(){}};a.screenfull=e.init()})(window,document);
jQuery.fn.minplayer||(jQuery.fn.minplayer=function(a){return jQuery(this).each(function(){a=a||{};a.id=a.id||jQuery(this).attr("id")||Math.random();minplayer.plugins[a.id]||(a.template=a.template||"default",minplayer[a.template]?new minplayer[a.template](jQuery(this),a):new minplayer(jQuery(this),a))})});minplayer=jQuery.extend(function(a,b){minplayer.display.call(this,"player",a,b)},minplayer);minplayer.prototype=new minplayer.display;minplayer.prototype.constructor=minplayer;
minplayer.prototype.defaultOptions=function(a){a.id="player";a.build=!1;a.wmode="transparent";a.preload=!0;a.autoplay=!1;a.autoload=!0;a.loop=!1;a.width="100%";a.height="350px";a.debug=!1;a.volume=80;a.files=null;a.file="";a.preview="";a.attributes={};a.plugins={};a.logo="";a.link="";a.duration=0;jQuery.each(this.context[0].attributes,function(b,c){a[c.name]=c.value});minplayer.display.prototype.defaultOptions.call(this,a)};
minplayer.prototype.construct=function(){minplayer.display.prototype.construct.call(this);var a=null,b;for(b in this.options.plugins)a=this.options.plugins[b],minplayer[a]&&(a=minplayer[a],a[this.options.template]&&a[this.options.template].init?a[this.options.template].init(this):a.init&&a.init(this));this.options.pluginName="player";this.controller=this.create("controller");this.playLoader=this.create("playLoader");this.options.logo&&this.elements.logo&&(a="",this.options.link&&(a+='<a target="_blank" href="'+
this.options.link+'">'),a+='<img src="'+this.options.logo+'" >',this.options.link&&(a+="</a>"),this.logo=this.elements.logo.append(a));this.currentPlayer="html5";this.addKeyEvents();this.addEvents();this.load(this.getFiles());this.ready()};minplayer.prototype.setFocus=function(a){minplayer.get.call(this,this.options.id,null,function(b){b.onFocus(a)});this.trigger("playerFocus",a)};
minplayer.prototype.bindTo=function(a){a.ubind(this.uuid+":error",function(a){return function(c,d){"html5"===a.currentPlayer?(minplayer.player="minplayer",a.options.file.player="minplayer",a.loadPlayer()):a.showError(d)}}(this));a.ubind(this.uuid+":fullscreen",function(a){return function(c,d){a.resize()}}(this))};
minplayer.prototype.addEvents=function(){var a=!1;this.display.bind("mouseenter",function(b){return function(){a=!0;b.setFocus(!0)}}(this));this.display.bind("mouseleave",function(b){return function(){a=!1;b.setFocus(!1)}}(this));var b=!1;this.display.bind("mousemove",function(c){return function(){b||(b=setTimeout(function(){b=!1;a&&c.setFocus(!0)},300))}}(this));minplayer.get.call(this,this.options.id,null,function(a){return function(b){a.bindTo(b)}}(this))};
minplayer.prototype.showError=function(a){"object"!==typeof a&&(a=a||"",this.elements.error&&(this.elements.error.text(a),a?(this.elements.error.show(),setTimeout(function(a){return function(){a.elements.error.hide("slow")}}(this),5E3)):this.elements.error.hide()))};minplayer.prototype.addKeyEvents=function(){jQuery(document).bind("keydown",function(a){return function(b){switch(b.keyCode){case 113:case 27:a.isFullScreen()&&a.fullscreen(!1)}}}(this))};
minplayer.prototype.getFiles=function(){if(this.options.files)return this.options.files;if(this.options.file)return this.options.file;var a=[],b=null;this.elements.media&&((b=this.elements.media.attr("src"))&&a.push({path:b}),jQuery("source",this.elements.media).each(function(){a.push({path:jQuery(this).attr("src"),mimetype:jQuery(this).attr("type"),codecs:jQuery(this).attr("codecs")})}));return a};
minplayer.getMediaFile=function(a){if(!a)return null;if("string"===typeof a||a.path||a.id)return new minplayer.file(a);var b=0,c=null,d=null,e;for(e in a)a.hasOwnProperty(e)&&(d=new minplayer.file(a[e]),d.player&&d.priority>b&&(b=d.priority,c=d));return c};
minplayer.prototype.loadPlayer=function(){if(!this.options.file||0===this.elements.display.length||!this.options.file.player)return!1;this.showError();var a=this.options.file.player.toString();if(!this.media||a!==this.currentPlayer){this.currentPlayer=a;if(this.elements.display)return a={},this.media&&(a=this.media.queue,this.media.destroy()),pClass=minplayer.players[this.options.file.player],this.options.mediaelement=this.elements.media,this.media=new pClass(this.elements.display,this.options,a),
this.media.load(this.options.file),this.display.addClass("minplayer-player-"+this.media.mediaFile.player),!0;this.showError("No media display found.")}else if(this.media)return this.media.options=this.options,this.display.removeClass("minplayer-player-"+this.media.mediaFile.player),this.media.load(this.options.file),this.display.addClass("minplayer-player-"+this.media.mediaFile.player),!1};
minplayer.prototype.load=function(a){this.options.files=a||this.options.files;this.options.file=minplayer.getMediaFile(this.options.files);this.loadPlayer()&&(this.bindTo(this.media),this.options.file.mimetype&&!this.options.file.player&&this.showError("Cannot play media: "+this.options.file.mimetype))};minplayer.prototype.resize=function(){this.get(function(a){if(a.onResize)a.onResize()})};minplayer=minplayer||{};
minplayer.image=function(a,b){this.loaded=!1;this.loader=null;this.ratio=0;this.img=null;minplayer.display.call(this,"image",a,b)};minplayer.image.prototype=new minplayer.display;minplayer.image.prototype.constructor=minplayer.image;
minplayer.image.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.options.pluginName="image";this.display.css("overflow","hidden");this.loader=new Image;this.loader.onload=function(a){return function(){a.loaded=!0;a.ratio=a.loader.width/a.loader.height;a.resize();a.trigger("loaded")}}(this);this.ready()};
minplayer.image.prototype.load=function(a){this.clear(function(){this.display.empty();this.img=jQuery(document.createElement("img")).attr({src:""}).hide();this.display.append(this.img);this.loader.src=a;this.img.attr("src",a)})};minplayer.image.prototype.clear=function(a){this.loaded=!1;this.img?this.img.fadeOut(150,function(b){return function(){b.img.attr("src","");b.loader.src="";jQuery(this).remove();a&&a.call(b)}}(this)):a&&a.call(this)};
minplayer.image.prototype.resize=function(a,b){a=a||this.display.parent().width();b=b||this.display.parent().height();if(a&&b&&this.loaded){var c=this.getScaledRect(this.ratio,{width:a,height:b});this.img&&this.img.attr("src",this.loader.src).css({marginLeft:c.x,marginTop:c.y,width:c.width,height:c.height});this.img.fadeIn(150)}};minplayer.image.prototype.onResize=function(){this.resize()};minplayer=minplayer||{};
minplayer.file=function(a){if(!a)return null;a="string"===typeof a?{path:a}:a;if(a.hasOwnProperty("isMinPlayerFile"))return a;this.isMinPlayerFile=!0;this.duration=a.duration||0;this.bytesTotal=a.bytesTotal||0;this.quality=a.quality||0;this.stream=a.stream||"";this.path=a.path||"";this.codecs=a.codecs||"";this.extension=a.extension||this.getFileExtension();this.mimetype=a.mimetype||a.filemime||this.getMimeType();this.type=a.type||this.getType();this.type||(this.mimetype=this.getMimeType(),this.type=
this.getType());this.player=minplayer.player||a.player||this.getBestPlayer();this.priority=a.priority||this.getPriority();this.id=a.id||this.getId();this.path||(this.path=this.id)};minplayer.player="";minplayer.file.prototype.getBestPlayer=function(){var a=null,b=0;jQuery.each(minplayer.players,function(c){return function(d,e){var g=e.getPriority(c);e.canPlay(c)&&g>b&&(a=d,b=g)}}(this));return a};
minplayer.file.prototype.getPriority=function(){var a=1;this.player&&(a=minplayer.players[this.player].getPriority(this));switch(this.mimetype){case "video/x-webm":case "video/webm":case "application/octet-stream":case "application/vnd.apple.mpegurl":return 10*a;case "video/mp4":case "audio/mp4":case "audio/mpeg":return 9*a;case "video/ogg":case "audio/ogg":case "video/quicktime":return 8*a;default:return 5*a}};
minplayer.file.prototype.getFileExtension=function(){return this.path.substring(this.path.lastIndexOf(".")+1).toLowerCase()};
minplayer.file.prototype.getMimeType=function(){switch(this.extension){case "mp4":case "m4v":case "flv":case "f4v":return"video/mp4";case "m3u8":return"application/vnd.apple.mpegurl";case "webm":return"video/webm";case "ogg":case "ogv":return"video/ogg";case "3g2":return"video/3gpp2";case "3gpp":case "3gp":return"video/3gpp";case "mov":return"video/quicktime";case "swf":return"application/x-shockwave-flash";case "oga":return"audio/ogg";case "mp3":return"audio/mpeg";case "m4a":case "f4a":return"audio/mp4";
case "aac":return"audio/aac";case "wav":return"audio/vnd.wave";case "wma":return"audio/x-ms-wma";default:return"unknown"}};minplayer.file.prototype.getType=function(){var a=this.mimetype.match(/([^\/]+)(\/)/),a=a&&1<a.length?a[1]:"";if("video"===a)return"video";if("audio"===a)return"audio";switch(this.mimetype){case "application/octet-stream":case "application/x-shockwave-flash":case "application/vnd.apple.mpegurl":return"video"}return""};
minplayer.file.prototype.getId=function(){var a=minplayer.players[this.player];return a&&a.getMediaId?a.getMediaId(this):""};minplayer=minplayer||{};minplayer.playLoader=function(a,b){this.clear();minplayer.display.call(this,"playLoader",a,b)};minplayer.playLoader.prototype=new minplayer.display;minplayer.playLoader.prototype.constructor=minplayer.playLoader;
minplayer.playLoader.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.options.pluginName="playLoader";this.initializePlayLoader();this.ready()};
minplayer.playLoader.prototype.initializePlayLoader=function(){this.get("media",function(a){if(a.hasPlayLoader(this.options.preview))this.enabled=!1,this.hide(this.elements.busy),this.hide(this.elements.bigPlay),this.hide(this.elements.preview),this.hide();else{this.enabled=!0;this.options.preview||(this.options.preview=a.poster);var b=!0;this.preview&&this.preview.loader&&(b=this.preview.loader.src!==this.options.preview);b&&(a.elements.media.attr("poster",""),this.loadPreview());this.elements.bigPlay&&
minplayer.click(this.elements.bigPlay.unbind(),function(b){b.preventDefault();jQuery(this).hide();a.play()});a.ubind(this.uuid+":loadstart",function(a){return function(b,e,g){a.busy.setFlag("media",!0);a.bigPlay.setFlag("media",!0);a.previewFlag.setFlag("media",!0);a.checkVisibility()}}(this));a.ubind(this.uuid+":waiting",function(a){return function(b,e,g){g||(a.busy.setFlag("media",!0),a.checkVisibility())}}(this));a.ubind(this.uuid+":loadeddata",function(a){return function(b,e,g){g||(a.busy.setFlag("media",
!1),a.checkVisibility())}}(this));a.ubind(this.uuid+":playing",function(b){return function(d,e,g){g||(b.busy.setFlag("media",!1),b.bigPlay.setFlag("media",!1),"audio"!==a.mediaFile.type&&b.previewFlag.setFlag("media",!1),b.checkVisibility())}}(this));a.ubind(this.uuid+":pause",function(a){return function(b,e,g){g||(a.busy.setFlag("media",!1),a.bigPlay.setFlag("media",!0),a.checkVisibility())}}(this))}})};
minplayer.playLoader.prototype.clear=function(a){this.busy=new minplayer.flags;this.bigPlay=new minplayer.flags;this.previewFlag=new minplayer.flags;this.enabled=!0;this.preview?this.preview.clear(function(b){return function(){b.preview=null;a&&a()}}(this)):(this.preview=null,a&&a())};
minplayer.playLoader.prototype.loadPreview=function(a){a=a||this.options.preview;this.options.preview=a;if(this.enabled&&0!==this.display.length){if(this.elements.preview){if(this.options.preview)return this.elements.preview.addClass("has-preview").show(),this.preview=new minplayer.image(this.elements.preview,this.options),this.preview.load(this.options.preview),!0;this.elements.preview.hide()}return!1}};
minplayer.playLoader.prototype.checkVisibility=function(){this.enabled&&(this.busy.flag?this.elements.busy.show():this.elements.busy.hide(),this.bigPlay.flag?this.elements.bigPlay.show():this.elements.bigPlay.hide(),this.previewFlag.flag?this.elements.preview.show():this.elements.preview.hide(),(this.bigPlay.flag||this.busy.flag||this.previewFlag.flag)&&this.display.show(),this.bigPlay.flag||this.busy.flag||this.previewFlag.flag||this.display.hide())};minplayer=minplayer||{};
minplayer.players=minplayer.players||{};minplayer.players.base=function(a,b,c){minplayer.display.call(this,"media",a,b,c)};minplayer.players.base.prototype=new minplayer.display;minplayer.players.base.prototype.constructor=minplayer.players.base;minplayer.players.base.prototype.getElements=function(){var a=minplayer.display.prototype.getElements.call(this);return jQuery.extend(a,{media:this.options.mediaelement})};minplayer.players.base.getPriority=function(a){return 0};
minplayer.players.base.getMediaId=function(a){return""};minplayer.players.base.canPlay=function(a){return!1};minplayer.players.base.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.elements.media&&(this.poster=this.elements.media.attr("poster"));this.options.pluginName="basePlayer";this.readyQueue=[];this.mediaFile=this.options.file;this.clear();this.setupPlayer()};
minplayer.players.base.prototype.setupPlayer=function(){this.playerFound()||this.addPlayer();this.player=this.getPlayer();minplayer.click(this.display,function(a){return function(){a.playing?a.pause():a.play()}}(this));jQuery(document).bind("keydown",function(a){return function(b){if(a.hasFocus)switch(b.preventDefault(),b.keyCode){case 32:case 179:a.playing?a.pause():a.play();break;case 38:a.setVolumeRelative(0.1);break;case 40:a.setVolumeRelative(-0.1);break;case 37:case 227:a.seekRelative(-0.05);
break;case 39:case 228:a.seekRelative(0.05)}}}(this))};minplayer.players.base.prototype.addPlayer=function(){this.elements.media&&this.elements.media.remove();this.elements.media=jQuery(this.createPlayer());this.display.html(this.elements.media)};minplayer.players.base.prototype.destroy=function(){minplayer.plugin.prototype.destroy.call(this);this.clear()};minplayer.players.base.prototype.clear=function(){this.playerReady=!1;this.reset();this.player&&(jQuery(this.player).remove(),this.player=null)};
minplayer.players.base.prototype.reset=function(){this.duration=new minplayer.async;this.currentTime=new minplayer.async;this.bytesLoaded=new minplayer.async;this.bytesTotal=new minplayer.async;this.bytesStart=new minplayer.async;this.volume=new minplayer.async;this.loaded=this.loading=this.playing=this.hasFocus=!1;this.trigger("pause",null,!0);this.trigger("waiting",null,!0);this.trigger("progress",{loaded:0,total:0,start:0},!0);this.trigger("timeupdate",{currentTime:0,duration:0},!0)};
minplayer.players.base.prototype.onReady=function(){if(!this.playerReady)if(this.playerReady=!0,this.setVolume(this.options.volume/100),this.loading=!0,this.poll("progress",function(a){return function(){a.loading&&a.getBytesLoaded(function(c){a.getBytesTotal(function(d){if(c||d){var e=0;a.getBytesStart(function(a){e=a});a.trigger("progress",{loaded:c,total:d,start:e});c>=d&&(a.loading=!1)}})});return a.loading}}(this),1E3),this.ready(),this.isReady()){for(var a in this.readyQueue)this.readyQueue[a].call(this);
this.readyQueue.length=0;this.readyQueue=[];this.loaded||this.trigger("loadstart")}else this.readyQueue.length=0,this.readyQueue=[]};minplayer.players.base.prototype.getSeek=function(){var a=0,b=0,b=0;minplayer.urlVars&&minplayer.urlVars.seek&&((a=minplayer.urlVars.seek.match(/([0-9])s/i))&&(a=parseInt(a[1],10)),(b=minplayer.urlVars.seek.match(/([0-9])m/i))&&(a+=60*parseInt(b[1],10)),(b=minplayer.urlVars.seek.match(/([0-9])h/i))&&(a+=3600*parseInt(b[1],10)),a||(a=minplayer.urlVars.seek));return a};
minplayer.players.base.prototype.onPlaying=function(){this.trigger("playing");this.playing=this.hasFocus=!0;this.poll("timeupdate",function(a){return function(){a.playing&&a.getCurrentTime(function(b){a.getDuration(function(c){b=parseFloat(b);c=parseFloat(c);(b||c)&&a.trigger("timeupdate",{currentTime:b,duration:c})})});return a.playing}}(this),500)};minplayer.players.base.prototype.onPaused=function(){this.trigger("pause");this.playing=this.hasFocus=!1};
minplayer.players.base.prototype.onComplete=function(){if(this.playing)this.onPaused();this.hasFocus=this.loading=this.playing=!1;this.trigger("ended")};minplayer.players.base.prototype.onLoaded=function(){var a=this.loaded;!this.loaded&&this.options.autoplay&&this.play();this.loaded=!0;this.trigger("loadeddata");if(!a){var b=this.getSeek();b&&this.getDuration(function(a){return function(d){b<d&&(a.seek(b),a.play())}}(this))}};minplayer.players.base.prototype.onWaiting=function(){this.trigger("waiting")};
minplayer.players.base.prototype.onError=function(a){this.hasFocus=!1;this.trigger("error",a)};minplayer.players.base.prototype.isReady=function(){return this.player&&this.playerReady};minplayer.players.base.prototype.whenReady=function(a){this.isReady()?a.call(this):this.readyQueue.push(a)};minplayer.players.base.prototype.hasPlayLoader=function(a){return!1};minplayer.players.base.prototype.hasController=function(){return!1};minplayer.players.base.prototype.playerFound=function(){return!1};
minplayer.players.base.prototype.createPlayer=function(){this.reset();return null};minplayer.players.base.prototype.getPlayer=function(){return this.player};minplayer.players.base.prototype.load=function(a,b){var c="string"===typeof this.mediaFile?this.mediaFile:this.mediaFile.path;a&&a.path!==c&&(this.isReady()||this.setupPlayer(),this.reset(),this.mediaFile=a,b&&b.call(this))};minplayer.players.base.prototype.play=function(a){this.options.autoload=!0;this.options.autoplay=!0;this.whenReady(a)};
minplayer.players.base.prototype.pause=function(a){this.whenReady(a)};minplayer.players.base.prototype.stop=function(a){this.hasFocus=this.loading=this.playing=!1;this.whenReady(a)};minplayer.players.base.prototype.seekRelative=function(a){this.getCurrentTime(function(b){return function(c){b.getDuration(function(d){if(d){var e=0,e=-1<a&&1>a?(c/d+parseFloat(a))*d:c+parseFloat(a);b.seek(e)}})}}(this))};minplayer.players.base.prototype.seek=function(a,b){this.whenReady(b)};
minplayer.players.base.prototype.getValue=function(a,b){if(this.isReady()){var c=this.player[a]();void 0!==c&&null!==c&&b(c)}};minplayer.players.base.prototype.setVolumeRelative=function(a){this.getVolume(function(b){return function(c){c+=parseFloat(a);c=0>c?0:c;b.setVolume(1<c?1:c)}}(this))};minplayer.players.base.prototype.setVolume=function(a,b){this.trigger("volumeupdate",a);this.whenReady(b)};minplayer.players.base.prototype.getVolume=function(a){return this.volume.get(a)};
minplayer.players.base.prototype.getCurrentTime=function(a){return this.currentTime.get(a)};minplayer.players.base.prototype.getDuration=function(a){if(this.options.duration)a(this.options.duration);else return this.duration.get(a)};minplayer.players.base.prototype.getBytesStart=function(a){return this.bytesStart.get(a)};minplayer.players.base.prototype.getBytesLoaded=function(a){return this.bytesLoaded.get(a)};minplayer.players.base.prototype.getBytesTotal=function(a){return this.bytesTotal.get(a)};
minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.html5=function(a,b,c){minplayer.players.base.call(this,a,b,c)};minplayer.players.html5.prototype=new minplayer.players.base;minplayer.players.html5.prototype.constructor=minplayer.players.html5;minplayer.players.html5.getPriority=function(a){return 10};
minplayer.players.html5.canPlay=function(a){switch(a.mimetype){case "video/ogg":return!!minplayer.playTypes.videoOGG;case "video/mp4":case "video/x-mp4":case "video/m4v":case "video/x-m4v":return!!minplayer.playTypes.videoH264;case "application/vnd.apple.mpegurl":return!!minplayer.playTypes.videoMPEGURL;case "video/x-webm":case "video/webm":case "application/octet-stream":return!!minplayer.playTypes.videoWEBM;case "audio/ogg":return!!minplayer.playTypes.audioOGG;case "audio/mpeg":return!!minplayer.playTypes.audioMP3;
case "audio/mp4":return!!minplayer.playTypes.audioMP4;default:return!1}};minplayer.players.html5.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="html5";this.addPlayerEvents()};minplayer.players.html5.prototype.addPlayerEvent=function(a,b){this.player&&this.player.addEventListener(a,function(c){var d=a+"Event";c[d]&&c.player.removeEventListener(a,c[d],!1);c[d]=function(a){b.call(c,a)};return c[d]}(this),!1)};
minplayer.players.html5.prototype.addPlayerEvents=function(){if(this.player){this.addPlayerEvent("abort",function(){this.trigger("abort")});this.addPlayerEvent("loadstart",function(){this.onReady();if(!this.options.autoload)this.onLoaded()});this.addPlayerEvent("loadeddata",function(){this.onLoaded()});this.addPlayerEvent("loadedmetadata",function(){this.onLoaded()});this.addPlayerEvent("canplaythrough",function(){this.onLoaded()});this.addPlayerEvent("ended",function(){this.onComplete()});this.addPlayerEvent("pause",
function(){this.onPaused()});this.addPlayerEvent("play",function(){this.onPlaying()});this.addPlayerEvent("playing",function(){this.onPlaying()});var a=!1;this.addPlayerEvent("error",function(){!a&&this.player&&(a=!0,this.trigger("error","An error occured - "+this.player.error.code))});this.addPlayerEvent("waiting",function(){this.onWaiting()});this.addPlayerEvent("durationchange",function(){this.player&&(this.duration.set(this.player.duration),this.trigger("durationchange",{duration:this.player.duration}))});
this.addPlayerEvent("progress",function(a){this.bytesTotal.set(a.total);this.bytesLoaded.set(a.loaded)});return!0}return!1};minplayer.players.html5.prototype.onReady=function(){minplayer.players.base.prototype.onReady.call(this);if(minplayer.isAndroid)this.onLoaded();minplayer.isIDevice&&setTimeout(function(a){return function(){a.pause();a.onLoaded()}}(this),1)};minplayer.players.html5.prototype.playerFound=function(){return 0<this.display.find(this.mediaFile.type).length};
minplayer.players.html5.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);var a=jQuery(document.createElement(this.mediaFile.type)).attr(this.options.attributes).append(jQuery(document.createElement("source")).attr({src:this.mediaFile.path}));a.eq(0)[0].setAttribute("width","100%");a.eq(0)[0].setAttribute("height","100%");var b=this.options.autoload?"metadata":"none",b=minplayer.isIDevice?"metadata":b;a.eq(0)[0].setAttribute("preload",b);this.options.autoload||
a.eq(0)[0].setAttribute("autobuffer",!1);return a};minplayer.players.html5.prototype.getPlayer=function(){return this.elements.media.eq(0)[0]};
minplayer.players.html5.prototype.load=function(a,b){minplayer.players.base.prototype.load.call(this,a,function(){var c=this.elements.media.attr("src");c||(c=jQuery("source",this.elements.media).eq(0).attr("src"));c!==a.path&&(this.addPlayer(),this.player=this.getPlayer(),this.addPlayerEvents(),c='<source src="'+a.path+'"></source>',this.elements.media.removeAttr("src").empty().html(c),b&&b.call(this))})};
minplayer.players.html5.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.player.play();a&&a.call(this)})};minplayer.players.html5.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.pause();a&&a.call(this)})};minplayer.players.html5.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.pause();this.player.src="";a&&a.call(this)})};
minplayer.players.html5.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.player.currentTime=a;b&&b.call(this)})};minplayer.players.html5.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.player.volume=a;b&&b.call(this)})};minplayer.players.html5.prototype.getVolume=function(a){this.whenReady(function(){a(this.player.volume)})};
minplayer.players.html5.prototype.getDuration=function(a){this.whenReady(function(){this.options.duration?a(this.options.duration):(this.duration.get(a),this.player.duration&&this.duration.set(this.player.duration))})};minplayer.players.html5.prototype.getCurrentTime=function(a){this.whenReady(function(){a(this.player.currentTime)})};
minplayer.players.html5.prototype.getBytesLoaded=function(a){this.whenReady(function(){var b=0;this.bytesLoaded.value?b=this.bytesLoaded.value:this.player.buffered&&0<this.player.buffered.length&&this.player.buffered.end&&this.player.duration?b=this.player.buffered.end(0):void 0!==this.player.bytesTotal&&0<this.player.bytesTotal&&void 0!==this.player.bufferedBytes&&(b=this.player.bufferedBytes);a(b)})};
minplayer.players.html5.prototype.getBytesTotal=function(a){this.whenReady(function(){var b=0;this.bytesTotal.value?b=this.bytesTotal.value:this.player.buffered&&0<this.player.buffered.length&&this.player.buffered.end&&this.player.duration?b=this.player.duration:void 0!==this.player.bytesTotal&&0<this.player.bytesTotal&&void 0!==this.player.bufferedBytes&&(b=this.player.bytesTotal);a(b)})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};
minplayer.players.flash=function(a,b,c){minplayer.players.base.call(this,a,b,c)};minplayer.players.flash.prototype=new minplayer.players.base;minplayer.players.flash.prototype.constructor=minplayer.players.flash;minplayer.players.flash.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="flash"};minplayer.players.flash.getPriority=function(a){return 0};minplayer.players.flash.canPlay=function(a){return!1};
minplayer.players.flash.prototype.getFlash=function(a){var b=document.createElement("script");b.src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);setTimeout(function(b){return function g(){"undefined"!==typeof swfobject?swfobject.embedSWF(a.swf,a.id,a.width,a.height,"9.0.0",!1,a.flashvars,{allowscriptaccess:"always",allowfullscreen:"true",wmode:a.wmode,quality:"high"},{id:a.id,name:a.id,playerType:"flash"},
function(a){b.player=a.ref}):setTimeout(g,200)}}(this),200);return'<div id="'+a.id+'"></div>'};minplayer.players.flash.prototype.playerFound=function(){return 0<this.display.find('object[playerType="flash"]').length};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.minplayer=function(a,b,c){minplayer.players.flash.call(this,a,b,c)};minplayer.players.minplayer.prototype=new minplayer.players.flash;minplayer.players.minplayer.prototype.constructor=minplayer.players.minplayer;
minplayer.players.minplayer.prototype.construct=function(){minplayer.players.flash.prototype.construct.call(this);this.options.pluginName="minplayer"};window.onFlashPlayerReady=function(a){a=minplayer.get(a,"media");for(var b=a.length;b--;)a[b].onReady()};window.onFlashPlayerUpdate=function(a,b){for(var c=minplayer.get(a,"media"),d=c.length;d--;)c[d].onMediaUpdate(b)};window.onFlashPlayerDebug=function(a){console&&console.log&&console.log(a)};
minplayer.players.minplayer.getPriority=function(a){return a.stream?100:1};minplayer.players.minplayer.canPlay=function(a){return a.stream?!0:!(0<=jQuery.inArray(a.mimetype,["video/x-webm","video/webm","application/octet-stream"]))&&("video"===a.type||"audio"===a.type)};
minplayer.players.minplayer.prototype.createPlayer=function(){this.options.swfplayer||(this.options.swfplayer="http://mediafront.org/assets/osmplayer/minplayer",this.options.swfplayer+="/flash/minplayer.swf");minplayer.players.flash.prototype.createPlayer.call(this);var a={id:this.options.id,debug:this.options.debug,config:"nocontrols",file:this.mediaFile.path,autostart:this.options.autoplay,autoload:this.options.autoload};this.mediaFile.stream&&(a.stream=this.mediaFile.stream);return this.getFlash({swf:this.options.swfplayer,
id:this.options.id+"_player",width:"100%",height:"100%",flashvars:a,wmode:this.options.wmode})};minplayer.players.minplayer.prototype.onMediaUpdate=function(a){switch(a){case "mediaMeta":this.onLoaded();break;case "mediaConnected":this.onLoaded();this.onPaused();break;case "mediaPlaying":this.onPlaying();break;case "mediaPaused":this.onPaused();break;case "mediaComplete":this.onComplete()}};
minplayer.players.minplayer.prototype.load=function(a,b){minplayer.players.flash.prototype.load.call(this,a,function(){this.player.loadMedia(a.path,a.stream);b&&b.call(this)})};minplayer.players.minplayer.prototype.play=function(a){minplayer.players.flash.prototype.play.call(this,function(){this.player.playMedia();a&&a.call(this)})};minplayer.players.minplayer.prototype.pause=function(a){minplayer.players.flash.prototype.pause.call(this,function(){this.player.pauseMedia();a&&a.call(this)})};
minplayer.players.minplayer.prototype.stop=function(a){minplayer.players.flash.prototype.stop.call(this,function(){this.player.stopMedia();a&&a.call(this)})};minplayer.players.minplayer.prototype.seek=function(a,b){minplayer.players.flash.prototype.seek.call(this,a,function(){this.player.seekMedia(a);b&&b.call(this)})};minplayer.players.minplayer.prototype.setVolume=function(a,b){minplayer.players.flash.prototype.setVolume.call(this,a,function(){this.player.setVolume(a);b&&b.call(this)})};
minplayer.players.minplayer.prototype.getVolume=function(a){this.whenReady(function(){a(this.player.getVolume())})};minplayer.players.minplayer.prototype.getDuration=function(a){this.whenReady(function(){if(this.options.duration)a(this.options.duration);else{var b=this.player.getDuration();b?a(b):this.poll("duration",function(c){return function(){(b=c.player.getDuration())&&a(b);return!b}}(this),1E3)}})};minplayer.players.minplayer.prototype.getCurrentTime=function(a){this.whenReady(function(){a(this.player.getCurrentTime())})};
minplayer.players.minplayer.prototype.getBytesLoaded=function(a){this.whenReady(function(){a(this.player.getMediaBytesLoaded())})};minplayer.players.minplayer.prototype.getBytesTotal=function(a){this.whenReady(function(){a(this.player.getMediaBytesTotal())})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.youtube=function(a,b,c){this.quality="default";minplayer.players.base.call(this,a,b,c)};minplayer.players.youtube.prototype=new minplayer.players.base;
minplayer.players.youtube.prototype.constructor=minplayer.players.youtube;minplayer.players.youtube.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="youtube"};minplayer.players.youtube.getPriority=function(a){return 10};minplayer.players.youtube.canPlay=function(a){return"video/youtube"===a.mimetype?!0:0===a.path.search(/^http(s)?\:\/\/(www\.)?(youtube\.com|youtu\.be)/i)};
minplayer.players.youtube.getMediaId=function(a){var b;b="^http[s]?\\:\\/\\/(www\\.)?(youtube\\.com\\/watch\\?v=|youtu\\.be\\/)([a-zA-Z0-9_\\-]+)";b=RegExp(b,"i");return 0===a.path.search(b)?a.path.match(b)[3]:a.path};minplayer.players.youtube.getImage=function(a,b,c){c("https://img.youtube.com/vi/"+a.id+"/"+("thumbnail"===b?"1":"0")+".jpg")};
minplayer.players.youtube.parseNode=function(a){a="undefined"!==typeof a.video?a.video:a;return{title:a.title,description:a.description,mediafiles:{image:{thumbnail:{path:a.thumbnail.sqDefault},image:{path:a.thumbnail.hqDefault}},media:{media:{player:"youtube",id:a.id}}}}};minplayer.players.youtube.getNode=function(a,b){var c="https://gdata.youtube.com/feeds/api/videos/"+a.id;jQuery.get(c+"?v=2&alt=jsonc",function(a){b(minplayer.players.youtube.parseNode(a.data))})};
minplayer.players.youtube.prototype.setPlayerState=function(a){switch(a){case YT.PlayerState.BUFFERING:this.onWaiting();break;case YT.PlayerState.PAUSED:this.onPaused();break;case YT.PlayerState.PLAYING:this.onPlaying();break;case YT.PlayerState.ENDED:this.onComplete()}};minplayer.players.youtube.prototype.onReady=function(a){minplayer.players.base.prototype.onReady.call(this);this.options.autoplay||this.pause();this.onLoaded()};
minplayer.players.youtube.prototype.playerFound=function(){return 0<this.display.find("iframe#"+this.options.id+"-player.youtube-player").length};minplayer.players.youtube.prototype.onPlayerStateChange=function(a){this.setPlayerState(a.data)};minplayer.players.youtube.prototype.onQualityChange=function(a){this.quality=a.data};minplayer.players.youtube.prototype.hasPlayLoader=function(a){return minplayer.hasTouch||!a};minplayer.players.youtube.prototype.hasController=function(){return minplayer.isIDevice};
minplayer.players.youtube.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);if(0===jQuery('script[src="https://www.youtube.com/player_api"]').length){var a=document.createElement("script");a.src="https://www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}this.playerId=this.options.id+"-player";this.poll(this.options.id+"_youtube",function(a){return function(){var b=0<jQuery("#"+a.playerId).length;if(b=
(b=b&&"YT"in window)&&"function"===typeof YT.Player){jQuery("#"+a.playerId).addClass("youtube-player");var e=location.protocol,e=e+("//"+location.hostname),e=e+(location.port&&":"+location.port),g={};minplayer.isIDevice?g.origin=e:g={enablejsapi:minplayer.isIDevice?0:1,origin:e,wmode:"opaque",controls:minplayer.isAndroid?1:0,rel:0,showinfo:0};a.player=new YT.Player(a.playerId,{height:"100%",width:"100%",frameborder:0,videoId:a.mediaFile.id,playerVars:g,events:{onReady:function(b){a.onReady(b)},onStateChange:function(b){a.onPlayerStateChange(b)},
onPlaybackQualityChange:function(b){a.onQualityChange(b)},onError:function(b){a.onError(b)}}})}return!b}}(this),200);return jQuery(document.createElement("div")).attr({id:this.playerId})};minplayer.players.youtube.prototype.load=function(a,b){minplayer.players.base.prototype.load.call(this,a,function(){this.player.loadVideoById(a.id,0,this.quality);b&&b.call(this)})};
minplayer.players.youtube.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.onWaiting();this.player.playVideo();a&&a.call(this)})};minplayer.players.youtube.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.pauseVideo();a&&a.call(this)})};minplayer.players.youtube.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.stopVideo();a&&a.call(this)})};
minplayer.players.youtube.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.onWaiting();this.player.seekTo(a,!0);b&&b.call(this)})};minplayer.players.youtube.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.player.setVolume(100*a);b&&b.call(this)})};minplayer.players.youtube.prototype.getVolume=function(a){this.getValue("getVolume",a)};
minplayer.players.youtube.prototype.getDuration=function(a){this.options.duration?a(this.options.duration):this.getValue("getDuration",a)};minplayer.players.youtube.prototype.getCurrentTime=function(a){this.getValue("getCurrentTime",a)};minplayer.players.youtube.prototype.getBytesStart=function(a){this.getValue("getVideoStartBytes",a)};minplayer.players.youtube.prototype.getBytesLoaded=function(a){this.getValue("getVideoBytesLoaded",a)};
minplayer.players.youtube.prototype.getBytesTotal=function(a){this.getValue("getVideoBytesTotal",a)};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.vimeo=function(a,b,c){minplayer.players.base.call(this,a,b,c)};minplayer.players.vimeo.prototype=new minplayer.players.base;minplayer.players.vimeo.prototype.constructor=minplayer.players.vimeo;
minplayer.players.vimeo.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="vimeo"};minplayer.players.vimeo.getPriority=function(a){return 10};minplayer.players.vimeo.canPlay=function(a){return"video/vimeo"===a.mimetype?!0:0===a.path.search(/^http(s)?\:\/\/(www\.)?vimeo\.com/i)};minplayer.players.vimeo.prototype.hasPlayLoader=function(a){return minplayer.hasTouch};minplayer.players.vimeo.prototype.hasController=function(){return minplayer.hasTouch};
minplayer.players.vimeo.getMediaId=function(a){var b=/^http[s]?\:\/\/(www\.)?vimeo\.com\/(\?v\=)?([0-9]+)/i;return 0===a.path.search(b)?a.path.match(b)[3]:a.path};minplayer.players.vimeo.parseNode=function(a){return{title:a.title,description:a.description,mediafiles:{image:{thumbnail:{path:a.thumbnail_small},image:{path:a.thumbnail_large}},media:{media:{player:"vimeo",id:a.id}}}}};minplayer.players.vimeo.nodes={};
minplayer.players.vimeo.getNode=function(a,b){minplayer.players.vimeo.nodes.hasOwnProperty(a.id)?b(minplayer.players.vimeo.nodes[a.id]):jQuery.ajax({url:"https://vimeo.com/api/v2/video/"+a.id+".json",dataType:"jsonp",success:function(c){c=minplayer.players.vimeo.parseNode(c[0]);minplayer.players.vimeo.nodes[a.id]=c;b(c)}})};minplayer.players.vimeo.getImage=function(a,b,c){minplayer.players.vimeo.getNode(a,function(a){c(a.mediafiles.image.image)})};minplayer.players.vimeo.prototype.reset=function(){minplayer.players.base.prototype.reset.call(this)};
minplayer.players.vimeo.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);if(0===jQuery('script[src="http://a.vimeocdn.com/js/froogaloop2.min.js"]').length){var a=document.createElement("script");a.src="http://a.vimeocdn.com/js/froogaloop2.min.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}var c=document.createElement("iframe");c.setAttribute("id",this.options.id+"-player");c.setAttribute("type","text/html");c.setAttribute("width",
"100%");c.setAttribute("height","100%");c.setAttribute("frameborder","0");jQuery(c).addClass("vimeo-player");a="https://player.vimeo.com/video/"+(this.mediaFile.id+"?");a+=jQuery.param({wmode:"opaque",api:1,player_id:this.options.id+"-player",title:0,byline:0,portrait:0,loop:this.options.loop});c.setAttribute("src",a);this.poll(this.options.id+"_vimeo",function(a){return function(){if(window.Froogaloop){a.player=window.Froogaloop(c);var b=0;a.player.addEvent("ready",function(){clearTimeout(b);a.onReady();
a.onError("")});b=setTimeout(function(){a.onReady()},3E3)}return!window.Froogaloop}}(this),200);this.trigger("loadstart");return c};
minplayer.players.vimeo.prototype.onReady=function(a){this.player.addEvent("loadProgress",function(a){return function(c){a.duration.set(parseFloat(c.duration));a.bytesLoaded.set(c.bytesLoaded);a.bytesTotal.set(c.bytesTotal)}}(this));this.player.addEvent("playProgress",function(a){return function(c){a.duration.set(parseFloat(c.duration));a.currentTime.set(parseFloat(c.seconds))}}(this));this.player.addEvent("play",function(a){return function(){a.onPlaying()}}(this));this.player.addEvent("pause",function(a){return function(){a.onPaused()}}(this));
this.player.addEvent("finish",function(a){return function(){a.onComplete()}}(this));minplayer.players.base.prototype.onReady.call(this);this.onLoaded();this.options.autoplay&&this.play()};minplayer.players.vimeo.prototype.clear=function(){this.player&&this.player.api("unload");minplayer.players.base.prototype.clear.call(this)};minplayer.players.vimeo.prototype.load=function(a,b){minplayer.players.base.prototype.load.call(this,a,function(){this.construct();b&&b.call(this)})};
minplayer.players.vimeo.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.player.api("play");a&&a.call(this)})};minplayer.players.vimeo.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.api("pause");a&&a.call(this)})};minplayer.players.vimeo.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.api("unload");a&&a.call(this)})};
minplayer.players.vimeo.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.player.api("seekTo",a);b&&b.call(this)})};minplayer.players.vimeo.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.volume.set(a);this.player.api("setVolume",a);b&&b.call(this)})};minplayer.players.vimeo.prototype.getVolume=function(a){this.whenReady(function(){this.player.api("getVolume",function(b){a(b)})})};
minplayer.players.vimeo.prototype.getDuration=function(a){this.whenReady(function(){this.options.duration?a(this.options.duration):this.duration.value?a(this.duration.value):this.player.api("getDuration",function(b){a(b)})})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.limelight=function(a,b){minplayer.players.flash.call(this,a,b)};minplayer.players.limelight.prototype=new minplayer.players.flash;minplayer.players.limelight.prototype.constructor=minplayer.players.limelight;
minplayer.players.limelight.prototype.construct=function(){minplayer.players.flash.prototype.construct.call(this);this.options.pluginName="limelight"};minplayer.players.limelight.getPriority=function(){return 10};minplayer.players.limelight.canPlay=function(a){return"video/limelight"===a.mimetype?!0:0===a.path.search(/.*limelight\.com.*/i)};minplayer.players.limelight.getMediaId=function(a){var b=/.*limelight\.com.*mediaId=([a-zA-Z0-9]+)/i;return 0===a.path.search(b)?a.path.match(b)[1]:a.path};
minplayer.players.limelight.prototype.register=function(){window.delvePlayerCallback=function(a,b,c){a=a.replace("-player","");jQuery.each(minplayer.get(a,"media"),function(a,e){e.onMediaUpdate(b,c)})}};
minplayer.players.limelight.prototype.onMediaUpdate=function(a,b){switch(a){case "onPlayerLoad":this.onReady();break;case "onMediaLoad":if(this.complete){this.pause();this.onPaused();break}this.shouldSeek=0<this.getSeek();this.onLoaded();break;case "onMediaComplete":this.complete=!0;this.onComplete();break;case "onPlayheadUpdate":if(b.positionInMilliseconds&&!this.playing&&!this.complete)this.onPlaying();this.complete=!1;this.shouldSeek&&this.seekValue?(this.shouldSeek=!1,this.seek(this.seekValue)):
(this.duration.set(b.durationInMilliseconds/1E3),this.currentTime.set(b.positionInMilliseconds/1E3));break;case "onError":this.onError();break;case "onPlayStateChanged":if(b.isPlaying)this.onPlaying();else if(b.isBusy)this.onWaiting();else this.onPaused()}};
minplayer.players.limelight.prototype.createPlayer=function(){minplayer.players.flash.prototype.createPlayer.call(this);var a=document.createElement("script");a.src="https://assets.delvenetworks.com/player/embed.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.register();var a={deepLink:"true",autoplay:this.options.autoplay?"true":"false",startQuality:"HD"},b=null,c=this.options.channel;c||(b=/.*limelight\.com.*channelId=([a-zA-Z0-9]+)/i,0===this.mediaFile.path.search(b)&&
(c=this.mediaFile.path.match(b)[1]));c&&"media"===this.mediaFile.queueType&&(a.adConfigurationChannelId=c);c=this.options.playerForm;c||(b=/.*limelight\.com.*playerForm=([a-zA-Z0-9]+)/i,0===this.mediaFile.path.search(b)&&(c=this.mediaFile.path.match(b)[1]));c&&(a.playerForm=c);a.mediaId=this.mediaFile.id;var d=this.options.id+"-player";setTimeout(function g(){window.hasOwnProperty("LimelightPlayerUtil")?window.LimelightPlayerUtil.initEmbed(d):setTimeout(g,1E3)},1E3);return this.getFlash({swf:"https://assets.delvenetworks.com/player/loader.swf",
id:d,width:this.options.width,height:"100%",flashvars:a,wmode:this.options.wmode})};minplayer.players.limelight.prototype.play=function(a){minplayer.players.flash.prototype.play.call(this,function(){this.player.doPlay();a&&a.call(this)})};minplayer.players.limelight.prototype.pause=function(a){minplayer.players.flash.prototype.pause.call(this,function(){this.player.doPause();a&&a.call(this)})};
minplayer.players.limelight.prototype.stop=function(a){minplayer.players.flash.prototype.stop.call(this,function(){this.player.doPause();a&&a.call(this)})};minplayer.players.limelight.prototype.seek=function(a,b){minplayer.players.flash.prototype.seek.call(this,a,function(){this.seekValue=a;this.player.doSeekToSecond(a);b&&b.call(this)})};minplayer.players.limelight.prototype.setVolume=function(a,b){minplayer.players.flash.prototype.setVolume.call(this,a,function(){this.player.doSetVolume(a);b&&b.call(this)})};
minplayer.players.limelight.prototype.getVolume=function(a){this.whenReady(function(){a(this.player.doGetVolume())})};minplayer.players.limelight.prototype.search=function(a){this.whenReady(function(){this.player.doSearch(a)})};minplayer=minplayer||{};minplayer.players=minplayer.players||{};minplayer.players.kaltura=function(a,b){minplayer.players.base.call(this,a,b)};minplayer.players.kaltura.prototype=new minplayer.players.base;minplayer.players.kaltura.prototype.constructor=minplayer.players.kaltura;
minplayer.players.kaltura.prototype.construct=function(){minplayer.players.base.prototype.construct.call(this);this.options.pluginName="kaltura"};minplayer.players.kaltura.prototype.defaultOptions=function(a){a.entryId=0;a.uiConfId=0;a.partnerId=0;minplayer.players.base.prototype.defaultOptions.call(this,a)};minplayer.players.kaltura.getPriority=function(){return 10};minplayer.players.kaltura.canPlay=function(a){return"video/kaltura"===a.mimetype?!0:0===a.path.search(/.*kaltura\.com.*/i)};
minplayer.players.kaltura.prototype.playerStateChange=function(a){switch(a){case "ready":this.onLoaded();break;case "loading":case "buffering":this.onWaiting();break;case "playing":this.onPlaying();break;case "paused":this.onPaused()}};minplayer.players.kaltura.prototype.mediaReady=function(){this.onLoaded()};minplayer.players.kaltura.prototype.playerPlayEnd=function(a){this.onComplete()};minplayer.players.kaltura.prototype.playUpdate=function(a){this.currentTime.set(a)};
minplayer.players.kaltura.prototype.durationChange=function(a){this.duration.set(a.newValue)};minplayer.players.kaltura.prototype.getInstance=function(){if(this.instanceName)return this.instanceName;var a=this.uuid.split("__"),b="minplayer.plugins."+a[0],b=b+("."+a[1]);return this.instanceName=b+="["+(a[2]-1)+"]"};
minplayer.players.kaltura.prototype.registerEvents=function(){this.player.addJsListener("playerStateChange",this.getInstance()+".playerStateChange");this.player.addJsListener("durationChange",this.getInstance()+".durationChange");this.player.addJsListener("mediaReady",this.getInstance()+".mediaReady");this.player.addJsListener("playerUpdatePlayhead",this.getInstance()+".playUpdate");this.player.addJsListener("playerPlayEnd",this.getInstance()+".playerPlayEnd")};
minplayer.players.kaltura.prototype.createPlayer=function(){minplayer.players.base.prototype.createPlayer.call(this);var a={},b=this;jQuery.each(["entryId","uiConfId","partnerId"],function(c,d){a[d]="";if(b.options[d])a[d]=b.options[d];else{var e=null;switch(d){case "entryId":e=/.*kaltura\.com.*entry_id\/([a-zA-Z0-9_-]+)/i;break;case "uiConfId":e=/.*kaltura\.com.*uiconf_id\/([a-zA-Z0-9_-]+)/i;break;case "partnerId":e=/.*kaltura\.com.*wid\/_([a-zA-Z0-9_-]+)/i}e&&(a[d]=b.mediaFile.path.match(e),a[d]&&
(a[d]=a[d][1]))}});var c=document.createElement("script");c.src="http://cdnapi.kaltura.com/p/";c.src+=a.partnerId;c.src+="/sp/";c.src+=a.partnerId;c.src+="00/embedIframeJs/uiconf_id/";c.src+=a.uiConfId;c.src+="/partner_id/";c.src+=a.partnerId;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);var e=this.options.id+"-player";setTimeout(function k(){window.hasOwnProperty("kWidget")?kWidget.embed({targetId:e,wid:"_"+a.partnerId,uiconf_id:a.uiConfId,entry_id:a.entryId,flashvars:{autoPlay:!1},
params:{wmode:"transparent"},readyCallback:function(a){b.player=jQuery("#"+a).get(0);b.registerEvents();b.onReady()}}):setTimeout(k,1E3)},1E3);return'<div id="'+e+'" style="width:100%;height:100%;"></div>'};minplayer.players.kaltura.prototype.play=function(a){minplayer.players.base.prototype.play.call(this,function(){this.player.sendNotification("doPlay");a&&a.call(this)})};
minplayer.players.kaltura.prototype.pause=function(a){minplayer.players.base.prototype.pause.call(this,function(){this.player.sendNotification("doPause");a&&a.call(this)})};minplayer.players.kaltura.prototype.stop=function(a){minplayer.players.base.prototype.stop.call(this,function(){this.player.sendNotification("doStop");a&&a.call(this)})};
minplayer.players.kaltura.prototype.seek=function(a,b){minplayer.players.base.prototype.seek.call(this,a,function(){this.seekValue=a;this.player.sendNotification("doSeek",a);b&&b.call(this)})};minplayer.players.kaltura.prototype.setVolume=function(a,b){minplayer.players.base.prototype.setVolume.call(this,a,function(){this.player.sendNotification("changeVolume",a);b&&b.call(this)})};minplayer=minplayer||{};minplayer.controller=function(a,b){minplayer.display.call(this,"controller",a,b)};
minplayer.controller.prototype=new minplayer.display;minplayer.controller.prototype.constructor=minplayer.controller;minplayer.formatTime=function(a){a=a||0;var b=0,c=0,d=0,e="",d=Math.floor(a/3600);a-=3600*d;c=Math.floor(a/60);b=Math.floor((a-60*c)%60);d&&(e+=String(d),e+=":");e+=10<=c?String(c):"0"+String(c);e=e+":"+(10<=b?String(b):"0"+String(b));return{time:e,units:""}};
minplayer.controller.prototype.getElements=function(){var a=minplayer.display.prototype.getElements.call(this);return jQuery.extend(a,{play:null,pause:null,fullscreen:null,seek:null,progress:null,volume:null,timer:null})};minplayer.controller.prototype.defaultOptions=function(a){a.disptime=0;minplayer.display.prototype.defaultOptions.call(this,a)};
minplayer.controller.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.options.pluginName="controller";this.dragging=!1;this.vol=0;this.elements.seek&&(this.seekBar=this.elements.seek.slider({range:"min",create:function(a,b){jQuery(".ui-slider-range",a.target).addClass("ui-state-active")}}));this.elements.volume&&(this.volumeBar=this.elements.volume.slider({animate:!0,range:"min",orientation:"vertical"}));this.get("player",function(a){this.elements.fullscreen&&minplayer.click(this.elements.fullscreen.unbind(),
function(){a.toggleFullScreen()}).css({pointer:"hand"})});this.get("media",function(a){a.hasController()?this.hide():(this.elements.pause&&(minplayer.click(this.elements.pause.unbind(),function(b){return function(c){c.preventDefault();b.playPause(!1,a)}}(this)),a.ubind(this.uuid+":pause",function(a){return function(c){a.setPlayPause(!0)}}(this))),this.elements.play&&(minplayer.click(this.elements.play.unbind(),function(b){return function(c){c.preventDefault();b.playPause(!0,a)}}(this)),a.ubind(this.uuid+
":playing",function(a){return function(c){a.setPlayPause(!1)}}(this))),this.elements.duration&&(a.ubind(this.uuid+":durationchange",function(a){return function(c,d){a.setTimeString("duration",a.options.disptime||d.duration)}}(this)),a.getDuration(function(a){return function(c){c=a.options.disptime||c;a.setTimeString("duration",c)}}(this))),this.elements.progress&&a.ubind(this.uuid+":progress",function(a){return function(c,d){a.elements.progress.width((d.total?100*(d.loaded/d.total):0)+"%")}}(this)),
(this.seekBar||this.elements.timer)&&a.ubind(this.uuid+":timeupdate",function(a){return function(c,d){if(!a.dragging){var e=0;d.duration&&(e=100*(d.currentTime/d.duration));a.seekBar&&a.seekBar.slider("option","value",e);a.setTimeString("timer",d.currentTime)}}}(this)),this.seekBar&&this.seekBar.slider({start:function(a){return function(c,d){a.dragging=!0}}(this),stop:function(b){return function(c,d){b.dragging=!1;a.getDuration(function(b){a.seek(d.value/100*b)})}}(this),slide:function(b){return function(c,
d){a.getDuration(function(c){c*=d.value/100;b.dragging||a.seek(c);b.setTimeString("timer",c)})}}(this)}),this.elements.mute&&minplayer.click(this.elements.mute,function(b){return function(c){c.preventDefault();c=b.volumeBar.slider("option","value");0<c?(b.vol=c,b.volumeBar.slider("option","value",0),a.setVolume(0)):(b.volumeBar.slider("option","value",b.vol),a.setVolume(b.vol/100))}}(this)),this.volumeBar&&(this.volumeBar.slider({slide:function(b,c){a.setVolume(c.value/100)}}),a.ubind(this.uuid+":volumeupdate",
function(a){return function(c,d){a.volumeBar.slider("option","value",100*d)}}(this)),a.getVolume(function(a){return function(c){a.volumeBar.slider("option","value",100*c)}}(this))))});this.ready()};minplayer.controller.prototype.setPlayPause=function(a){this.elements.play&&this.elements.play.css("display",a?"inherit":"none");this.elements.pause&&this.elements.pause.css("display",a?"none":"inherit")};
minplayer.controller.prototype.playPause=function(a,b){var c=a?"play":"pause";this.display.trigger(c);this.setPlayPause(!a);if(b)b[c]()};minplayer.controller.prototype.setTimeString=function(a,b){this.elements[a]&&this.elements[a].text(minplayer.formatTime(b).time)};
jQuery.fn.osmplayer||(jQuery.event.special.playerdestroyed={remove:function(a){a.handler&&a.handler(this)}},jQuery.fn.osmplayer=function(a){return jQuery(this).each(function(){a=a||{};a.id=a.id||jQuery(this).attr("id")||Math.random();minplayer.plugins[a.id]||(a.template=a.template||"default",osmplayer[a.template]?new osmplayer[a.template](jQuery(this),a):new osmplayer(jQuery(this),a))})});osmplayer=function(a,b){minplayer.call(this,a,b)};osmplayer.prototype=new minplayer;
osmplayer.prototype.constructor=osmplayer;osmplayer.prototype.create=function(a,b,c){return minplayer.prototype.create.call(this,a,"osmplayer",c)};osmplayer.prototype.defaultOptions=function(a){a.playlist="";a.node={};a.link="http://www.mediafront.org";a.logo="http://mediafront.org/assets/osmplayer/logo.png";minplayer.prototype.defaultOptions.call(this,a)};
osmplayer.prototype.construct=function(){minplayer.prototype.construct.call(this);jQuery(this.display).bind("playerdestroyed",function(a){return function(b){if(b===a.display.eq(0)[0]){for(var c in minplayer.plugins[a.options.id]){for(var d in minplayer.plugins[a.options.id][c])minplayer.plugins[a.options.id][c][d].destroy(),delete minplayer.plugins[a.options.id][c][d];minplayer.plugins[a.options.id][c].length=0}delete minplayer.plugins[a.options.id];minplayer.plugins[a.options.id]=null}}}(this));
this.playQueue=[];this.playIndex=0;this.hasPlaylist=!1;this.create("playlist","osmplayer");this.get("playlist",function(a){this.hasPlaylist=!0;a.ubind(this.uuid+":nodeLoad",function(a){return function(c,d){a.loadNode(d)}}(this))});this.get("media",function(a){a.ubind(this.uuid+":ended",function(a){return function(){a.options.autoplay=!0;a.playNext()}}(this))});this.options.node&&this.loadNode(this.options.node)};osmplayer.prototype.fullScreenElement=function(){return this.elements.minplayer};
osmplayer.prototype.reset=function(a){this.playQueue.length=0;this.playQueue=[];this.playIndex=0;this.playLoader&&this.options.preview?(this.options.preview="",this.playLoader.clear(function(b){return function(){a.call(b)}}(this))):a&&a.call(this)};
osmplayer.prototype.loadNode=function(a){if(!a||a.hasOwnProperty("length")&&0===a.length)return!1;this.reset(function(){this.hasMedia=a&&a.mediafiles&&a.mediafiles.media;if(a&&a.mediafiles){var b=a.mediafiles.media;if(b){var c=null,d=[],d=minplayer.isAndroid||minplayer.isIDevice?["media"]:["intro","commercial","prereel","media","postreel"];jQuery.each(d,function(a){return function(d,k){if(c=a.addToQueue(b[k]))c.queueType=k}}(this))}else this.display.addClass("nomedia");this.playNext();osmplayer.getImage(a.mediafiles,
"preview",function(a){return function(b){a.playLoader&&0<a.playLoader.display.length&&(a.playLoader.enabled=!0,a.playLoader.loadPreview(b.path),a.playLoader.previewFlag.setFlag("media",!0),a.hasMedia||(a.playLoader.busy.setFlag("media",!1),a.playLoader.bigPlay.setFlag("media",!1)),a.playLoader.checkVisibility())}}(this))}})};osmplayer.prototype.addToQueue=function(a){(a=minplayer.getMediaFile(a))&&this.playQueue.push(a);return a};
osmplayer.prototype.playNext=function(){this.playQueue.length>this.playIndex?(this.load(this.playQueue[this.playIndex]),this.playIndex++):this.options.repeat?(this.playIndex=0,this.playNext()):0<this.playQueue.length?this.hasPlaylist&&this.options.autoNext?this.trigger("player_ended"):(this.options.autoplay=!1,this.playIndex=0,this.playNext()):this.media&&(this.media.stop(),this.hasMedia||this.media.clear())};
osmplayer.getNode=function(a,b){if(a&&a.mediafiles&&a.mediafiles.media){var c=minplayer.getMediaFile(a.mediafiles.media.media);if(c){var d=minplayer.players[c.player];d&&"function"===typeof d.getNode&&d.getNode(c,function(a){b(a)})}}};
osmplayer.getImage=function(a,b,c){var d="",e=a.image;if(e)if(e[b])d=e[b];else if(e.image)d=e.image;else for(b in e)if(e.hasOwnProperty(b)){d=e[b];break}d?c(new minplayer.file(d)):(a=minplayer.getMediaFile(a.media.media))&&(d=minplayer.players[a.player])&&"function"===typeof d.getImage&&d.getImage(a,b,function(a){c(new minplayer.file(a))})};var osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser["default"]={priority:1,valid:function(a){return!0},getType:function(a){return"json"},getFeed:function(a,b,c){a=a.replace(/(.*)\??(.*)/i,"$1");return a=a+("?start-index="+b)+("&max-results="+c)},parse:function(a){return a}};osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.youtube={priority:10,valid:function(a){return 0===a.search(/^http(s)?\:\/\/gdata\.youtube\.com/i)},getType:function(a){return"jsonp"},getFeed:function(a,b,c){a=a.replace(/(.*)\??(.*)/i,"$1");a=a+("?start-index="+(b+1))+("&max-results="+c);return a+="&v=2&alt=jsonc"},parse:function(a){a=a.data;var b={total_rows:a.totalItems,nodes:[]},c=null,d;for(d in a.items)a.items.hasOwnProperty(d)&&(c=minplayer.players.youtube.parseNode(a.items[d]),b.nodes.push(c));return b}};
osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.rss={priority:8,valid:function(a){a=a.replace(/(.*)\??(.*)/i,"$1");return null!==a.match(/\.rss$/i)},getType:function(a){return"xml"},getFeed:function(a,b,c){return a},parse:function(a){var b={total_rows:0,nodes:[]};jQuery("rss channel",a).find("item").each(function(a){osmplayer.parser.rss.addRSSItem(b,jQuery(this))});return b},addRSSItem:function(a,b){a.total_rows++;var c={},d="",d=d=d="",d=b.find("title");d.length&&(c.title=d.text());d=b.find("annotation");d.length&&(c.description=
d.text());c.mediafiles={};d=b.find("image");d.length&&(c.mediafiles.image={image:{path:d.text()}});d=b.find("location");d.length&&(c.mediafiles.media={media:{path:d.text()}});a.nodes.push(c)}};osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.asx={priority:8,valid:function(a){a=a.replace(/(.*)\??(.*)/i,"$1");return null!==a.match(/\.asx$/i)},getType:function(a){return"xml"},getFeed:function(a,b,c){return a},parse:function(a){var b={total_rows:0,nodes:[]};jQuery("asx entry",a).each(function(a){osmplayer.parser.rss.addRSSItem(b,jQuery(this))});return b}};osmplayer=osmplayer||{};osmplayer.parser=osmplayer.parser||{};
osmplayer.parser.xsfp={priority:8,valid:function(a){a=a.replace(/(.*)\??(.*)/i,"$1");return null!==a.match(/\.xml$/i)},getType:function(a){return"xml"},getFeed:function(a,b,c){return a},parse:function(a){var b={total_rows:0,nodes:[]};jQuery("playlist trackList track",a).each(function(a){osmplayer.parser.rss.addRSSItem(b,jQuery(this))});return b}};osmplayer=osmplayer||{};osmplayer.playlist=function(a,b){minplayer.display.call(this,"playlist",a,b)};osmplayer.playlist.prototype=new minplayer.display;
osmplayer.playlist.prototype.constructor=osmplayer.playlist;osmplayer.playlist.prototype.defaultOptions=function(a){a.vertical=!0;a.playlist="";a.pageLimit=10;a.autoNext=!0;a.shuffle=!1;a.loop=!1;a.hysteresis=40;a.scrollSpeed=20;a.scrollMode="auto";minplayer.display.prototype.defaultOptions.call(this,a)};
osmplayer.playlist.prototype.construct=function(){this.nodes=[];this.page=-1;this.totalItems=0;this.currentItem=-1;this.playqueue=[];this.playqueuepos=0;this.playlist=this.options.playlist;this.scroll=null;this.orient={pos:this.options.vertical?"y":"x",pagePos:this.options.vertical?"pageY":"pageX",offset:this.options.vertical?"top":"left",wrapperSize:this.options.vertical?"wrapperH":"wrapperW",minScroll:this.options.vertical?"minScrollY":"minScrollX",maxScroll:this.options.vertical?"maxScrollY":"maxScrollX",
size:this.options.vertical?"height":"width"};this.pager=this.create("pager","osmplayer");this.pager.ubind(this.uuid+":nextPage",function(a){return function(b){a.nextPage()}}(this));this.pager.ubind(this.uuid+":prevPage",function(a){return function(b){a.prevPage()}}(this));minplayer.display.prototype.construct.call(this);this.hasPlaylist=this.next();this.ready()};
osmplayer.playlist.prototype.onAdded=function(a){this.options.autoNext&&a.get("player",function(a){return function(c){c.ubind(a.uuid+":player_ended",function(d){a.hasPlaylist&&(c.options.autoplay=!0,a.next())})}}(this))};osmplayer.playlist.prototype.scrollTo=function(a,b){this.scroll&&(this.scroll.options.hideScrollbar=!1,this.options.vertical?this.scroll.scrollTo(0,a,0,b):this.scroll.scrollTo(a,0,0,b),this.scroll.options.hideScrollbar=!0)};
osmplayer.playlist.prototype.refreshScroll=function(){if(window.addEventListener){var a=this.elements.list,b=this.elements.scroll;this.scroll&&(this.scroll.scrollTo(0,0),this.scroll.destroy(),this.scroll=null,this.elements.list.unbind("mousemove").unbind("mouseenter").unbind("mouseleave"));if(!this.options.vertical){var c=0;jQuery.each(this.elements.list.children(),function(){c+=jQuery(this).outerWidth()});this.elements.list.width(c)}0<a.length&&0<b.length&&a[this.orient.size]()>b[this.orient.size]()&&
(this.scroll=new iScroll(this.elements.scroll.eq(0)[0],{hScroll:!this.options.vertical,hScrollbar:!this.options.vertical,vScroll:this.options.vertical,vScrollbar:this.options.vertical,hideScrollbar:"none"!==this.options.scrollMode}),"auto"!=this.options.scrollMode||minplayer.hasTouch||this.elements.list.bind("mousemove",function(a){return function(b){b.preventDefault();var c=a.display.offset()[a.orient.offset];a.mousePos=b[a.orient.pagePos];a.mousePos-=c}}(this)).bind("mouseenter",function(a){return function(b){b.preventDefault();
a.scrolling=!0;var c=function(){if(a.scrolling){var b=a.scroll[a.orient.wrapperSize]/2,e=a.mousePos-b;if(Math.abs(e)>a.options.hysteresis){var l=a.options.hysteresis,e=a.options.scrollSpeed*(e+l*(0<e?-1:0)),e=e/b,b=a.scroll[a.orient.pos]-e,l=a.scroll[a.orient.minScroll]||0,q=a.scroll[a.orient.maxScroll];b>=l?a.scrollTo(l):b<=q?a.scrollTo(q):a.scrollTo(e,!0)}setTimeout(c,30)}};c()}}(this)).bind("mouseleave",function(a){return function(b){b.preventDefault();a.scrolling=!1}}(this)),this.scroll.refresh(),
this.scroll.scrollTo(0,0,200))}else setTimeout(function(a){return function(){a.refreshScroll.call(a)}}(this),200)};osmplayer.playlist.prototype.addNode=function(a){var b=this.nodes.length,c=this.create("teaser","osmplayer",this.elements.list);c.setNode(a);c.ubind(this.uuid+":nodeLoad",function(a){return function(c,g){a.loadItem(b)}}(this));this.nodes.push(c)};
osmplayer.playlist.prototype.set=function(a,b){if("object"!==typeof a)this.trigger("error","Playlist must be an object to set");else if(a.hasOwnProperty("total_rows")){if(a.total_rows&&a.nodes.length){this.totalItems=a.total_rows;this.currentItem=0;(this.page+1)*this.options.pageLimit>=this.totalItems||this.totalItems==a.nodes.length?this.pager.nextPage.hide():this.pager.nextPage.show();var c=a.nodes.length;this.elements.list.empty();this.nodes=[];for(var d=0;d<c;d++)this.addNode(a.nodes[d]),b===
d&&this.loadItem(d);this.refreshScroll();this.trigger("playlistLoad",a)}this.elements.playlist_busy&&this.elements.playlist_busy.hide()}else this.trigger("error","Unknown playlist format.")};osmplayer.playlist.prototype.setQueue=function(){this.playqueue.push({page:this.page,item:this.currentItem});this.playqueuepos=this.playqueue.length};
osmplayer.playlist.prototype.next=function(){var a=0,b=this.page;if(this.playqueuepos>=this.playqueue.length){if(this.options.shuffle)return a=Math.floor(Math.random()*this.totalItems),b=Math.floor(a/this.options.pageLimit),a%=this.options.pageLimit,this.load(b,a);a=this.currentItem+1;return a>=this.nodes.length?this.load(b+1,0):this.loadItem(a)}this.playqueuepos+=1;a=this.playqueue[this.playqueuepos];return this.load(a.page,a.item)};
osmplayer.playlist.prototype.prev=function(){this.playqueuepos-=1;this.playqueuepos=0>this.playqueuepos?0:this.playqueuepos;var a=this.playqueue[this.playqueuepos];return a?this.load(a.page,a.item):!1};osmplayer.playlist.prototype.loadItem=function(a){if(a<this.nodes.length){this.setQueue();var b=this.nodes[this.currentItem];b.select(!1);this.currentItem=a;b=this.nodes[a];b.select(!0);this.trigger("nodeLoad",b.node);return!0}return!1};
osmplayer.playlist.prototype.nextPage=function(a){return this.load(this.page+1,a)};osmplayer.playlist.prototype.prevPage=function(a){return this.load(this.page-1,a)};
osmplayer.playlist.prototype.load=function(a,b){if(this.playlist==this.options.playlist&&a==this.page)return this.loadItem(b);this.playlist=this.options.playlist;if(!this.playlist)return!1;if(a>Math.floor(this.totalItems/this.options.pageLimit))if(this.options.loop)b=a=0;else return!1;this.elements.playlist_busy&&this.elements.playlist_busy.show();a=a||0;a=0>a?0:a;this.setQueue();this.page=a;0===this.page?this.pager.prevPage.hide():this.pager.prevPage.show();if("object"==typeof this.playlist)return this.set(this.playlist,
b),this.playlist.endpoint&&(this.playlist=this.options.playlist=this.playlist.endpoint),!0;var c=osmplayer.parser["default"],d;for(d in osmplayer.parser)osmplayer.parser.hasOwnProperty(d)&&osmplayer.parser[d].valid(this.playlist)&&osmplayer.parser[d].priority>c.priority&&(c=osmplayer.parser[d]);d={type:"GET",url:c.getFeed(this.playlist,this.page*this.options.pageLimit,this.options.pageLimit),success:function(a){return function(d){a.set(c.parse(d),b)}}(this),error:function(a){return function(b,c,d){a.elements.playlist_busy&&
a.elements.playlist_busy.hide();a.trigger("error",c)}}(this)};var e=c.getType();e&&(d.dataType=e);jQuery.ajax(d);return!0};osmplayer=osmplayer||{};osmplayer.pager=function(a,b){minplayer.display.call(this,"pager",a,b)};osmplayer.pager.prototype=new minplayer.display;osmplayer.pager.prototype.constructor=osmplayer.pager;
osmplayer.pager.prototype.construct=function(){minplayer.display.prototype.construct.call(this);this.elements.prevPage&&(this.prevPage=this.elements.prevPage.click(function(a){return function(b){b.preventDefault();a.trigger("prevPage")}}(this)));this.elements.nextPage&&(this.nextPage=this.elements.nextPage.click(function(a){return function(b){b.preventDefault();a.trigger("nextPage")}}(this)))};osmplayer=osmplayer||{};
osmplayer.teaser=function(a,b){this.preview=null;minplayer.display.call(this,"teaser",a,b)};osmplayer.teaser.prototype=new minplayer.display;osmplayer.teaser.prototype.constructor=osmplayer.teaser;osmplayer.teaser.prototype.select=function(a){};
osmplayer.teaser.prototype.setNode=function(a){this.node=a;this.elements.title&&(a.title?this.elements.title.text(a.title):osmplayer.getNode(a,function(a){return function(c){a.elements.title.text(c.title)}}(this)));a.mediafiles&&osmplayer.getImage(a.mediafiles,"thumbnail",function(a){return function(c){c&&a.elements.image&&(a.preview=new minplayer.image(a.elements.image),a.preview.load(c.path))}}(this));this.display.unbind("click").click(function(a){return function(c){c.preventDefault();a.trigger("nodeLoad",
a.node)}}(this))};
;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the controller object.
  osmplayer.controller = osmplayer.controller || {};

  /**
   * Constructor for the minplayer.controller
   */
  osmplayer.controller[template] = function(context, options) {

    // Derive from default controller
    minplayer.controller.call(this, context, options);
  };

  /** Derive from controller. */
  osmplayer.controller[template].prototype = new minplayer.controller();
  osmplayer.controller[template].prototype.constructor = osmplayer.controller[template];

  /**
   * @see minplayer.plugin#construct
   */
  osmplayer.controller[template].prototype.construct = function() {

    // Make sure we provide default options...
    this.options = jQuery.extend({
      volumeVertical: true
    }, this.options);

    minplayer.controller.prototype.construct.call(this);
    if (!this.options.volumeVertical || this.options.controllerOnly) {
      this.display.addClass('minplayer-controls-volume-horizontal');
      this.display.removeClass('minplayer-controls-volume-vertical');

      // Need to catch this exception so that the player will continue to
      // function.  This is a bug with Opera.
      try {
        this.volumeBar.slider("option", "orientation", "horizontal");
      }
      catch (e) {}
    }
    else {
      this.display.addClass('minplayer-controls-volume-vertical');
      this.display.removeClass('minplayer-controls-volume-horizontal');
    }

    if (!this.options.controllerOnly) {
      this.get('player', function(player) {
        this.get('media', function(media) {
          if (!media.hasController()) {
            this.showThenHide(5000, function(shown) {
              var op = shown ? 'addClass' : 'removeClass';
              player.display[op]('with-controller');
            });
          }
          else {
            player.display.addClass('with-controller');
          }
        });
      });
    }
  }

  /**
   * Return the display for this plugin.
   */
  osmplayer.controller[template].prototype.getDisplay = function() {

    // See if we need to build out the controller.
    if (this.options.build) {

      // Prepend the control template.
      jQuery('.minplayer-' + template, this.context).prepend('\
      <div class="minplayer-' + template + '-controls ui-widget-header">\
        <div class="minplayer-' + template + '-controls-left">\
          <a class="minplayer-' + template + '-play minplayer-' + template + '-button ui-state-default ui-corner-all" title="Play">\
            <span class="ui-icon ui-icon-play"></span>\
          </a>\
          <a class="minplayer-' + template + '-pause minplayer-' + template + '-button ui-state-default ui-corner-all" title="Pause">\
            <span class="ui-icon ui-icon-pause"></span>\
          </a>\
        </div>\
        <div class="minplayer-' + template + '-controls-right">\
          <div class="minplayer-' + template + '-timer">00:00</div>\
          <div class="minplayer-' + template + '-fullscreen ui-widget-content">\
            <div class="minplayer-' + template + '-fullscreen-inner ui-state-default"></div>\
          </div>\
          <div class="minplayer-' + template + '-volume">\
            <div class="minplayer-' + template + '-volume-slider"></div>\
            <a class="minplayer-' + template + '-volume-mute minplayer-' + template + '-button ui-state-default ui-corner-all" title="Mute">\
              <span class="ui-icon ui-icon-volume-on"></span>\
            </a>\
            <a class="minplayer-' + template + '-volume-unmute minplayer-' + template + '-button ui-state-default ui-corner-all" title="Unmute">\
              <span class="ui-icon ui-icon-volume-off"></span>\
            </a>\
          </div>\
        </div>\
        <div class="minplayer-' + template + '-controls-mid">\
          <div class="minplayer-' + template + '-seek">\
            <div class="minplayer-' + template + '-progress ui-state-default"></div>\
          </div>\
        </div>\
      </div>');
    }

    // Let our template know we have a controller.
    this.context.addClass('with-controller');

    return jQuery('.minplayer-' + template + '-controls', this.context);
  }

  // Return the elements
  osmplayer.controller[template].prototype.getElements = function() {
    var elements = minplayer.controller.prototype.getElements.call(this);
    var timer = jQuery('.minplayer-' + template + '-timer', this.display);
    return jQuery.extend(elements, {
      play: jQuery('.minplayer-' + template + '-play', this.display),
      pause: jQuery('.minplayer-' + template + '-pause', this.display),
      fullscreen: jQuery('.minplayer-' + template + '-fullscreen', this.display),
      seek: jQuery('.minplayer-' + template + '-seek', this.display),
      progress: jQuery('.minplayer-' + template + '-progress', this.display),
      volume: jQuery('.minplayer-' + template + '-volume-slider', this.display),
      mute: jQuery('.minplayer-' + template + '-volume-mute', this.display),
      timer:timer,
      duration:timer
    });
  };
})('default', osmplayer);
;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // templated player.
  osmplayer[template] = function(context, options) {

    // Derive from osmplayer.
    osmplayer.call(this, context, options);
  };

  /**
   * Define this template prototype.
   */
  osmplayer[template].prototype = new osmplayer();
  osmplayer[template].prototype.constructor = osmplayer[template];

  /**
   * The player constructor.
   */
  osmplayer[template].prototype.construct = function() {

    // Make sure we provide default options...
    this.options = jQuery.extend({
      controllerOnly: false
    }, this.options);

    osmplayer.prototype.construct.call(this);
    if (this.options.controllerOnly) {
      this.display.addClass('controller-only');
    }
  };

  /**
   * Return the display for this plugin.
   */
  osmplayer[template].prototype.getDisplay = function() {

    // If this is the bottom element, then we need to build.
    if (this.context.children().length == 0) {

      // Build out the player provided the base tag.
      this.context = this.context.attr({
        'id': this.options.id + '-player',
        'class': 'minplayer-' + template + '-media'
      })
      .wrap(jQuery(document.createElement('div')).attr({
        'class': 'minplayer-' + template + '-display ui-widget-content'
      })).parent('.minplayer-' + template + '-display')
      .wrap(jQuery(document.createElement('div')).attr({
        'class': 'minplayer-' + template
      })).parent('.minplayer-' + template)
      .prepend('\
        <div class="minplayer-' + template + '-logo"></div>\
        <div class="minplayer-' + template + '-error"></div>'
      )
      .wrap(jQuery(document.createElement('div')).attr({
        'id': this.options.id,
        'class': 'osmplayer-' + template + ' player-ui'
      })).parent('.osmplayer-' + template);

      // Mark a flag that says this display needs to be built.
      this.options.build = true;
    }

    return this.context;
  }

  // Get the elements for this player.
  osmplayer[template].prototype.getElements = function() {
    var elements = osmplayer.prototype.getElements.call(this);

    // Set the width and height of this element.
    this.display.width(this.options.width);
    this.display.height(this.options.height);

    // Get the minplayer component.
    var minplayer = jQuery('.minplayer-' + template, this.display);
    if (this.options.playlistOnly) {
      minplayer.remove();
      minplayer = null;
    }

    return jQuery.extend(elements, {
      player:this.display,
      minplayer: minplayer,
      display:jQuery('.minplayer-' + template + '-display', this.display),
      media:jQuery('.minplayer-' + template + '-media', this.display),
      error:jQuery('.minplayer-' + template + '-error', this.display),
      logo:jQuery('.minplayer-' + template + '-logo', this.display)
    });
  };
})('default', osmplayer);
;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the busy object.
  osmplayer.pager = osmplayer.pager || {};

  // constructor.
  osmplayer.pager[template] = function(context, options) {

    // Derive from pager
    osmplayer.pager.call(this, context, options);
  };

  // Define the prototype for all controllers.
  osmplayer.pager[template].prototype = new osmplayer.pager();
  osmplayer.pager[template].prototype.constructor = osmplayer.pager[template];

  /**
   * Return the display for this plugin.
   */
  osmplayer.pager[template].prototype.getDisplay = function() {

    if (this.options.build) {

      // append the pager.
      this.context.append('\
      <div class="osmplayer-' + template + '-playlist-pager ui-widget-header">\
        <div class="osmplayer-' + template + '-playlist-pager-left">\
          <a href="#" class="osmplayer-' + template + '-playlist-pager-link osmplayer-' + template + '-playlist-pager-prevpage minplayer-' + template + '-button ui-state-default ui-corner-all">\
            <span class="ui-icon ui-icon-circle-triangle-w"></span>\
          </a>\
        </div>\
        <div class="osmplayer-' + template + '-playlist-pager-right">\
          <a href="#" class="osmplayer-' + template + '-playlist-pager-link osmplayer-' + template + '-playlist-pager-nextpage minplayer-' + template + '-button ui-state-default ui-corner-all">\
            <span class="ui-icon ui-icon-circle-triangle-e"></span>\
          </a>\
        </div>\
      </div>');
    }

    return jQuery('.osmplayer-' + template + '-playlist-pager', this.context);
  }

  // Return the elements
  osmplayer.pager[template].prototype.getElements = function() {
    var elements = osmplayer.pager.prototype.getElements.call(this);
    return jQuery.extend(elements, {
      prevPage:jQuery('.osmplayer-' + template + '-playlist-pager-prevpage', this.display),
      nextPage:jQuery('.osmplayer-' + template + '-playlist-pager-nextpage', this.display)
    });
  };
})('default', osmplayer);

;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the busy object.
  osmplayer.playLoader = osmplayer.playLoader || {};

  // constructor.
  osmplayer.playLoader[template] = function(context, options) {

    // Derive from playLoader
    minplayer.playLoader.call(this, context, options);
  };

  // Define the prototype for all controllers.
  osmplayer.playLoader[template].prototype = new minplayer.playLoader();
  osmplayer.playLoader[template].prototype.constructor = osmplayer.playLoader[template];

  /**
   * Return the display for this plugin.
   */
  osmplayer.playLoader[template].prototype.getDisplay = function() {

    // See if we need to build out the controller.
    if (this.options.build) {

      // Prepend the playloader template.
      jQuery('.minplayer-' + template + '', this.context).prepend('\
      <div class="minplayer-' + template + '-loader-wrapper">\
        <div class="minplayer-' + template + '-big-play ui-state-default"><span></span></div>\
        <div class="minplayer-' + template + '-loader">&nbsp;</div>\
        <div class="minplayer-' + template + '-preview ui-widget-content"></div>\
      </div>');
    }

    return jQuery('.minplayer-' + template + ' .minplayer-' + template + '-loader-wrapper', this.context);
  }

  /**
   * Loads the preview image.
   */
  osmplayer.playLoader[template].prototype.loadPreview = function(image) {
    if (!minplayer.playLoader.prototype.loadPreview.call(this, image)) {
      this.elements.preview.addClass('no-image');
    }
  };

  // Return the elements
  osmplayer.playLoader[template].prototype.getElements = function() {
    var elements = minplayer.playLoader.prototype.getElements.call(this);
    return jQuery.extend(elements, {
      busy:jQuery('.minplayer-' + template + '-loader', this.display),
      bigPlay:jQuery('.minplayer-' + template + '-big-play', this.display),
      preview:jQuery('.minplayer-' + template + '-preview', this.display)
    });
  };
})('default', osmplayer);

;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the busy object.
  osmplayer.playlist = osmplayer.playlist || {};

  // constructor.
  osmplayer.playlist[template] = function(context, options) {

    // Derive from playlist
    osmplayer.playlist.call(this, context, options);
  };

  // Define the prototype for all controllers.
  osmplayer.playlist[template].prototype = new osmplayer.playlist();
  osmplayer.playlist[template].prototype.constructor = osmplayer.playlist[template];

  /**
   * @see minplayer.plugin#construct
   */
  osmplayer.playlist[template].prototype.construct = function() {

    // Set some defaults.
    this.options = jQuery.extend({
      showPlaylist: true
    }, this.options);

    osmplayer.playlist.prototype.construct.call(this);

    // Show then hide the element.
    this.showThenHide(this.elements.hideShow);

    // Make the main minplayer have the same width as the playlist.
    this.get('player', function(player) {

      // Set the size.
      var size = this.options.vertical ? 'width' : 'height';
      var position = this.options.vertical ? 'right' : 'bottom';
      var margin = this.options.vertical ? 'marginRight' : 'marginBottom';

      // Hide and show the playlist.
      this.hideShow = function(show, animate) {
        var playerPos = {}, displayPos = {};
        var displaySize = this.display[size]();
        var e = this.options.vertical ? 'e' : 's';
        var w = this.options.vertical ? 'w' : 'n';
        var from = show ? 'ui-icon-triangle-1-' + w : 'ui-icon-triangle-1-' + e;
        var to = show ? 'ui-icon-triangle-1-' + e : 'ui-icon-triangle-1-' + w;
        jQuery('span', this.elements.hideShow).removeClass(from).addClass(to);
        playerPos[position] = show ? displaySize : 0;
        if (player.elements.minplayer) {
          if (animate) {
            player.elements.minplayer.animate(playerPos, 'fast');
          }
          else {
            player.elements.minplayer.css(playerPos);
          }
        }
        displayPos[margin] = show ? 0 : -displaySize;
        if (animate) {
          this.display.animate(displayPos, 'fast', function() {
            player.resize();
          });
        }
        else {
          this.display.css(displayPos);
        }
      };

      // Bind when the playlist loads.
      this.ubind(this.uuid + ':playlistLoad', (function(playlist) {
        return function(event, data) {
          if (data.nodes.length === 1) {
            playlist.hideShow(false, true);
          }
          else {
            playlist.hideShow(true, true);
          }
        };
      })(this));

      // Perform the show hide functionality of the playlist.
      if (this.elements.hideShow) {
        this.elements.hideShow.bind('click', (function(playlist) {
          return function(event) {
            event.preventDefault();
            var button = jQuery('span', playlist.elements.hideShow);
            var e = playlist.options.vertical ? 'e' : 's';
            var w = playlist.options.vertical ? 'w' : 'n';
            var show = button.hasClass('ui-icon-triangle-1-' + w);
            playlist.hideShow(show, true);
          };
        })(this));
      }

      // If they wish to show the playlist.
      if (player.elements.minplayer) {
        if (this.options.showPlaylist) {

          // Set the player to have the correct margin if the playlist is present.
          if (this.options.vertical) {
            player.elements.minplayer.css('right', this.display.width() + 'px');
          }
          else {
            player.elements.minplayer.css('bottom', this.display.height() + 'px');
          }
        }
        else {

          // Hide the playlist.
          this.hideShow(false);
        }
      }
    });
  };

  /**
   * Return the display for this plugin.
   */
  osmplayer.playlist[template].prototype.getDisplay = function() {
    if (this.options.build) {
      this.context.append('\
      <div class="osmplayer-' + template + '-playlist">\
        <div class="osmplayer-' + template + '-hide-show-playlist ui-state-default">\
          <span class="ui-icon"></span>\
        </div>\
        <div class="minplayer-' + template + '-loader-wrapper">\
          <div class="minplayer-' + template + '-loader"></div>\
        </div>\
        <div class="osmplayer-' + template + '-playlist-scroll ui-widget-content">\
          <div class="osmplayer-' + template + '-playlist-list"></div>\
      </div>\
      </div>');
    }
    return jQuery('.osmplayer-' + template + '-playlist', this.context);
  };

  // Return the elements
  osmplayer.playlist[template].prototype.getElements = function() {
    var elements = osmplayer.playlist.prototype.getElements.call(this);

    // Setup the dynamic settings.
    var cName = this.options.vertical ? 'playlist-vertical' : 'playlist-horizontal';
    cName += this.options.playlistOnly ? ' playlist-only' : '';
    var show = this.options.showPlaylist;
    var icon = this.options.vertical ? (show ? 'e' : 'w') : (show ? 's' : 'n');
    var corner = this.options.vertical ? 'ui-corner-left' : 'ui-corner-top';

    // Remove the playlist if we need to.
    if (this.options.disablePlaylist || !this.options.playlist) {
      this.display.remove();
    }

    this.display.addClass(cName);
    var hideShow = jQuery('.osmplayer-' + template + '-hide-show-playlist', this.display);
    hideShow.addClass(corner);
    if (this.options.playlistOnly) {
      hideShow.hide();
      hideShow = null;
    }
    jQuery('span', hideShow).addClass('ui-icon-triangle-1-' + icon);

    return jQuery.extend(elements, {
      playlist_busy:jQuery('.minplayer-' + template + '-loader-wrapper', this.display),
      list:jQuery('.osmplayer-' + template + '-playlist-list', this.display),
      scroll:jQuery('.osmplayer-' + template + '-playlist-scroll', this.display),
      hideShow: hideShow
    });
  };
})('default', osmplayer);

;
(function(template, osmplayer) {

  /** The osmplayer namespace. */
  var osmplayer = osmplayer || {};

  // Define the teaser object.
  osmplayer.teaser = osmplayer.teaser || {};

  // constructor.
  osmplayer.teaser[template] = function(context, options) {

    // Derive from teaser
    osmplayer.teaser.call(this, context, options);
  };

  // Define the prototype for all controllers.
  osmplayer.teaser[template].prototype = new osmplayer.teaser();
  osmplayer.teaser[template].prototype.constructor = osmplayer.teaser[template];

  /**
   * @see minplayer.plugin#construct
   */
  osmplayer.teaser[template].prototype.construct = function() {

    minplayer.display.prototype.construct.call(this);

    // Add some hover events.
    this.display.bind('mouseenter', (function(info) {
      return function() {
        info.addClass('ui-state-hover');
      };
    })(this.elements.info)).bind('mouseleave', (function(info) {
      return function() {
        info.removeClass('ui-state-hover');
      };
    })(this.elements.info));
  };

  /**
   * Return the display for this plugin.
   */
  osmplayer.teaser[template].prototype.getDisplay = function() {

    // Append this to the list.
    this.context.append('\
    <div class="osmplayer-' + template + '-teaser ui-widget-content">\
      <div class="osmplayer-' + template + '-teaser-image"></div>\
      <div class="osmplayer-' + template + '-teaser-info ui-state-default">\
        <div class="osmplayer-' + template + '-teaser-title"></div>\
      </div>\
    </div>');

    var teasers = jQuery('.osmplayer-' + template + '-teaser', this.context);
    return teasers.eq(teasers.length - 1);
  }

  /**
   * Selects the teaser.
   */
  osmplayer.teaser[template].prototype.select = function(selected) {
    if (selected) {
      this.elements.info.addClass('ui-state-active');
    }
    else {
      this.elements.info.removeClass('ui-state-active');
    }
  }


  // Return the elements
  osmplayer.teaser[template].prototype.getElements = function() {
    var elements = osmplayer.teaser.prototype.getElements.call(this);
    return jQuery.extend(elements, {
      info: jQuery('.osmplayer-' + template + '-teaser-info', this.display),
      title:jQuery('.osmplayer-' + template + '-teaser-title', this.display),
      image:jQuery('.osmplayer-' + template + '-teaser-image', this.display)
    });
  };
})('default', osmplayer);

;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).removeClass('views-slideshow-controls-text-status-play');
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).addClass('views-slideshow-controls-text-status-pause');
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).removeClass('views-slideshow-controls-text-status-pause');
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).addClass('views-slideshow-controls-text-status-play');
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager != "undefined" && typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager != "undefined" && typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            };

            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            };

            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    };

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);;
/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($) {

Drupal.contextualLinks = Drupal.contextualLinks || {};

/**
 * Attaches outline behavior for regions associated with contextual links.
 */
Drupal.behaviors.contextualLinks = {
  attach: function (context) {
    $('div.contextual-links-wrapper', context).once('contextual-links', function () {
      var $wrapper = $(this);
      var $region = $wrapper.closest('.contextual-links-region');
      var $links = $wrapper.find('ul.contextual-links');
      var $trigger = $('<a class="contextual-links-trigger" href="#" />').text(Drupal.t('Configure')).click(
        function () {
          $links.stop(true, true).slideToggle(100);
          $wrapper.toggleClass('contextual-links-active');
          return false;
        }
      );
      // Attach hover behavior to trigger and ul.contextual-links.
      $trigger.add($links).hover(
        function () { $region.addClass('contextual-links-region-active'); },
        function () { $region.removeClass('contextual-links-region-active'); }
      );
      // Hide the contextual links when user clicks a link or rolls out of the .contextual-links-region.
      $region.bind('mouseleave click', Drupal.contextualLinks.mouseleave);
      $region.hover(
        function() { $trigger.addClass('contextual-links-trigger-active'); },
        function() { $trigger.removeClass('contextual-links-trigger-active'); }
      );
      // Prepend the trigger.
      $wrapper.prepend($trigger);
    });
  }
};

/**
 * Disables outline for the region contextual links are associated with.
 */
Drupal.contextualLinks.mouseleave = function () {
  $(this)
    .find('.contextual-links-active').removeClass('contextual-links-active')
    .find('ul.contextual-links').hide();
};

})(jQuery);
;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,m=_.height,g=_.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+_+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:b,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);;
(function (D) {
  var beforeSerialize = D.ajax.prototype.beforeSerialize;
  D.ajax.prototype.beforeSerialize = function (element, options) {
    beforeSerialize.call(this, element, options);
    options.data['ajax_page_state[jquery_version]'] = D.settings.ajaxPageState.jquery_version;
  }
})(Drupal);
;
