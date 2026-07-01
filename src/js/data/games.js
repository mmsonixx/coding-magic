import { initGameRockPaperScissors } from "../games/gameRockPaperScissors.js";
import { initCalc } from "../games/calc.js";
import { initTimeCalculator } from '../games/timeCalculation.js';
import { initGuessScientist } from "../games/guessScientist.js";
import { initLeapYearGame } from "../games/leapYearGame.js";
import { initOurTeam } from '../games/ourTeam.js';


export const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
    init: initLeapYearGame,
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
    init: initGameRockPaperScissors,
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
    init: initCalc,
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
    init: initTimeCalculator,
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
    init: initOurTeam,
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
    init: initGuessScientist,
  },
];
