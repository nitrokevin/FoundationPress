$(function () { // wait for document ready
  	// init
		var controller = new ScrollMagic.Controller();
		
		
		
 // parallax header
  var slideParallaxScene = new ScrollMagic.Scene ({
    triggerElement: '.parallax',
    triggerHook: 1,
    offset: 0,
    duration: '130%'
  })
  .setTween(TweenMax.from('.bcg', 1, {y: '-40%',scale: 1.3, ease:Power0.easeNone}))
  .addTo(controller);

});