 
var swiper = new Swiper(".slide-content", {
     slidesPerView: 3,
     spaceBetween: 25,
     loop: true,
     centerSlide: 'true',
     fade: 'true',
     grabCursor: 'true',
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
     },
     autoplay: {
      delay: 3000,
    },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
 
     breakpoints:{
         0: {
             slidesPerView: 1,
         },
         520: {
             slidesPerView: 2,
         },
         950: {
             slidesPerView: 3,
         },
     },
   });
 
  var swiper = new Swiper('.js-testimonials-slider',{
    grabCursor: 'true',
    spaceBetween : 30,
    // direction: 'vertical',
    loop: true,
    pagination: {
         el: '.js-testimonials-pagination',
         clickable : true
       },
       autoplay: {
         delay: 4000,
       },
       breakpoints:{
         767:{
              slidesPerView: 2,
         }
       }
    })

    var swiper = new Swiper('.js-cards-slider',{
      // grabCursor: 'true',
      spaceBetween : 30,
      // direction: 'vertical',
      loop: true,
      
         autoplay: {
           delay: 3000,
         },
         breakpoints:{
           767:{
                slidesPerView: 1,
           }
         }
      })