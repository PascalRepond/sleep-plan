// INPUT
const wakeup = document.querySelector('#wakeup');
const sleeptime = document.querySelector('#sleeptime');
document.getElementById("sleepform").addEventListener("submit", submit);


// OUTPUT
const notifWarning = document.querySelector('.warning');
const notifDanger = document.querySelector('.danger');

const result = document.querySelector('#result'); //Result section

const zzz = document.querySelector("#zzz"); // HTML falling asleep at
const screens = document.querySelector("#screens"); // HTML time to turn off screens
const lights = document.querySelector("#lights"); // HTML time to turn off lights
const cycles = document.querySelector('#cycles'); // HTML number of cycles
const hoursofsleep = document.querySelector('#hoursofsleep'); // HTML hours of sleep

document.getElementById("sleeptime").addEventListener("change", function(){change(sleeptime.value)}, false);

function under10(x) {
  if(x<10) {
    x = `0${x}`;
    return x;
  } else {
    return x;
  };
}

function submit(e) {
  e.preventDefault();

  // GET INPUT VALUES
  let wakeupvalue = wakeup.value.split(":");
  let sleeptimevalue = sleeptime.value.split(":");

  // PRINT NUMBER OF CYCLES IN HTML
  cycles.innerHTML = sleeptimevalue[2];

  // PRINT HOURS OF SLEEP IN HTML
  hoursofsleep.innerHTML = `${sleeptimevalue[0]}:${sleeptimevalue[1]}`;

  // CALCULATE TIME YOU HAVE TO FALL ASLEEP AND PRINT
  let date = new Date(2, 1, 1970, wakeupvalue[0], wakeupvalue[1], 0);
  date.setHours(date.getHours() - sleeptimevalue[0]);
  date.setMinutes(date.getMinutes() - sleeptimevalue[1]);


  zzz.innerHTML = `${under10(date.getHours())}:${under10(date.getMinutes())}`;

  // CALCULATE TIME TO TURN OFF LIGHTS
  date.setMinutes(date.getMinutes() - 30);

  lights.innerHTML = `${under10(date.getHours())}:${under10(date.getMinutes())}`;

  // TIME TO TURN OFF SCREENS
  date.setMinutes(date.getMinutes() - 60);

  screens.innerHTML = `${under10(date.getHours())}:${under10(date.getMinutes())}`;

  // SHOW RESULTS
  result.style.display = "block";
};

// Warning sleeptime
function change(selBox) {
  if (selBox === "06:00:4") {
    notifDanger.style.display = "none";
    notifWarning.style.display = "block";
  } else if (selBox === "03:00:2" || selBox === "04:30:3") {
    notifWarning.style.display = "none";
    notifDanger.style.display = "block";
  } else {
    notifDanger.style.display = "none";
    notifWarning.style.display = "none";
  }
};



// Close button result message
document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.message .delete') || []).forEach(($delete) => {
    $message = $delete.parentNode;
    $delete.addEventListener('click', () => {
      $message.parentNode.style.display = "none";
    });
  });
});