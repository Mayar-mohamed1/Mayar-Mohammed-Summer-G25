const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

if(document.querySelector(".owl-carousel2")){
$(document).ready(function(){
  $(".owl-carousel2").owlCarousel({
     items:5,
     margin:1,
     loop:true,
  
 
     autoplay:true,
     

  });
});
}


if(document.querySelectorAll(".owl-carousel1")){
$(document).ready(function(){
  $(".owl-carousel1").owlCarousel({
     items:5,
     margin:1,
     loop:true,
     nav:true,
     navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>']
  
 
   
     

  });
});
}




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


/*-------validation---------*/

if(document.getElementById("contactForm")){

   var contactForm=document.getElementById("contactForm")
   contactForm.addEventListener("input",(e)=>{
      console.log(e.target)
      /*------input validation---------*/
      if(e.target.id=="contactName")
         {
            nameValidation(e.target)
         }
      else if(e.target.id=="contactEmail")
         {
            emailValidation(e.target)
         }  
      else if(e.target.id=="contactSubject")
         {
            subjectValidation(e.target)
         }    


   })
   var nameIsValid=false
   var emailIsValid=false
   var subjectIsValid=false

   nameValidation=(ele)=>{
         var nameValue=ele.value.trim()
          if(nameValue.length==0)
           handleError(ele,"The field is required.")
          else if(nameValue.length<3)
           handleError(ele,"Please Enter At Least 3 Characters.")
         else{
            handleError(ele)
            nameIsValid=true
             }
   }
   emailValidation=(ele)=>{
         var emailValue=ele.value.trim()
         var reg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if(emailValue==0)
          handleError(ele,"The field is required.")
         else if(reg.test(emailValue)){
          handleError(ele)
          emailIsValid=true
         }
         else
          handleError(ele,"The e-mail address entered is invalid.")
   }
   subjectValidation=(ele)=>{
         var subjectValue=ele.value.trim()
         if(subjectValue.length==0)
           handleError(ele,"The field is required.")
         else{
            handleError(ele)
            subjectIsValid=true
            }

   }

   handleError=(input,message="")=>{
      var p=input.nextElementSibling
      p.innerText=message
   }

   /*-------submit validation------*/
   contactForm.addEventListener("submit",(e)=>{
      e.preventDefault()
      if(emailIsValid&&nameIsValid&&subjectIsValid){
         contactForm.submit();
         showSuccess();
         
      }
      else
         showError()



   })

   showError=()=>{
      var errorMessage=document.getElementById("errorMessage")
      errorMessage.classList.remove("d-none")
      errorMessage.innerText="One or more fields have an error. Please check and try again."
   }

   showSuccess=()=>{
      var errorMessage=document.getElementById("errorMessage")
      errorMessage.innerText="Thank you for your message. It has been sent."
   }

}
