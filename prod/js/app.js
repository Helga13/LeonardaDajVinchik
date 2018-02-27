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
  
  $('.sertificate_slider').slick({
    arrows: true, 
    slidesToShow: 4,
    slidesToScroll: 4
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
  
  // lightbox
  var lightbox = $('.sertificate_slider .item_inner').simpleLightbox({
    showCounter: false
  });
  
  // popup
  $('.js-popup').click(function (e) {
    e.preventDefault();
    $('#feedback_form').fadeIn(300);
    $('body').css('overflow', 'hidden');
  });
  $('.popup_overlay').click(function (e) {
    $(this).fadeOut(100);
    $('body').css('overflow', 'auto');
  });
  $('.popup_close').click(function (e) {
    e.preventDefault();
    $(this).parents('.popup_overlay').fadeOut(100);
    $('body').css('overflow', 'auto');
  });
  $('.popup_content').click(function (e) {
    e.stopPropagation();
  });
  
});