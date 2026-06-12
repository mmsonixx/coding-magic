import { games } from './data/games.js';
const gamesContainer = document.querySelector('[data-game-container]');
function renderGames(gamesData, container) {
  if (!container) {
    console.error('контейнер незнайдено');
    return;
  }
    const markup = gamesData.reduce((acc, game) => {
    
    const markupGame = `<section class="section section-${game.id}">

<div class="container">

  <div class="game" id="game-${game.id}">

  </div>

</div>

        </section>`;
        acc += markupGame; 
        return acc;
  }, "");
  container.innerHTML = markup;
  gamesData.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
    
}
renderGames(games, gamesContainer);
