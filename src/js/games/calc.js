export function initCalc() {
    const gameContainer = document.querySelector('#game-4');
    const gameHtml = `
          <div class="calc-text-box">
          <h3 class="calc-text">Калькулятор</h3>
          </div>
          <div class="calc-box">
          <input type="number" class="calc-input" placeholder="Введіть число" />
          <div class="calc-select">
            <button class="calc-button">+</button>
            <button class="calc-button">*</button>
            <button class="calc-button">-</button>
            <button class="calc-button">/</button>
          </div>
          <input type="number" class="calc-input-second" placeholder="Введіть число" />
          <button class="calc-equal">=</button>
          <input type="number" class="calc-input" placeholder="Результат" readonly/>

          </div>
<div class="divider"></div>
`;
    gameContainer.innerHTML = gameHtml;

    const firstInput = document.querySelector('.calc-input');
    const secondInput = document.querySelector('.calc-input-second');
    const resultInput = document.querySelector('input[readonly]');
    const equalBtn = document.querySelector('.calc-equal');
    const operationBtns = document.querySelectorAll('.calc-button');

    let currentOperation = '+';

    operationBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentOperation = btn.textContent;
      });
    });

    equalBtn.addEventListener('click', () => {
      const num1 = Number(firstInput.value);
      const num2 = Number(secondInput.value);

      if (isNaN(num1) || isNaN(num2)) {
        resultInput.value = '';
        return;
      }

      let result;

      switch (currentOperation) {
        case '+':
          result = num1 + num2 ;
          break;

        case '-':
          result = num1 - num2;
          break;

        case '*':
          result = num1 * num2;
          break;

        case '/':
          result = num2 !== 0 ? num1 / num2 : alert(`На нуль ділити не можна. Введіть інакше число.`);
          break;
      }

      resultInput.value = result;
    });
}
