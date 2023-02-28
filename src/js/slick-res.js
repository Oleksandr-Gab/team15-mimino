$('.responsive').slick({
    dots: true,
    infinite: true,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    
    
    responsive: [
    {
        breakpoint: 1440,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 767,
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
  
  $('.hotel-hero-slider').slick({
    dots: true,
    infinite: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
          breakpoint: 1440,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
          }
      },
      {
          breakpoint: 767,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          }
      },
      {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
  });