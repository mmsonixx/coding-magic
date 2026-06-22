import { games } from '../data/games';

const dropdownButton = document.querySelector('.dropdown__button');
const dropdownMenu = document.querySelector('.dropdown');
const themeToggle = document.querySelector('.theme-toggle__input');

dropdownButton.onclick = function () {
  dropdownMenu.classList.toggle('is-open');
};

const themToggle = document.querySelector('.theme-toggle__input');

themeToggle.addEventListener('change', e => {
  if (e.target.checked) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
  }
});

const myInput = document.querySelector('.MD-logIn-input1');
const userGreeting = document.getElementById('userGreeting');

let savedName = 'Гість';

userGreeting.textContent = 'Вітаємо, ' + savedName + '!';
myInput.value = '';

myInput.addEventListener('input', function () {
  let currentName = myInput.value;

  if (currentName == '') {
    currentName = 'Гість';
  }

  userGreeting.textContent = 'Вітаємо, ' + currentName + '!';
  localStorage.setItem('userName', currentName);
});

const container = document.querySelector('#game-5');

const renderGames = (markup, container) => {
  if (!container) {
    console.log('Упс! Немає такого контейнера');
    return;
  }
  container.innerHTML = markup;
};

const createHtml = obj => {
  return `
  <div class="container">
   <div class="calculator-container">
      <h2 class="calcylation_title">Калькулятор часу</h2>

      <div class="calc-row">
        <div class="search-box">
          <input
            type="number"
            id="secondsInput"
            placeholder="Введіть число"
            min="0"
          />
          <button id="calcBtn" type="button">
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>

        <div class="divder"></div>

        <div class="result" id="timeResult">
          0 дн. 00:00:00
        </div>
      </div>
    </div></div>
   
  `;
};

renderGames(createHtml(games), container);

const calcBtn = document.getElementById('calcBtn');
const secondsInput = document.getElementById('secondsInput');

if (calcBtn && secondsInput) {
  calcBtn.onclick = function () {
    calculateTime();
  };

  secondsInput.onkeypress = function (event) {
    if (event.key == 'Enter') {
      calculateTime();
    }
  };
}

function calculateTime() {
  const totalSeconds = parseInt(secondsInput.value, 10);

  if (isNaN(totalSeconds) || totalSeconds < 0) {
    document.getElementById('timeResult').textContent = '0 дн. 00:00:00';
    return;
  }

  let days = Math.floor(totalSeconds / 86400);
  let remainder = totalSeconds % 86400;

  let hours = Math.floor(remainder / 3600);
  remainder = remainder % 3600;

  let minutes = Math.floor(remainder / 60);
  let seconds = remainder % 60;

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
