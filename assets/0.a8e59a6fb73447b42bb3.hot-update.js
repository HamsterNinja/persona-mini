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
$(".sidebar-menu .menu-item-has-children>a").after('<div class="menu-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 160 160" class="plus"><path d="M70 0h20v160H70z" class="vertical-line"></path> <path d="M0 70h160v20H0z" class="horizontal-line"></path></svg></div>');
$('.menu-toggle').click(function () {
    $(this).parent().find('.sub-menu').slideToggle();
    $(this).toggleClass('active');
});

/***/ })
])