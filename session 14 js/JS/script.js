
/*task1*/

changeImg=function(){
    var z=document.querySelector("#imm")

    console.log(z.src)

    if(z.src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsAn_T3aA0ZWjVoysDInUL7Aj0n3TZUamsQ&s")
        z.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOX4rp1Vhhd6eadCzv9DzJj_rWGatH3S_Og&s"
    else{
        z.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsAn_T3aA0ZWjVoysDInUL7Aj0n3TZUamsQ&s"
    }
}


/*task2*/
/*
    var userForm=document.getElementById("formm")
    var users=[]
    userForm.addEventListener("submit",(e)=>{
      
        e.preventDefault()
        console.log(e)
        console.log(e.target)
        var user={
            fname:e.target.elements.mynamee.value,
            email:e.target.elements.myemail.value
        }
        users.push(user)
        console.log(users)
    })

*/    

/*task3*/
    var userForm=document.getElementById("formm")
    var users=[]
    userForm.addEventListener("submit",(e)=>{
      
        e.preventDefault()
        console.log(e)
        console.log(e.target)
        var user={
            fname:e.target.elements.mynamee.value,
            email:e.target.elements.myemail.value
        }
        users.push(user)
        console.log(users)
        displayUser()

        

        

    })


    displayUser=()=>{
        var tBody=document.getElementById("tablebody")
        console.log(tBody)
        tBody.innerText=""
        users.forEach((ele,i)=>{
            var row=document.createElement('tr')
            var col1=document.createElement('td')
            var col2=document.createElement('td')
            var col3=document.createElement('td')
            
            var editUserBtn=document.createElement('button')
            var removeUserBtn=document.createElement('button')
            var addUserBtn=document.createElement('button')

            editUserBtn.innerText="Edit User"
            removeUserBtn.innerText="remove User"
            addUserBtn.innerText="Add User"

            addUserBtn.classList.add("p-2","mx-2","btn-primary","btn","addc")
            removeUserBtn.classList.add("p-2","mx-2","btn-danger","btn","removec")
            editUserBtn.classList.add("p-2","mx-2","btn-dark","btn","editc")
            
            col1.innerText=ele.fname
            col2.innerText=ele.email

            col3.append(addUserBtn)
            col3.append(removeUserBtn)
            col3.append(editUserBtn)
            
            row.append(col1)
            row.append(col2)
            row.append(col3)

            tBody.append(row)

            removeUserBtn.addEventListener("click",(e)=>{
           /* var td=e.target.parentNode
            var tr=td.parentNode
            td.innerText=""
            tr.innerText=""*/
            users.splice(i,1)
            displayUser()


            })

            addUserBtn.addEventListener("click",(e)=>{
                var nameForm=document.getElementById("mynamee")
                var emailForm=document.getElementById("myemail")
                console.log(nameForm)
                console.log(emailForm)
             var user={
               fname:nameForm.value,
               email:emailForm.value
              }
             users.push(user)
             console.log(users)
             displayUser()
            })
            
            editUserBtn.addEventListener("click",(e)=>{
                var nameForm=document.getElementById("mynamee")
                var emailForm=document.getElementById("myemail")
                console.log(nameForm)
                console.log(emailForm)
                if(nameForm.value!="")
                    users[i].fname=nameForm.value
                if(emailForm.value!="")
                    users[i].email=emailForm.value
             
               console.log(users)
               displayUser()

            })


            
 
        })

        
    }
    
  


         
  



  

    


