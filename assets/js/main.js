var scroll = new SmoothScroll('[data-scroll]');
var winWidth = screen.width;

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });
  if (winWidth < 992){
    $('.navbar-nav .nav-link').on('click', function(){
      $('.offcanvas-collapse').toggleClass('open')
    });
  }
});