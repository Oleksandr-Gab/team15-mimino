$('.responsive').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 6,
  centerMode: true,

    responsive: [
    {
        breakpoint: 1440,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 6,
        infinite: true,
        centerMode: true,
        dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        slidesToScroll: 6

        }
    },
    {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 6
        }
      }
      
    ]
  });

$('.single-item').slick({
  dots: false,
  prevArrow: '.res-slick-icons-prevArrow',
  nextArrow: '.res-slick-icons-nextArrow',
});