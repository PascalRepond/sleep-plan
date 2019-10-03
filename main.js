const msg = document.querySelector('#msg');
const wakeup = document.querySelector('#wakeup');
const sleeptime = document.querySelector('#sleeptime');
// const timetofallasleep = ???


console.log(wakeup.value);
console.log(sleeptime.value);

function diff(start, end) {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0,0,0, start[0], start[1], 0);
  var endDate = new Date(0,0,0, start[0], start[1], 0);
}