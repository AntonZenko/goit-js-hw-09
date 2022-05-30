import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let deltaTime = null;
let intervalId = null;
let toStart = false;
let TIMER_INRERVAL = 1000;
const atTimeIsOverMessage = `<p>Time is up!</p>`;

const refs = {
  dateInputRef: document.querySelector('#datetime-picker'),
  timerRef: document.querySelector('.timer'),
  daysRef: document.querySelector('[data-days]'),
  hoursRef: document.querySelector('[data-hours]'),
  minutesRef: document.querySelector('[data-minutes]'),
  secondsRef: document.querySelector('[data-seconds]'),
  startBtnRef: document.querySelector('[data-start]'),
};

startBtnSwitch(!toStart);

refs.startBtnRef.addEventListener('click', onStartBtnClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deltaTime = selectedDates[0] - options.defaultDate;
    if (deltaTime < 0) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    Notify.success('Timer set and ready to go!');
    startBtnSwitch(toStart);
  },
};

flatpickr(refs.dateInputRef, options);

function onStartBtnClick() {
  startBtnSwitch(!toStart);
  inputSwitch(!toStart);
  renderTimerTime();

  intervalId = setInterval(resetTimer, TIMER_INRERVAL);
}

function renderTimerTime() {
  const { days, hours, minutes, seconds } = convertMs(deltaTime);
  refs.daysRef.textContent = addLeadingZero(days);
  refs.hoursRef.textContent = addLeadingZero(hours);
  refs.minutesRef.textContent = addLeadingZero(minutes);
  refs.secondsRef.textContent = addLeadingZero(seconds);
}

function resetTimer() {
  if (deltaTime < TIMER_INRERVAL) {
    refs.timerRef.insertAdjacentHTML('beforeend', atTimeIsOverMessage);
    clearInterval(intervalId);
    return;
  }

  deltaTime -= TIMER_INRERVAL;
  renderTimerTime();
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startBtnSwitch(value) {
  refs.startBtnRef.disabled = value;
}

function inputSwitch(value) {
  refs.dateInputRef.disabled = value;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
