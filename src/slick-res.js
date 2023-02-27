$('.responsive').slick({
  dots: true,
  arrows: false,
 
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 6,
    centerMode: true,
    centerPadding: '95px',
    autoPlay: true,
    responsive: [
    {
        breakpoint: 1440,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 6,
        infinite: true,
        dots: true
        
        }
    },
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 6
        }
    },
    {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 6
        }
      }
      
    ]
});
  
