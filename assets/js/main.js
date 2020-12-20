$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })

     // Add smooth scrolling to all links
  // $("a").on('click', function(event) {
  //   if (this.hash !== "") {
  //     event.preventDefault();
  //     var hash = this.hash;
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){
  //       window.location.hash = hash;
  //     });
  //   }
  // });
});