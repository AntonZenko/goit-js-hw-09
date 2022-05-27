const startBtn = document.querySelector('[data-start]');
startBtn.classList.add('start-btn');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.classList.add('stop-btn');

const bodyRef = document.querySelector('body');

let intervalId;
stopBtn.setAttribute('disabled', true);

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    // console.log('color', getRandomHexColor());
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled', true);
  }, 1000);
}

function onStopBtn() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}