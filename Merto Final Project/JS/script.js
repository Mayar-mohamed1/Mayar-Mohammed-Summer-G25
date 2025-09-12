const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function(){
  $(".owl-carousel2").owlCarousel({
     items:5,
     margin:1,
     loop:true,
  
 
     autoplay:true,
     

  });
});


/*    
navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
   nav:true,
*/

