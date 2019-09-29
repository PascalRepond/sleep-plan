const msg = document.querySelector('#msg');
const wakeup = document.querySelector('#wakeuptime');
const sleeptime = document.querySelector('#sleeptime');
// const timetofallasleep = ???

document.addEventListener("submit", zzz);

function zzz(wakeup, sleeptime) {
  const zz = wakeup.value - sleeptime.value;
  console.log(zz);
}