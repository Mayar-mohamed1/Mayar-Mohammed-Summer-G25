var arr=["English","Math"]

var course=prompt(`Enter the Course`)
if(arr.includes(course))
    console.log("Found")
else{
    console.log(`Not Found`)
    arr.push(course)
    }

console.log(arr)