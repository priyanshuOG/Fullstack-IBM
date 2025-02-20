document.getElementById("parent").style.backgroundColor = "yellow"
document.getElementById("parent").style.border = "10px solid red"
let element= document.createElement("button")
element.innerText = "Click Me"
element.style.backgroundColor = "red"
element.style.padding = "10px"
document.getElementById("parent").append(element)
let num = 10
console.log(num)
num = 20
console.log(num)
const num2 = 3
console.log(num2)
function myfunction(num+num2){
    console.log(num)
}
myfunction();