



var clock = document.getElementById('clock');
var Color = document.getElementById('color');

function Clock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  var ColorStr = '#' + hours + minutes + seconds;

  clock.textContent = clockStr;
//   Color.textContent = ColorStr;
  document.body.style.backgroundColor = ColorStr;
}

Clock();
setInterval(Clock, 1000);