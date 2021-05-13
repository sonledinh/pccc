if($(window).innerWidth() >= 768){
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('.header-menu').addClass('fixed-menu');
         }
         else {
             $('.header-menu').removeClass('fixed-menu');
         }
    });
}

 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
});  
 
$('.slide-srv').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: false,
            }
        }
    ],
});   
 
$('.slide-prj').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1.25,
                slidesToScroll: 1,
                infinite: false,
            }
        }
    ],
});  

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true 
  });
}); 