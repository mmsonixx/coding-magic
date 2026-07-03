

import { members } from '../data/members.js';

export function initOurTeam() {
  const gameContainer = document.querySelector('#game-9');

  gameContainer.innerHTML = `
    <section class="ourTeam">
      <div class="container swiper-carusel__container">

        <h2 class="section__title">Наша команда</h2>

        <div class="swiper teamSwiper">

          <div class="swiper-wrapper">

            ${members
              .map(
                member => `
                <div class="swiper-slide">
                  <div class="content">
                    <img
                      class="team__img"
                      src="${member.photo}"
                      alt="${member.name}"
                    >

                    <h3 class="swiper__subtitle">
                      ${member.name}
                    </h3>

                    <p class="swiper__info">
                      ${member.description}
                    </p>
                  </div>
                </div>
              `
              )
              .join('')}

          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>

        </div>
      </div>
    </section>
  `;

 new Swiper('.teamSwiper', {
   loop: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   spaceBetween: 40,

   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 });
}
