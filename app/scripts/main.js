console.log('\'Allo \'Allo!');

$(() => {
  $(".element").typed({
    strings: ["Web developer ^1000 at the night", "Tester at the day"], 
    
  });

  $(".typed-sentences").typed({
    stringsElement: $('.typed-strings'),
    showCursor: false,
    typeSpeed: 100,
    callback: function(){
      $('.typed-sentences').hide();
      $('h4').fadeIn('slow');
    }
  });
});
