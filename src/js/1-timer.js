import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const inputDate = document.querySelector('input[type="text"]');
const btnStart = document.querySelector('button[data-start]');
const daysValue = document.querySelector('.value[data-days]');
const hoursValue = document.querySelector('.value[data-hours]');
const minutesValue = document.querySelector('.value[data-minutes]');
const secondsValue = document.querySelector('.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    console.log(selectedDates[0]);

    if (selectedDate.getTime() < currentDate.getTime()) {
      window.alert('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      userSelectedDate = selectedDate;
    }
  },
};

flatpickr(inputDate, options);

// function addLeadingZero(value) {
//   return value < 10 ? '0' + value : value;
// }

btnStart.addEventListener('click', start);

function start() {
  const selectedDate = new Date(inputDate.value).getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = selectedDate - currentDate;

  if (timeRemaining <= 0) {
    window.alert('Please choose a date in the future');
    return;
  }

  btnStart.disabled = true;
  countdownInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);

    timeRemaining -= 1000;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      iziToast.success({
        title: 'Countdown Finished',
        message: 'The countdown timer has ended',
        position: 'topRight',
      });
    }
  }, 1000);
}

// let isActive = false;
// let intervalId = null;

// init();

// function start() {
//   if (isActive) {
//     return;
//   }

//   isActive = true;
//   const startTime = Date.now();

//   intervalId = setInterval(() => {
//     const currentTime = Date.now();
//     const delatTime = currentTime - startTime;
//     const time = getTime(delatTime);

//     updateClockface(time);
//   }, 1000);
// }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
