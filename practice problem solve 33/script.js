// Write a JavaScript program to convert a given number to hours and minutes.


function time (num){

  var hour = Math.floor(num / 60);  
  var hours = hour % 24
  var minutes = num % 60;
  return hours + ":" + minutes;
  


}

console.log(time(71));





 