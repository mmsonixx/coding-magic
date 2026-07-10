export function initTheBiggestNumber() {
  const gameContainer = document.querySelector('#game-8');
  const gameHtml = `<section class="biggestNum">
<p class="biggestNum-zag">Введіть 3 числа</p>
<ul class="biggestNum-inputs">
    <li><input class="biggestNum-input biggestNum-input-1" placeholder="Введіть число" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-2" placeholder="Введіть число" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-3" placeholder="Введіть число" type="number"></li>
</ul>
<p class="biggestNum-result">Найбільше число, яке ви ввели - (число)</p>
<div class="biggestNum-underline"></div>
</section>
`;
  gameContainer.innerHTML = gameHtml;

  const biggestNumresult = document.querySelector('.biggestNum-result');
  const biggestNuminput1 = document.querySelector('.biggestNum-input-1');
  const biggestNuminput2 = document.querySelector('.biggestNum-input-2');
  const biggestNuminput3 = document.querySelector('.biggestNum-input-3');
  const biggestNuminput = document.querySelector('.biggestNum-input');
  function biggestNum() {
    const biggestNuminput1Value = parseFloat(biggestNuminput1.value);
    const biggestNuminput3Value = parseFloat(biggestNuminput3.value);
    const biggestNuminput2Value = parseFloat(biggestNuminput2.value);
    console.log(typeof biggestNuminput1Value);
    if (
      typeof biggestNuminput1Value !== 'number' ||
      typeof biggestNuminput2Value !== 'number' ||
      typeof biggestNuminput3Value !== 'number'
    ) {
      return;
    } else {
      let maxNum = Math.max(
        biggestNuminput1Value,
        biggestNuminput2Value,
        biggestNuminput3Value
      );
      biggestNumresult.textContent = `найбільше число яке ви ввели число(${maxNum})`;
    }
  }
  biggestNuminput1.addEventListener('input', biggestNum);
  biggestNuminput2.addEventListener('input', biggestNum);
  biggestNuminput3.addEventListener('input', biggestNum);
}
