const startBtn = document.querySelector('[data-start]');
startBtn.classList.add('start-btn');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.classList.add('stop-btn');
const bodyRef = document.querySelector('body');

const hover = document.querySelector('.start-btn:hover');
console.log(hover);

let intervalId = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopBtn() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
