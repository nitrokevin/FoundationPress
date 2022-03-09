$('.home-carousel-fade').slick({
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed":6600,
    "dots": true,
    "fade":true,
    "arrows": false,
    asNavFor: '.home-carousel-slide',
});
$('.home-carousel-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.home-carousel-fade'
  });