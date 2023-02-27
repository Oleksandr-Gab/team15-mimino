$('.responsive').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: '0',
    responsive: [
    {
        breakpoint: 1200,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    },
    {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      
    ]
  });