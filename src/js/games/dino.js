export class dinoGame {
  constructor(dino, gameArea) {
    this.dino = dino;
    this.gameArea = gameArea;
    this.gameOver = false;
    this.isJumping = false;
    this.gameModalStart();
  }

  init() {
    document.addEventListener('keydown', event => {
      if (event.code === 'Space' && !this.isJumping && !this.gameOver) {
        event.preventDefault();
        this.jump();
      }
    });
    this.gameArea.addEventListener('mousedown', () => {
      if (!this.isJumping && !this.gameOver) {
        this.jump();
      }
    });
    this.renderObstacles();
    this.checkCollision();
  }

  jump() {
    this.isJumping = true;
    this.dino.classList.add('jump');

    setTimeout(() => {
      this.isJumping = false;
      this.dino.classList.remove('jump');
    }, 500);
  }

  checkCollision() {
    const gameProces = () => {
      if (this.gameOver === true) return;
      const obstacle = this.gameArea.querySelector('.cactus');
      const obstacleRect = obstacle.getBoundingClientRect();
      const dinoRect = this.dino.getBoundingClientRect();
      if (
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top
      ) {
        this.endGame(obstacle);
        return;
      }
      requestAnimationFrame(gameProces);
    };
    requestAnimationFrame(gameProces);
  }

  renderObstacles() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('cactus');
    obstacle.style.height = this.randomHeight();
    this.gameArea.appendChild(obstacle);

    const animationHangler = () => {
      obstacle.removeEventListener('animationend', animationHangler);
      obstacle.remove();

      if (!this.gameOver) {
        this.renderObstacles();
      }
    };
    obstacle.addEventListener('animationend', animationHangler);
  }

  randomHeight() {
    return `${Math.floor(Math.random() * (60 - 30 + 1) + 30)}px`;
  }
  endGame(obstacle) {
    obstacle.style.animationPlayState = 'paused';
    this.gameOver = true;
    this.gameOverModal();
  }

  createModal(message, buttonText, buttonCallback) {
    const modalHtml = `
      <div class="dino__modal">
        <p class="dino__message">${message}</p>
        <button class="dino__start button">${buttonText}</button>
      </div>
        `;
    this.gameArea.insertAdjacentHTML('beforeend', modalHtml);

    const modal = this.gameArea.querySelector('.dino__modal');
    modal.classList.add('show');

    const retryButton = this.gameArea.querySelector('.dino__start');
    retryButton.addEventListener('click', buttonCallback);
  }

  gameModalStart() {
    this.createModal('Зіграємо?', 'Почати гру!', () => {
      const modal = this.gameArea.querySelector('.dino__modal');
      modal.classList.remove('show');
      setTimeout(() => {
        modal.remove();
      }, 250);
      this.init();
    });
  }

  gameOverModal() {
    this.createModal('Ви програли!', 'Спробувати знову', () =>
      this.restartGame()
    );
  }

  restartGame() {
    this.gameArea.querySelector('.dino__modal').remove();
    this.gameArea.querySelector('.cactus').remove();
    this.gameOver = false;
    this.renderObstacles();
    this.checkCollision();
  }
}
