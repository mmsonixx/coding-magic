import { members } from "../data/members.js";
export function initOurTeam() {
    const gameContainer = document.querySelector('#game-9');

    gameContainer.innerHTML = `
          <div class="container swiper-carusel__container">
        <h2 class="section__title">Наша команда</h2>
        <div class="swiper">
          <ul class="swiper-wrapper">
           
            ${members
              .map(
                member => ` <li class="swiper-slide">
              <div class="content content--red"><img class="team__img" src="${member.photo}" alt=""> <h3 class= 'swiper__subtitle'> </h3>${member.name} </div>
            </li>`
              )
              .join('')}
          </ul>
          <!-- Якщо потрібні стрілки навігації -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <!-- Якщо потрібна пагінація -->
          <div class="swiper-pagination"></div>
        </div>
      </div>

  `;
  console.log(members);
}


const swiper = new Swiper('.swiper', {
  // Параметри
  effect: 'creative', //інші ефекти: "slide", "fade", "cube", "coverflow", "flip", "cards"
  // Для режиму "creative"
  creativeEffect: {
    prev: {
      translate: ['-80%', 0, 0],
      scale: 0.5,
    },
    next: {
      translate: ['80%', 0, 0],
      scale: 0.5,
    },
  },

  loop: true,
  //   Кількість слайдів на екрані
  slidesPerView: 3,
  //   Активний слайд в центрі
  centeredSlides: true,

  // Якщо потрібна пагінація
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets', // default, інші варіанти: "fraction", "progressbar", "custom"
    clickable: true, // щоб можна було клікати по крапках пагінації
  },

  // Якщо потрібні стрілки навігації
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Адаптив
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.2,
    },
    1200: {
      slidesPerView: 1.5,
    },
  },
});