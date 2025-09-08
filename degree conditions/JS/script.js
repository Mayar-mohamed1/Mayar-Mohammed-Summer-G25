

//console.log()

var degree=prompt(`Enter yor Degree`)
if(degree==null||degree=="")
    console.log(`please Enter your degree`)
else{
    if(degree>100)
        console.log(`degree should be in the range (0:100)`)
    else if(degree>=90)
        console.log('A')
    else if(degree>=80)
        console.log('B')
    else if(degree>=70)
        console.log('C')
    else if(degree<70&&degree>=0)
        console.log('F')
    else
        console.log(`please enter your degree correctly!`)
}
    

