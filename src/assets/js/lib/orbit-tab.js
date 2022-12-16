jQuery(document).on('change.zf.tabs', '[data-tabs]', function () {

var thisTabContent = $('[data-tabs-content="'+$(this).attr('id')+'"]');
    $('html, body').delay(100).animate({
      scrollTop: thisTabContent.children('.is-active').offset().top -200
    }, 350);

});


