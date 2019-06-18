var today = new Date();
 
  
function date(){
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  alert("Today is : " + daylist[day] + ".");
}

function time(){
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var  meridiem = (hour % 12 == 0)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;

  alert("Current Time : "+hour + meridiem  + " : " + minute + " : " + second);
}






// console.log

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  // another way

  var meridiem  = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
console.log("Today is : " + daylist[day] + ".");
console.log("Current Time : "+hour + meridiem  + " : " + minute + " : " + second);