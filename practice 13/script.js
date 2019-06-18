



var clock = document.getElementById('clock');
var Color = document.getElementById('color');

function Clock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  var millisecond = time.getMilliseconds();

  var  meridiem = (hours % 12 == 0)? " PM ":" AM ";
  hours = (hours >= 12)? hours - 12: hours;


  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds +' : ' + meridiem;
  var ColorStr = '#' + hours + minutes + seconds;

  clock.textContent = clockStr;
//   Color.textContent = ColorStr;
  document.body.style.backgroundColor = ColorStr;
}

Clock();
setInterval(Clock, 1000);



// var  meridiem = (hour % 12 == 0)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;