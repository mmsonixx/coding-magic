
import { initCalc } from '../games/calc.js';
import { initGameRockPaperScissors } from "../games/gameRockPaperScissors.js";
import { initDinoGmae } from "../games/dinoGame.js";
import { initTimeCalculator } from '../games/timeCalculation.js';
import { initGuessScientist } from '../games/guessScientist.js';
import { initLeapYearGame } from '../games/leapYearGame.js';
import { initOurTeam } from '../games/ourTeam.js';
import { initTheBiggestNumber } from '../games/theBiggestNumber.js';
import { initGameFootball } from '../games/football.js';
import { initTicTacToe } from '../games/ticTacToe.js';
import { initGuessNumberGame } from "../games/guessNumOfPC.js"



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
    init: initDinoGmae,
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
    init: initGameFootball,
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
    init: initTheBiggestNumber,
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

  {
    id: 11,
    name: 'ticTacToe ',
    category: 'game',
   init: initTicTacToe,
  },
  {
    id: 12,
    name: 'guess num of pc ',
    category: 'game',
    init: initGuessNumberGame,
  }
];
