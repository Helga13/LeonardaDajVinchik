$(document).ready(function () {
  
  'use strict'
  
  // sliders
  $('.main_slider').slick({
    dots: true,
    arrows: true,
//    infinite: true,
//    autoplay: true,
    autoplaySpeed: 4000    
  });
  
  // tabs
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active');
      });
    });
  });
  
  // blur filter
  
  
  
  
});