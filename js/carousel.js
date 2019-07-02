$(document).ready(function(){
  $(".SlickCarousel1").slick({
    dots:true,
    // dotsClass: 'slick-dots',
    infinite: true,
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:3000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:1, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:false,
    appendArrows:$(".Container1 .Head1 .Arrows1"), // Class For Arrows Buttons
    prevArrow:'<span class="Slick-Prev"></span>',
    nextArrow:'<span class="Slick-Next"></span>',
    easing:"linear",
    responsive:[
      {breakpoint:979,settings:{
        slidesToShow:1,
      }},
      {breakpoint:753,settings:{
        slidesToShow:1,
      }},
      {breakpoint:528,settings:{
        slidesToShow:1,
      }},
    ],
  })  
  
})