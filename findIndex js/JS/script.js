

/*---task1--*/
alert(`Hello! this is Check Element program(task1 session 13)`)

var arr=["English","Math"]
var z=prompt(`Enter course`)
var idx=arr.findIndex( (ele,i)=>{
    return z == ele
})

if(idx==-1){
    console.log(`Not Found`)
    arr.push(z)
}
else{
    console.log(`Found`)
}


/*--task2---*/
alert(`Hello! this is FindIndex Program (task2 session 13)`)
var arr2=[
  {
    Fname:"Mayar",
    Lname:"Mohamed",
    Age:19
  }
  ,
  {
    Fname:"M",
    Lname:"hh",
    Age:25
  }
  ,
  {
    Fname:"ali",
    Lname:"rr",
    Age:30
  }
  


]



var d=arr2.findIndex((ele)=>(ele.Age==25))

console.log(d)

/*---task3 Bank System---*/
alert("Hello! This is Bank system(Task 3 session13)! press ok to Start...") 

var userNumbers=prompt(`Enter the numbers of users`)
 var userInfo=function(z){
    return{
         fname:prompt(`Enter Name of user: `+(z+1)),
        id:prompt(`Enter ID of user: `+(z+1)),
        balance:prompt(`Enter Balance of user: `+(z+1))
    }
 }
 var users=[]
 for(var i=0;i<userNumbers;i++){
    users[i]=userInfo(i)
 }
 console.log(users)

var editUserBalanceById=function(){
    var idd=prompt(`Enter id of user to add new balance`)
    var newBalance=prompt(`Enter new Balance`)
    var idxx=users.findIndex((ele)=>idd==ele.id)
    users[idxx].balance=newBalance  
 }

 editUserBalanceById()

 console.log(users)

var deleteUserById=function(){
    var idd2=prompt(`Enter id of user to remove`)
    var idxx2=users.findIndex((ele)=>idd2==ele.id)
    users.splice(idxx2,1)

}

deleteUserById()

console.log(users)
 


