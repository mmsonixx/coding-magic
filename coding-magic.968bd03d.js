let e=document.querySelector(".MD-overlay"),s=document.querySelector(".modalWindow"),u=document.querySelector(".MD-cross"),c=document.querySelector(".MD-logIn-btn"),i=document.querySelector(".MD-thanks"),n=document.querySelector(".MD-thanks-cross");function a(){e.classList.remove("active")}function t(){s.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{e.classList.add("active"),s.style.display="flex"}),c&&c.addEventListener("click",e=>{e.preventDefault(),t(),i.style.display="flex"}),u&&u.addEventListener("click",()=>{t(),a()}),n&&n.addEventListener("click",()=>{i.style.display="none",a()});let o=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){document.querySelector("#game-3").innerHTML=`<section class="rockPaperScissors">
    <div class="container">
      <h2 class="rps__title">\u{41A}\u{430}\u{43C}\u{456}\u{43D}\u{44C} - \u{43D}\u{43E}\u{436}\u{438}\u{446}\u{456} - \u{43F}\u{430}\u{43F}\u{456}\u{440}</h2>
      <div class="rps__container"> 
    <div class="rps__box">
    <ul class="rps__list">
      <li class="rps__item">
        <svg class="rps__icon">
          <use href="./images/icons/symbol-defs.svg#icon-stone"></use>
        </svg>
      </li>
      <li class="rps__item">
        <svg class="rps__icon">
          <use href="./images/icons/symbol-defs.svg#icon-scissors"></use>
        </svg>
      </li>
      <li class="rps__item">
        <svg class="rps__icon">
          <use href="./images/icons/symbol-defs.svg#icon-paper"></use>
        </svg>
      </li>
    </ul>
<p class="rps__info">\u{412}\u{438} \u{432}\u{438}\u{433}\u{440}\u{430}\u{43B}\u{438} \u{440}\u{430}\u{443}\u{43D}\u{434}!</p>
<button class="rps__button">\u{412}\u{430}\u{440}\u{456}\u{430}\u{43D}\u{442} \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440}\u{430}</button>
</div>
<div class="rps__wrapper">
  <p class="rps__text">\u{420}\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}:</p>
  <ul class="rps__counters">
    <li class="rps__counter">
      <p class="rps__count__name">\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - 0</p>
    </li>
    <li class="rps__counter">
      <p class="rps__count__name">\u{412}\u{438} - 0</p>
    </li>
  </ul>
</div>
</div>
</div>
</div>
</section>`}},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}],r=document.querySelector("[data-game-container]");r?(r.innerHTML=o.reduce((e,s)=>e+=`<section class="section section-${s.id}">

<div class="container">

  <div class="game" id="game-${s.id}">

  </div>

</div>

        </section>`,""),o.forEach(e=>{e.init&&e.init()})):console.error("контейнер незнайдено");
//# sourceMappingURL=coding-magic.968bd03d.js.map
