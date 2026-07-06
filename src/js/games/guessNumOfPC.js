export function initGuessNumberGame() {
  const gameContainer = document.querySelector('#game-2'); 

  if (!gameContainer) {
    return;
  }

  gameContainer.innerHTML = `
    <section class="guess-number">
      <h2 class="guess-number__title">Вгадай число, яке загадав комп’ютер</h2>
      <div class="guess-number__content">
        <div class="guess-number__field">
          <input
            class="guess-number__input"
            type="number"
            min="1"
            max="10"
            placeholder="Введіть число"
            data-number-input
          />
          <button class="guess-number__button" type="button" aria-label="Перевірити число" data-number-button>
            <svg class="guess-number__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 4a6.5 6.5 0 0 1 5.17 10.44l4.45 4.44-1.24 1.24-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 1.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" />
            </svg>
          </button>
        </div>
        <p class="guess-number__result" data-number-result></p>
      </div>
    </section>
  `;

  const input = gameContainer.querySelector('[data-leap-year-input]');
  const button = gameContainer.querySelector('[data-leap-year-button]');
  const result = gameContainer.querySelector('[data-leap-year-result]');

  const checkNumber = () => {
    const userGuess = Number(input.value);
    const pcNumber = Math.floor(Math.random() * 10) + 1;

    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 10) {
      result.textContent = 'Введіть ціле число від 1 до 10!';
      result.className = 'guess-number__result is-error';
      return;
    }

    if (userGuess === pcNumber) {
      result.textContent = `Вітаю, ви вгадали число! (${pcNumber})`;
      result.className = 'guess-number__result is-success';
    } else {
      result.textContent = `Ви програли, комп'ютер загадав (${pcNumber})`;
      result.className = 'guess-number__result is-error';
    }

    input.value = '';
  };

  button.addEventListener('click', checkNumber);
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      checkNumber();
    }
  });
}