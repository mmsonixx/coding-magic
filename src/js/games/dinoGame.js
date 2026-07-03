import { dinoGame } from './dino';
export function initDinoGmae() {
  const gameContainer = document.querySelector('#game-6');
  const markup = `
          <h2 class="dinoGame__title">Google динозавр</h2>
         <div id="dinoGameArea" class="dinoGame__box">
            <div id="dino" class="dinoGame__character">
            </div>
            </div>
    `;
  gameContainer.innerHTML = markup;
  const gameArea = document.querySelector('#dinoGameArea');
  const dino = document.querySelector('#dino');
  new dinoGame(dino, gameArea);
}
