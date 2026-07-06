import { games } from './data/games.js';

const gamesContainer = document.querySelector('[data-game-container]');
const filterLinks = document.querySelectorAll('.dropdown__link');

function renderGames(gamesData, container) {
  if (!container) {
    console.error('Контейнер не знайдено');
    return;
  }

  if (gamesData.length === 0) {
    container.innerHTML =
      '<p class="no-games">Ігор у цій категорії поки немає</p>';
    return;
  }

  const markup = gamesData.reduce((acc, game) => {
    const markupGame = `
      <section class="section section-${game.id}">
        <div class="container">
          <div class="game" id="game-${game.id}">
             <h3>${game.name}</h3> 
          </div>
        </div>
      </section>
    `;
    return acc + markupGame;
  }, '');

  container.innerHTML = markup;

  gamesData.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
}

function initFilter() {
  filterLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const selectedCategory = event.target.dataset.category;

      const filteredGames =
        selectedCategory === 'all'
          ? games
          : games.filter(game => game.category === selectedCategory);

      renderGames(filteredGames, gamesContainer);
    });
  });
}

renderGames(games, gamesContainer);
initFilter();
