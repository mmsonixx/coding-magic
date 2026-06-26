const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export function initLeapYearGame() {
  const gameContainer = document.querySelector('#game-1');

  if (!gameContainer) {
    return;
  }

  gameContainer.innerHTML = `
    <section class="leap-year">
      <h2 class="leap-year__title">Перевір в який рік ти народився</h2>
      <div class="leap-year__content">
        <div class="leap-year__field">
          <input
            class="leap-year__input"
            type="number"
            placeholder="Введіть рік народження"
            data-leap-year-input
          />
          <button class="leap-year__button" type="button" aria-label="Перевірити рік" data-leap-year-button>
            <svg class="leap-year__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 4a6.5 6.5 0 0 1 5.17 10.44l4.45 4.44-1.24 1.24-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 1.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" />
            </svg>
          </button>
        </div>
        <p class="leap-year__result" data-leap-year-result></p>
      </div>
      <div class="leap-year__divider"></div>
    </section>
  `;

  const input = gameContainer.querySelector('[data-leap-year-input]');
  const button = gameContainer.querySelector('[data-leap-year-button]');
  const result = gameContainer.querySelector('[data-leap-year-result]');

  const checkYear = () => {
    const year = Number(input.value);

    if (!Number.isInteger(year) || year <= 0) {
      result.textContent = 'Введіть коректний рік народження';
      result.classList.remove('is-success');
      result.classList.add('is-error');
      return;
    }

    if (isLeapYear(year)) {
      result.textContent = 'Ви народилися у високосний рік!';
      result.classList.remove('is-error');
      result.classList.add('is-success');
      return;
    }

    result.textContent = 'Ви народилися не у високосний рік!';
    result.classList.remove('is-success');
    result.classList.add('is-error');
  };

  button.addEventListener('click', checkYear);

  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      checkYear();
    }
  });
}
