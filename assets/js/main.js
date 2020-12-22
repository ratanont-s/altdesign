var scroll = new SmoothScroll('[data-scroll]',{
  header: '.navbar'
});


$(function () {
  'use strict'
  
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });
  var winWidth = screen.width;
  if (winWidth < 992){
    $('.navbar-nav .nav-link').on('click', function(){
      $('.offcanvas-collapse').toggleClass('open')
    });
  }
});