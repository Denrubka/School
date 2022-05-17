$(document).ready(function() {
    $('.programs__slide').magnificPopup({
        type: 'iframe',
        // mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    if (document.documentElement.clientWidth <= 1170) {
        $('.programs__slider').slick({
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
        });
    }
});