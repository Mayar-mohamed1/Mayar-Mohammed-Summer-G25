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

$(document).ready(function(){
  $(".owl-carousel1").owlCarousel({
     items:5,
     margin:1,
     loop:true,
     nav:true,
     navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>']
  
 
   
     

  });
});



window.addEventListener("scroll", ()=>{
   var upArrow=document.getElementById("upArrow")
   if(document.documentElement.scrollTop>300)
      upArrow.classList.remove("d-none")

 
})

window.addEventListener("scroll",()=>{
     var navy=document.getElementById("navy")
   if(document.documentElement.scrollTop>800)
      navy.classList.add("sticky-top")
})


