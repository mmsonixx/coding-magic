export function initGameFootball() {
  const gameContainer = document.querySelector('#game-7');
  gameContainer.innerHTML = `
       <h2 class="football-title">Футбол</h2>
   <div class="football-area">
    <div class="football-ball"></div>
   </div>
    `;
  const area = document.querySelector('.football-area');
  const ball = document.querySelector('.football-ball');

  const handleBlockMove = event => {
    const x = event.offsetX;
    const y = event.offsetY;

    ball.style.left = `${x - 25}px`;
    ball.style.top = `${y - 25}px`;
  };

  ball.addEventListener('mousedown', () => {
    ball.style.pointerEvents = 'none';
    area.addEventListener('mousemove', handleBlockMove);
  });

  document.addEventListener('mouseup', () => {
    ball.style.pointerEvents = 'auto';
    area.removeEventListener('mousemove', handleBlockMove);
  });
}
