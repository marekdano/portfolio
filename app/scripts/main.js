/*globals $:false */
'use strict';

$(function() {
  $('.typed-sentences').typed({
    stringsElement: $('.typed-strings'),
    showCursor: true,
    typeSpeed: 100,
    callback: function(){
      $('.typed-sentences').hide();
      $('.typed-cursor').hide();
      $('p.title').fadeIn(1500);
    }
  });
});
