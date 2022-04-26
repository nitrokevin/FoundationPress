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
