import Splide from '@splidejs/splide';

// GALLERY SLIDER
if ($(".gallery-carousel").length) {
    var gallerysliders = document.querySelectorAll('.splide.gallery-carousel');
    for (var i = 0; i < gallerysliders.length; i++) {
        var galleryslider = new Splide(gallerysliders[i], {
    	type:'fade',
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
        type: 'fade',
        perPage: 1,
        updateOnMove: true,
        pauseOnHover:false,
        autoHeight: true,
        speed: 3200,
         interval:4600,
      autoplay: true,
  rewind: true,
  arrows: false,

  });
  slideslider.mount()
}
}
// PEOPLE SLIDER

if ($(".people-carousel").length) {
  var peoplesliders = document.querySelectorAll('.splide.people-carousel');

for (var i = 0; i < peoplesliders.length; i++) {
var peopleslider = new Splide(peoplesliders[i], {
  type: 'loop',
  perPage: 3,
  autoHeight: true,
  padding: '0rem',
  focus: 'center',
  gap: '0rem',
  updateOnMove: true,
  breakpoints: {
  1200: {
    perPage: 2,
  focus: 'center',
  gap:'2rem',
  },
  1024: {
    perPage: 2,
  focus: 'center',
  gap:'2rem',
 
  },
  640: {
    perPage: 1,
    gap: '2rem',
    padding: '1rem',
  
    },

  
  
}

});

peopleslider.mount()
}

}
