function promiseBody(resolve){
    setTimeout(resolve,5000);
}
function medicine1Get(){
    var answer=new Promise(promiseBody)
    return answer;
}
function printthing(){
    console.log("hi there");
}
var medicine=medicine1Get();
medicine.then(printthing)
