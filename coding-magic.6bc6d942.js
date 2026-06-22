let e=document.querySelector(".MD-overlay"),u=document.querySelector(".modalWindow"),c=document.querySelector(".MD-cross"),s=document.querySelector(".MD-logIn-btn"),t=document.querySelector(".MD-thanks"),a=document.querySelector(".MD-thanks-cross");function n(){e.classList.remove("active")}function i(){u.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{e.classList.add("active"),u.style.display="flex"}),s&&s.addEventListener("click",e=>{e.preventDefault(),i(),t.style.display="flex"}),c&&c.addEventListener("click",()=>{i(),n()}),a&&a.addEventListener("click",()=>{t.style.display="none",n()});let l=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){document.querySelector("#game-3").innerHTML=`<section class="rockPaperScissors">
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
</section>`}},{id:4,name:"Калькулятор",category:"numerical",init:function(){document.querySelector("#game-4").innerHTML=`<section class="section section-4">
      <div class="container">
        <div class="game" id="game-4">
          <div class="calc-text-box">
          <h3 class="calc-text">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440}</h3>
          </div>
          <div class="calc-box">
          <input type="number" class="calc-input" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" />
          <div class="calc-select">
            <button class="calc-button">+</button>
            <button class="calc-button">*</button>
            <button class="calc-button">-</button>
            <button class="calc-button">/</button>
          </div>
          <input type="number" class="calc-input-second" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" />
          <button class="calc-equal">=</button>
          <input type="number" class="calc-input" placeholder="\u{420}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442}" readonly/>

          </div>
<div class="divider"></div>
        </div>

      </div>

    </section>`;let e=document.querySelector(".calc-input"),u=document.querySelector(".calc-input-second"),c=document.querySelector("input[readonly]"),s=document.querySelector(".calc-equal"),t=document.querySelectorAll(".calc-button"),a="+";t.forEach(e=>{e.addEventListener("click",()=>{a=e.textContent})}),s.addEventListener("click",()=>{let s,t=Number(e.value),n=Number(u.value);if(isNaN(t)||isNaN(n)){c.value="";return}switch(a){case"+":s=t+n;break;case"-":s=t-n;break;case"*":s=t*n;break;case"/":s=0!==n?t/n:alert("ашiбачка, введите правильные числа ")}c.value=s})}},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}],o=document.querySelector("[data-game-container]");o?(o.innerHTML=l.reduce((e,u)=>e+=`<section class="section section-${u.id}">

<div class="container">

  <div class="game" id="game-${u.id}">

  </div>

</div>

        </section>`,""),l.forEach(e=>{e.init&&e.init()})):console.error("контейнер незнайдено");
//# sourceMappingURL=coding-magic.6bc6d942.js.map
