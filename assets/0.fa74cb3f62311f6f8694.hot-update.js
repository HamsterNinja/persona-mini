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
$(".mobile-menu .menu-item-has-children>a").after('<div class="menu-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 200 200"><path d="M193.177 46.233l8.28 8.28-100.723 100.728L0 54.495l8.28-8.279 92.46 92.46 92.437-92.443z" fill="#ffffff"/></svg></div>');
$('.menu-toggle').click(function () {
    $(this).parent().find('.sub-menu').slideToggle();
    $(this).toggleClass('active');
});

/***/ })
])