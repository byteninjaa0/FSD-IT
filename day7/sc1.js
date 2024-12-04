// counter =0;
// function stopwatch() {
//     console.log(counter);
//     counter=counter+1;
// }
// setInterval(stopwatch,1000);
setTimeout(function med1get(){
    console.log("medicine one received");
    setTimeout(function medicine2get(){
        console.log("medicine 2 recieved");

    },2000)
},1000)



  