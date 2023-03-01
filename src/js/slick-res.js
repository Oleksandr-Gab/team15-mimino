$('.single-items').slick({
  dots: false,
  prevArrow: '.menu-slick-icons-prevArrows',
  nextArrow: '.menu-slick-icons-nextArrows',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
        breakpoint: 1440,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows:true
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




$('.responsive').slick({
    dots: false,
    infinite: true,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: '0',
    responsive: [
    {
        breakpoint: 1440,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows:true
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