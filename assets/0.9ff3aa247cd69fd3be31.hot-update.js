webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('.btn-hamburger').click(function () {
  $(this).addClass('active');
  $('.mobile-menu').addClass('active');
});
$('.btn-hamburger.active').click(function () {
  $('.mobile-menu').removeClass('active');
  $(this).addClass('active');
});
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
  swipeToSlide: true,
  responsive: [{
    breakpoint: 1023,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  }]
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

/***/ })
])