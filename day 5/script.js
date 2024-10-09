//"use strict"  if this is uncommented then compiler follows the rule strictly means you can assign a value to a variable without the use of let or var
a=12;
let d=[1,2,4]
let e="sohail"
let c=22/3;
let h={
    name:"sohail",
    id:12,
}
// let fd="12"*"3"   //automatically typecasted to number 
// let bol=true;
// let str=String(bol);  // a boolean type is converted to string and operation of the string is also performed
// let str2="12abs";
// let num2=Number(str2);


 
function display()
{
    let a = prompt("are you sure","sohail");
   alert(a)

}
// console.log(str.charAt(1))
// console.log(num2)
// console.log(typeof(e))
// console.log(typeof(c))
// console.log(fd)
function validate(){
    let user=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1 = document.getElementById("result");
    if(user=="admin" && pass=="admin")
    {
        p1.style.color="red";
        console.log(p1.innerText);
    }
    else
    {
        p1.i="failed";  
    }
}