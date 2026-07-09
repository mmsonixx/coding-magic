export function initGameRockPaperScissors() {
  const gameContainer = document.querySelector('#game-3');

  let userScore = 0;
  let computerScore = 0;

  const choices = ['Камінь', 'Ножиці', 'Папір'];

  gameContainer.innerHTML = `
    <section class="rockPaperScissors">
      <div class="container">
        <h2 class="rps__title">Камінь - ножиці - папір</h2>

        <div class="rps__container"> 
          <div class="rps__box">
            <ul class="rps__list">
              <li class="rps__item" data-choice="Камінь">
                <svg class="rps__icon">
                  <use href="#icon-stone"></use>
                </svg>
              </li>

              <li class="rps__item" data-choice="Ножиці">
                <svg class="rps__icon">
                  <use href="#icon-scissors"></use>
                </svg>
              </li>

              <li class="rps__item" data-choice="Папір">
                <svg class="rps__icon">
                  <use href="#icon-paper"></use>
                </svg>
              </li>
            </ul>

            <p class="rps__info">Варіант комп’ютера</p>
          </div>

          <div class="rps__wrapper">
            <p class="rps__text">Рахунок:</p>
            <ul class="rps__counters">
              <li><p id="computerScore">Комп’ютер - 0</p></li>
              <li><p id="userScore">Ви - 0</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

 
  const items = gameContainer.querySelectorAll('.rps__item');
  const info = gameContainer.querySelector('.rps__info');
  const computerText = gameContainer.querySelector('#computerScore');
  const userText = gameContainer.querySelector('#userScore');

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function getWinner(user, computer) {
    if (user === computer) return 'draw';

    if (
      (user === 'Камінь' && computer === 'Ножиці') ||
      (user === 'Ножиці' && computer === 'Папір') ||
      (user === 'Папір' && computer === 'Камінь')
    ) {
      return 'user';
    }

    return 'computer';
  }

  function updateScore() {
    computerText.textContent = `Комп’ютер - ${computerScore}`;
    userText.textContent = `Ви - ${userScore}`;
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const userChoice = item.dataset.choice;
      const computerChoice = getComputerChoice();

      const result = getWinner(userChoice, computerChoice);

      if (result === 'user') {
        userScore++;
        info.textContent = `${computerChoice}`;
      } else if (result === 'computer') {
        computerScore++;
        info.textContent = `${computerChoice}`;
      } else {
        info.textContent = `${computerChoice}`;
      }

      updateScore();
    });
  });
}
