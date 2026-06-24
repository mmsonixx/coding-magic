import { scientists } from '../data/scientists.js';

const getCentury = year => Math.ceil(year / 100);
const getLifetime = scientist => scientist.dead - scientist.born;
const formatScientist = scientist =>
  `${scientist.name} ${scientist.surname} (${scientist.born}-${scientist.dead})`;

const getNewestScientist = () =>
  scientists.reduce((newest, scientist) =>
    scientist.born > newest.born ? scientist : newest
  );

const getLongestAndShortestLiving = () => {
  const longestLiving = scientists.reduce((longest, scientist) =>
    getLifetime(scientist) > getLifetime(longest) ? scientist : longest
  );
  const shortestLiving = scientists.reduce((shortest, scientist) =>
    getLifetime(scientist) < getLifetime(shortest) ? scientist : shortest
  );

  return [
    `Найдовше прожив: ${formatScientist(longestLiving)}`,
    `Найменше прожив: ${formatScientist(shortestLiving)}`,
  ];
};

const tasks = [
  {
    text: 'Які вчені народилися в 19 ст.',
    title: 'Вчені, що народилися в 19 столітті',
    action: () => scientists.filter(scientist => getCentury(scientist.born) === 19),
  },
  {
    text: 'Знайти суму років скільки прожили всі вчені',
    title: 'Сума років життя всіх вчених',
    action: () =>
      `${scientists.reduce((total, scientist) => total + getLifetime(scientist), 0)} років`,
  },
  {
    text: 'Відсортувати вчених за алфавітом',
    title: 'Сортування за алфавітом',
    action: () => [...scientists].sort((first, second) => first.surname.localeCompare(second.surname)),
  },
  {
    text: 'Відсортувати вчених за кількістю прожитих років',
    title: 'Сортування за кількістю прожитих років',
    action: () => [...scientists].sort((first, second) => getLifetime(first) - getLifetime(second)),
  },
  {
    text: 'Видалити з масива вчених що народилися в 15, 16 або 17 столітті',
    title: 'Масив без вчених з 15, 16 або 17 століття',
    action: () => scientists.filter(scientist => ![15, 16, 17].includes(getCentury(scientist.born))),
  },
  {
    text: 'Знайти вченого, який народився найпізніше',
    title: 'Вчений, який народився найпізніше',
    action: () => getNewestScientist(),
  },
  {
    text: 'Знайти рік народження Albert Einstein',
    title: 'Рік народження Albert Einstein',
    action: () =>
      scientists.find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein').born,
  },
  {
    text: 'Знайти вчених, прізвища яких починаються на літеру “C”',
    title: 'Прізвища починаються на C',
    action: () => scientists.filter(scientist => scientist.surname.startsWith('C')),
  },
  {
    text: 'Видалити всіх вчених, ім’я яких починається на “A”',
    title: 'Масив без імен на A',
    action: () => scientists.filter(scientist => !scientist.name.startsWith('A')),
  },
  {
    text: 'Знайти вченого, який прожив найдовше і вченого, який прожив найменше',
    title: 'Найдовше і найменше життя',
    action: () => getLongestAndShortestLiving(),
  },
  {
    text: 'Знайти вчених, в яких співпадають перші літери імені і прізвища',
    title: 'Однакові перші літери імені та прізвища',
    action: () => scientists.filter(scientist => scientist.name[0] === scientist.surname[0]),
  },
  {
    text: 'Дізнатися чи всі вчені працювали в 19 столітті',
    title: 'Чи всі вчені працювали в 19 столітті',
    action: () =>
      scientists.every(scientist => scientist.born <= 1900 && scientist.dead >= 1801)
        ? 'Так, всі вчені працювали в 19 столітті'
        : 'Ні, не всі вчені працювали в 19 столітті',
  },
];

const renderAnswer = answer => {
  if (Array.isArray(answer)) {
    return `<ul class="guess-scientist__answer-list">
      ${answer
        .map(item => `<li>${typeof item === 'string' ? item : formatScientist(item)}</li>`)
        .join('')}
    </ul>`;
  }

  if (typeof answer === 'object') {
    return `<p class="guess-scientist__answer-text">${formatScientist(answer)}</p>`;
  }

  return `<p class="guess-scientist__answer-text">${answer}</p>`;
};

export function initGuessScientist() {
  const gameContainer = document.querySelector('#game-10');

  if (!gameContainer) {
    return;
  }

  gameContainer.innerHTML = `
    <section class="guess-scientist">
      <h2 class="guess-scientist__title">Обери вченого/их</h2>
      <ul class="guess-scientist__cards">
        ${scientists
          .map(
            scientist => `
              <li class="guess-scientist__card">
                <span class="guess-scientist__card-name">${scientist.name}</span>
                <span class="guess-scientist__card-name">${scientist.surname}</span>
              </li>
            `
          )
          .join('')}
      </ul>
      <ul class="guess-scientist__tasks">
        ${tasks
          .map(
            (task, index) => `
              <li class="guess-scientist__task">
                <button class="guess-scientist__button" type="button" data-scientist-task="${index}">
                  ${task.text}
                </button>
              </li>
            `
          )
          .join('')}
      </ul>
      <div class="guess-scientist__answer" data-scientist-answer>
        Натисни кнопку, щоб побачити результат.
      </div>
    </section>
  `;

  gameContainer.querySelectorAll('[data-scientist-task]').forEach(button => {
    button.addEventListener('click', event => {
      const task = tasks[Number(event.currentTarget.dataset.scientistTask)];
      const answer = task.action();
      const answerContainer = gameContainer.querySelector('[data-scientist-answer]');

      answerContainer.innerHTML = `
        <h3 class="guess-scientist__answer-title">${task.title}</h3>
        ${renderAnswer(answer)}
      `;
    });
  });
}
