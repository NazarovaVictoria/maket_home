"use strict";

$(document).ready(function () {
  //  $('.slider-image').slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //  });
  $('.slider-image').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 600,
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
    }] // appendArrows: $('.arrows-container')

  }); // });
  // $(document).ready(function () {

  $('.slider-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrow: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }] // appendArrows: $('.arrows-container')

  });
});