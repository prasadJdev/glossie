$('document').ready(function() {
  $('.hamburger').click(function() {
    $('.hamburger').toggleClass('open')
  });
});


/* Owl-carousel */
$('.slider-one').not('.slick-initialized').slick({
  autoplay: true,
  autoplaySpeed: 6000,
  dots: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  prevArrow: '.site-slider .slider-btn .prev',
  nextArrow: '.site-slider .slider-btn .next'
});

$('.slider-two').not('.slick-initialized').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  fade: false,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
      },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
      },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$('.slider-three').not('.slick-initialized').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: false,
  fade: false,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false
});