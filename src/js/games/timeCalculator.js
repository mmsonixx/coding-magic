const timeryears = document.querySelector('.timer-years');
const timermonths = document.querySelector('.timer-mounts');
const timerdays = document.querySelector('.timer-days');
const timerminutes = document.querySelector('.timer-minutes');
const timerseconds = document.querySelector('.timer-seconds');
const timeCalculatorinput = document.querySelector('.timeCalculator-input');
const timeCalculatortimer = document.querySelector('.timeCalculator-timer');

// ось тут — після querySelector
timeCalculatorinput.addEventListener('input', () => {
  const totalSeconds = Number(timeCalculatorinput.value);

  const years = Math.floor(totalSeconds / 31536000);
  const months = Math.floor((totalSeconds % 31536000) / 2592000);
  const days = Math.floor((totalSeconds % 2592000) / 86400);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeryears.textContent = years + 'р.';
  timermonths.textContent = months + 'міс.';
  timerdays.textContent = days + 'дн.';
  timerminutes.textContent = minutes + 'хв.';
  timerseconds.textContent = seconds + 'с.';
});
