// $(window).scroll(function() {
//     parallax();
// });

// function parallax() {
//     var wScroll = $(window).scrollTop();

//     $('.parallax--bg').css('background-position', 
//     'center ' + (wScroll*0.55) + 'px')

//     $('.parallax--bg2').css('background-position', 
//     'center ' + (wScroll*0.55 - 650)*-1 + 'px')
// }

//Credit: Kevin Powell on Youtube
$(window).scroll(function(e) {
    parallax();
  })
  
  
  function parallax() {
    var w = window.innerWidth;
    pFactor = 0.4

    if (w< 1100) {
        pFactor = 0;
    }

    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();
  
    $('.parallax--bg').each(function() {
      var offset = $(this).offset().top;
      var distanceFromBottom = offset - scroll - screenHeight
            
      if (offset > screenHeight && offset) {
        $(this).css('background-position', 'center ' + (( distanceFromBottom ) * (pFactor)) +'px');
      } else {
        $(this).css('background-position', 'center ' + (( scroll ) * 0.5) + 'px');
      }
    })
  }