webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.main-slick').slick({
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    swipeToSlide: true
});
$('.products-slick').slick({
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    swipeToSlide: true
});

$('.quick-slick-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.quick-slick-nav'
});
$('.quick-slick-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.quick-slick-for',
    centerMode: true,
    focusOnSelect: true
});
$('.gallery-slick-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-slick-nav'
});
$('.gallery-slick-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery-slick-for',
    vertical: true,
    focusOnSelect: true,
    infinite: false
});
$('.buy-with-slick').slick({
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    swipeToSlide: true
});
$(".sidebar-menu .menu-item-has-children>a").after('<div class="menu-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 160 160"><path d="M70 0h20v160H70z" class="vertical-line"></path> <path d="M0 70h160v20H0z" class="horizontal-line"></path></svg></div>');
$('.menu-toggle').click(function () {
    $(this).parent().find('.sub-menu').first().slideToggle();
    $(this).find('svg').toggleClass('minus');
});

function showModal(modalName) {
    $('.overlay').fadeIn(500, function () {
        var ModalLeft = ($(window).width() - $(modalName).outerWidth()) / 2;
        var ModalTop = (window.innerHeight - $(modalName).outerHeight()) / 2;
        $(modalName).removeAttr('css');
        if (ModalTop <= 50) {
            ModalTop = 20;
        }
        setTimeout(function () {
            $(modalName).css('display', 'block').animate({
                opacity: 1,
                left: ModalLeft + 'px',
                top: ModalTop + 'px'
            }, 300);
        }, 50);
    });
}

$('.js_alModalClose, .overlay').click(function () {
    $('.alModal').animate({
        opacity: 0
    }, 200, function () {
        $(this).css({
            'display': 'none',
            'top': '100%',
            'left': '50%'
        });
        $('.overlay').fadeOut(400);
    });
});

/***/ })
])