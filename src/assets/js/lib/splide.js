import Splide from '@splidejs/splide';

// GALLERY SLIDER
if ($(".gallery-carousel").length) {
    var gallerysliders = document.querySelectorAll('.splide.gallery-carousel');
    for (var i = 0; i < gallerysliders.length; i++) {
        var galleryslider = new Splide(gallerysliders[i], {
    	type:'loop',
        autoplay: true,
		autoheight: true,
		rewind: true,
		arrows: true,
		speed: 1800,
		interval:3600,
    });
    galleryslider.mount()
  }
}

// SLIDE SLIDER
if ($(".slide-carousel").length) {
  var slidesliders = document.querySelectorAll('.splide.slide-carousel');
  for (var i = 0; i < slidesliders.length; i++) {
      var slideslider = new Splide(slidesliders[i], {
    type:'loop',
      autoplay: false,
  autoheight: true,
  rewind: true,
  arrows: true,

  });
  slideslider.mount()
}
}