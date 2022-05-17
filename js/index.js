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
    const anchors = document.querySelectorAll('.buttonToBlock');
    for (let anchor of anchors) {
        anchor.addEventListener('click touchend', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    document.addEventListener('click', (e) => {
        const target = e.target;
        console.log(target)
    })
});