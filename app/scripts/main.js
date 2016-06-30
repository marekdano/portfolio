/*globals $:false */
'use strict';

$(function() {
  $('#typed-sentences').typed({
    strings: ["Web developer by night.", "Tester by day."],
    showCursor: true,
    typeSpeed: 100,
    callback: function(){
      $('#typed-sentences').hide();
      $('.typed-cursor').hide();
      $('h4.title').fadeIn(1500);
    }
  });
});
