$('.single-item').slick({
  dots: false,
  prevArrow: '.menu-slick-icons-prevArrow',
  nextArrow: '.menu-slick-icons-nextArrow',
});

$('.room-slider').slick({
  dots: false,
  prevArrow: ".arrow-prev",
  nextArrow: ".arrow-next",
  infininity: true,
  centerPadding:"80px",
  slidesToShow: 1,
  variableWidth: true,
  
  responsive:[
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding:"268px",
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1440,
      settings: {
        centerPadding:"236px",
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
