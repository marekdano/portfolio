
$(() => {
  // $(".element").typed({
  //   strings: ["Web developer ^1000 at the night", "Tester at the day"], 
    
  // });

  $(".typed-sentences").typed({
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
