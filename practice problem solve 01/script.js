var  today = new Date();


function date(){
  var day = today.getDay()
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
  alert("Today is : " + daylist[day] + ".");
  }


function time(){

var hour = today.getHours();
hour =(hour >= 12)?hour -12: hour;
var amPm =(hour == 0)?"pm":"am";
var minute = today.getMinutes();
var second = today.getSeconds();
alert("Current Time : "+hour + " " + amPm +  " : " + minute + " : " + second);
}