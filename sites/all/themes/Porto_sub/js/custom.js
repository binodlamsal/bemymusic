jQuery(document).ready(function($){

      $(window).load(function() {
      

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         $('#bxslider_views_slideshow_main_music_album_features-page ul#views-slideshow-bxslider-images-1').bxSlider({
            minSlides: 2,
            maxSlides: 2, 
            slideWidth: 400,
            controls: false,
            pager: false,

          });

         $('#block-views-music-album-features-block-1 ul#views-slideshow-bxslider-images-2').bxSlider({
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 400,
            controls: false,
            pager: false,
          });

         $('#block-views-music-album-features-block-2 ul#views-slideshow-bxslider-images-3').bxSlider({
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 400,
            controls: false,
            pager: false,
          });
      }
      });
      
      $(window).load(function(){
            $(".pane-views-exp-merch-listing-page-page .form-item-title #edit-title").addClass('cus-exposed-search-icon');
            $(".pane-views-exp-merch-listing-page-page .form-item-title ").append('<span class = "cus-search-icon"></span>');
      });

      $(window).load(function() {
            $('#bxslider_views_slideshow_main_homepage_featured_new_album_-block #views-slideshow-bxslider-images-1').bxSlider({
                  auto: true,
                  speed: 500,
                  minSlides: 2,
                  moveSlides: 1,
                  maxSlides: 2,
                  slideWidth: 650,
                  pager: false,
                  controls: false,
                  easing: 'ease',
                  
            });
    
            $('#bxslider_views_slideshow_main_front_page_bottom_big_links-block #views-slideshow-bxslider-images-2').bxSlider({
                  auto: true,
                  speed: 500,
                  minSlides: 3,
                  moveSlides: 1,
                  maxSlides: 3,
                  slideWidth: 360,
                  pager: false,
                  controls: false,
                  easing: 'ease',
                  

                });
      });
});
