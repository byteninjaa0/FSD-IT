let a = () =>{
    console.log("arrow funtion")
}
let ba ={
    student:"sohail",
    rollno:"33",
}
let b = (a) =>{
    return a.student
}
let res=b(ba);
console.log(res);


function display()
{
   // let p1=document.querySelector('p')
    let p1=document.querySelectorAll("p");
    p1[0].innerHTML = "i am parra";
    p1[0].style.backgroundColor = "black";
}
let changeheader=()=>{
    let head1=document.querySelector("h1");
    
    head1.textContent ="change the title";
    let a1= document.querySelector("a");
    a1.innerHTML="google";
    a1.setAttribute("href","https://google.com");
}
let addiv=()=>{
    const newDiv = document.createElement('div');
    newDiv.textContent='this is a new div';
}