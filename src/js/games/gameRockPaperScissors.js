export function initGameRockPaperScissors() {
    const gameContainer = document.querySelector('#game-3');
    const count = 0;
    const gameHtml = `<section class="rockPaperScissors">
    <div class="container">
      <h2 class="rps__title">Камінь - ножиці - папір</h2>
      <div class="rps__container"> 
    <div class="rps__box">
    <ul class="rps__list">
      <li class="rps__item">
        <svg class="rps__icon">
          <use href="./images/icons/symbol-defs.svg#icon-stone"></use>
        </svg>
      </li>
      <li class="rps__item">
        <svg class="rps__icon">
          <use href="./images/icons/symbol-defs.svg#icon-scissors"></use>
        </svg>
      </li>
      <li class="rps__item">
        <svg class="rps__icon">
          <use href="./images/icons/symbol-defs.svg#icon-paper"></use>
        </svg>
      </li>
    </ul>
<p class="rps__info">Ви виграли раунд!</p>
<button class="rps__button">Варіант комп’ютера</button>
</div>
<div class="rps__wrapper">
  <p class="rps__text">Рахунок:</p>
  <ul class="rps__counters">
    <li class="rps__counter">
      <p class="rps__count__name">Комп’ютер - ${count}</p>
    </li>
    <li class="rps__counter">
      <p class="rps__count__name">Ви - ${count}</p>
    </li>
  </ul>
</div>
</div>
</div>
</div>
</section>`;
    gameContainer.innerHTML = gameHtml;
}