let hours = 0;
let minutes = 0;
let seconds = 0;
let milisecond = 0;

const hour = document.getElementById("hr");
const ms = document.getElementById("ms");
const m = document.getElementById("m");
const s = document.getElementById("s");
let timer = false;
function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milisecond = 0;
  hr.innerHTML = hours;
  m.innerText = minutes;
  s.innerText = seconds;
  ms.innerText = milisecond;
}
function stopwatch() {
  if (timer == true) {
    milisecond += 1;
    if (milisecond == 100) {
      milisecond = 0;
      seconds += 1;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes == 60) {
      minutes = 0;
      hours += 1;
    }
  }
  let hrString=hours;
  let mString=minutes;
  let secondString=seconds
  let msString=milisecond
  if(hours < 10){
      hrString="0"+ hours
  }
  if(minutes < 10){
    mString="0"+ minutes
}
if(seconds < 10){
    secondString="0"+seconds
}
if(milisecond < 10){
    msString="0"+ milisecond
}
hr.innerHTML = hrString;
m.innerText = mString;
s.innerText = secondString;
ms.innerText = msString;
  setTimeout(stopwatch, 10);
}
