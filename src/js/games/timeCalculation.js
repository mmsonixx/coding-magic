const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown');
const themeToggle = document.querySelector('.theme-toggle__input');

dropdownButton.onclick = function () {
  dropdownMenu.classList.toggle('is-open');
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme == 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.checked = true;
}

themeToggle.onchange = function () {
  if (themeToggle.checked == true) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
};

const userGreeting = document.getElementById('userGreeting');
let userName = localStorage.getItem('userName');

if (userName) {
  userName = prompt('Будь ласка, введіть свій нікнейм:');
  if (userName == null || userName == '') {
    userName = 'Гість';
  }
  localStorage.setItem('userName', userName);
}
userGreeting.textContent = 'Вітаємо, ' + userName + '!';

const calcBtn = document.getElementById('calcBtn');
const secondsInput = document.getElementById('secondsInput');

calcBtn.onclick = function () {
  calculateTime();
};

secondsInput.onkeypress = function (event) {
  if (event.key == 'Enter') {
    calculateTime();
  }
};

function calculateTime() {
  const totalSeconds = parseInt(secondsInput.value);

  if (isNaN(totalSeconds) || totalSeconds < 0) {
    document.getElementById('timeResult').textContent = '0 дн. 00:00:00';
    return;
  }

  const days = Math.floor(totalSeconds / 86400);
  const remainder = totalSeconds % 86400;

  const hours = Math.floor(remainder / 3600);
  remainder = remainder % 3600;

  const minutes = Math.floor(remainder / 60);
  const seconds = remainder % 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  document.getElementById('timeResult').textContent =
    days + ' дн. ' + hours + ':' + minutes + ':' + seconds;
}
