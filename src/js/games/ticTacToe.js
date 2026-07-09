// ../games/ticTacToe.js

export function initTicTacToe() {
  const gameContainer = document.getElementById('game-11');
  if (!gameContainer) return;

  gameContainer.innerHTML = `
    <svg style="display: none;">
      <symbol id="icon-tik" viewBox="0 0 32 32">
        <path d="M11.303 10.697c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l0.707-0.707zM20.496 21.303c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-0.707 0.707zM10.596 20.596c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l-0.707-0.707zM21.203 11.404c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l0.707 0.707zM10.596 11.404l9.899 9.899 0.707-0.707-9.899-9.899-0.707 0.707zM11.303 21.303l9.899-9.899-0.707-0.707-9.899 9.899 0.707 0.707z"></path>
      </symbol>
      <symbol id="icon-tok" viewBox="0 0 32 32">
        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
      </symbol>
    </svg>
    <div class="tic-tac-toe-section">
        <div class="dividr"></div>
        <h2 class="title-ttt">Хрестики - Нулики</h2>
        
        <div class="ttt-mode-selection">
            <button class="ttt-mode-btn ttt-active" id="ttt-mode-pvp">Грати вдвох</button>
            <button class="ttt-mode-btn" id="ttt-mode-pve">Грати з ботом</button>
        </div>

        <div class="game-status" id="ttt-status">Ходить Гравець 1 (Хрестик)</div>
        
        <div class="ttt-board" id="ttt-board">
            <div class="ttt-cell" data-index="0"></div>
            <div class="ttt-cell" data-index="1"></div>
            <div class="ttt-cell" data-index="2"></div>
            <div class="ttt-cell" data-index="3"></div>
            <div class="ttt-cell" data-index="4"></div>
            <div class="ttt-cell" data-index="5"></div>
            <div class="ttt-cell" data-index="6"></div>
            <div class="ttt-cell" data-index="7"></div>
            <div class="ttt-cell" data-index="8"></div>
        </div>

        <button class="ttt-btn" id="ttt-reset">Почати заново</button>
        <div class="dividr"></div>
    </div>
         
  `;

  const tttBoard = gameContainer.querySelector('#ttt-board');
  const tttCells = gameContainer.querySelectorAll('.ttt-cell');
  const tttStatus = gameContainer.querySelector('#ttt-status');
  const tttResetBtn = gameContainer.querySelector('#ttt-reset');
  const btnPvP = gameContainer.querySelector('#ttt-mode-pvp');
  const btnPvE = gameContainer.querySelector('#ttt-mode-pve');

  let activePlayer = 'X';
  let boardState = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;
  let isBotMode = false;

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleCellInteraction(e) {
    const cell = e.target.closest('.ttt-cell');
    if (!cell) return;

    const index = parseInt(cell.getAttribute('data-index'));

    if (boardState[index] !== '' || !gameActive) return;
    if (isBotMode && activePlayer === 'O') return;

    makeMove(cell, index);

    if (gameActive && isBotMode && activePlayer === 'O') {
      setTimeout(botMove, 500);
    }
  }

  function makeMove(cell, index) {
    boardState[index] = activePlayer;

    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    const useElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'use'
    );

    const iconId = activePlayer === 'X' ? '#icon-tik' : '#icon-tok';
    useElement.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      iconId
    );

    svgElement.setAttribute('viewBox', '0 0 32 32');
    svgElement.classList.add('ttt-image');
    svgElement.appendChild(useElement);
    cell.appendChild(svgElement);

    validateResults();
  }

  function botMove() {
    if (!gameActive) return;

    const emptyCells = [];
    boardState.forEach((val, idx) => {
      if (val === '') emptyCells.push(idx);
    });

    if (emptyCells.length === 0) return;

    const randomIndex =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const targetCell = gameContainer.querySelector(
      `.ttt-cell[data-index="${randomIndex}"]`
    );

    makeMove(targetCell, randomIndex);
  }

  function validateResults() {
    let won = false;

    for (let pattern of winPatterns) {
      let a = boardState[pattern[0]];
      let b = boardState[pattern[1]];
      let c = boardState[pattern[2]];

      if (a === '' || b === '' || c === '') continue;
      if (a === b && b === c) {
        won = true;
        break;
      }
    }

    if (won) {
      if (isBotMode) {
        tttStatus.textContent =
          activePlayer === 'X' ? 'Ви перемогли! 🎉' : 'Бот переміг! 🤖';
      } else {
        tttStatus.textContent = `Переміг Гравець (${activePlayer === 'X' ? '1' : '2'})! 🎉`;
      }
      gameActive = false;
      return;
    }

    if (!boardState.includes('')) {
      tttStatus.textContent = 'Нічия! 🤝';
      gameActive = false;
      return;
    }

    activePlayer = activePlayer === 'X' ? 'O' : 'X';

    if (isBotMode) {
      tttStatus.textContent =
        activePlayer === 'X' ? 'Ваш хід (Хрестик)' : 'Бот думає... 🤖';
    } else {
      tttStatus.textContent = `Ходить Гравець ${activePlayer === 'X' ? '1 (Хрестик)' : '2 (Нулик)'}`;
    }
  }

  function resetTicTacToe() {
    activePlayer = 'X';
    boardState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    if (isBotMode) {
      tttStatus.textContent = 'Ваш хід (Хрестик)';
    } else {
      tttStatus.textContent = 'Ходить Гравець 1 (Хрестик)';
    }

    tttCells.forEach(cell => (cell.innerHTML = ''));
  }

  function changeMode(botModeActive) {
    isBotMode = botModeActive;
    if (isBotMode) {
      btnPvE.classList.add('ttt-active');
      btnPvP.classList.remove('ttt-active');
    } else {
      btnPvP.classList.add('ttt-active');
      btnPvE.classList.remove('ttt-active');
    }
    resetTicTacToe();
  }

  tttBoard.addEventListener('click', handleCellInteraction);
  tttResetBtn.addEventListener('click', resetTicTacToe);
  btnPvP.addEventListener('click', () => changeMode(false));
  btnPvE.addEventListener('click', () => changeMode(true));
}
