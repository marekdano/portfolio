/*globals $:false */
'use strict';

$(function() {
  $('#typed-sentences').typed({
    strings: ["Web developer at the night.", "Tester at the day."],
    showCursor: true,
    typeSpeed: 100,
    callback: function(){
      $('#typed-sentences').hide();
      $('.typed-cursor').hide();
      $('h4.title').fadeIn(1500);
    }
  });
});
