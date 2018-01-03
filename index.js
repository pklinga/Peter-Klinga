function colorClock() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var month = month+1;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  var clockFace = hours + ':' + minutes + ':' + seconds;
  var dateFace = year + '.' + month + '.' + day + '.';
  
  document.getElementById('day').innerHTML = dateFace;
  document.getElementById('clock').innerHTML = clockFace;

  setTimeout(function () {
    colorClock();
  }, 1000);
}
colorClock();