let e,u,t,s;var n="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},a={},i={},r=n.parcelRequire1ad7;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in i){var u=i[e];delete i[e];var t={id:e,exports:{}};return a[e]=t,u.call(t.exports,t,t.exports),t.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,u){i[e]=u},n.parcelRequire1ad7=r),r.register,Object.assign(r.i??={},{brgVf:"cat.4c9b4236.webp"});let c=[{photo:{},name:"Sonya",description:"Team lead,"}];new Swiper(".swiper",{effect:"creative",creativeEffect:{prev:{translate:["-80%",0,0],scale:.5},next:{translate:["80%",0,0],scale:.5}},loop:!0,slidesPerView:3,centeredSlides:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1.2},1200:{slidesPerView:1.5}}});let l=document.querySelector(".MD-overlay"),o=document.querySelector(".modalWindow"),d=document.querySelector(".MD-cross"),p=document.querySelector(".MD-logIn-btn"),m=document.querySelector(".MD-thanks"),v=document.querySelector(".MD-thanks-cross");function y(){l.classList.remove("active")}function b(){o.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{l.classList.add("active"),o.style.display="flex"}),p&&p.addEventListener("click",e=>{e.preventDefault(),b(),m.style.display="flex"}),d&&d.addEventListener("click",()=>{b(),y()}),v&&v.addEventListener("click",()=>{m.style.display="none",y()}),e=document.querySelector(".MD-overlay"),u=document.querySelector(".MD-thanks"),t=document.querySelector(".MD-thanks-cross"),(s=document.querySelector("[data-modal-open]"))&&s.addEventListener("click",()=>{e.classList.add("active"),u.style.display="flex"}),t&&t.addEventListener("click",()=>{u.style.display="none",e.classList.remove("active")});let g=document.querySelector(".dropdown__button"),_=document.querySelector(".dropdown"),f=document.querySelector(".theme-toggle__input");g&&_&&(g.onclick=function(){_.classList.toggle("is-open")}),f&&f.addEventListener("change",e=>{e.target.checked?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")});let E=document.querySelector(".MD-logIn-input1"),h=document.getElementById("userGreeting");h&&(h.textContent="Вітаємо, Гість!"),E&&(E.value="",E.addEventListener("input",function(){let e=E.value;""==e&&(e="Гість"),h&&(h.textContent="Вітаємо, "+e+"!"),localStorage.setItem("userName",e)}));let S=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],q=e=>Math.ceil(e/100),x=e=>`${e.name} ${e.surname} (${e.born}-${e.dead})`,w=[{text:"Які вчені народилися в 19 ст.",title:"Вчені, що народилися в 19 столітті",action:()=>S.filter(e=>19===q(e.born))},{text:"Знайти суму років скільки прожили всі вчені",title:"Сума років життя всіх вчених",action:()=>`${S.reduce((e,u)=>e+(u.dead-u.born),0)} \u{440}\u{43E}\u{43A}\u{456}\u{432}`},{text:"Відсортувати вчених за алфавітом",title:"Сортування за алфавітом",action:()=>[...S].sort((e,u)=>e.surname.localeCompare(u.surname))},{text:"Відсортувати вчених за кількістю прожитих років",title:"Сортування за кількістю прожитих років",action:()=>[...S].sort((e,u)=>e.dead-e.born-(u.dead-u.born))},{text:"Видалити з масива вчених що народилися в 15, 16 або 17 столітті",title:"Масив без вчених з 15, 16 або 17 століття",action:()=>S.filter(e=>![15,16,17].includes(q(e.born)))},{text:"Знайти вченого, який народився найпізніше",title:"Вчений, який народився найпізніше",action:()=>S.reduce((e,u)=>u.born>e.born?u:e)},{text:"Знайти рік народження Albert Einstein",title:"Рік народження Albert Einstein",action:()=>S.find(e=>"Albert"===e.name&&"Einstein"===e.surname).born},{text:"Знайти вчених, прізвища яких починаються на літеру “C”",title:"Прізвища починаються на C",action:()=>S.filter(e=>e.surname.startsWith("C"))},{text:"Видалити всіх вчених, ім’я яких починається на “A”",title:"Масив без імен на A",action:()=>S.filter(e=>!e.name.startsWith("A"))},{text:"Знайти вченого, який прожив найдовше і вченого, який прожив найменше",title:"Найдовше і найменше життя",action:()=>{let e,u;return e=S.reduce((e,u)=>u.dead-u.born>e.dead-e.born?u:e),u=S.reduce((e,u)=>u.dead-u.born<e.dead-e.born?u:e),[`\u{41D}\u{430}\u{439}\u{434}\u{43E}\u{432}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${x(e)}`,`\u{41D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${x(u)}`]}},{text:"Знайти вчених, в яких співпадають перші літери імені і прізвища",title:"Однакові перші літери імені та прізвища",action:()=>S.filter(e=>e.name[0]===e.surname[0])},{text:"Дізнатися чи всі вчені працювали в 19 столітті",title:"Чи всі вчені працювали в 19 столітті",action:()=>S.every(e=>e.born<=1900&&e.dead>=1801)?"Так, всі вчені працювали в 19 столітті":"Ні, не всі вчені працювали в 19 столітті"}],L=[{id:1,name:"Високосний калькулятор",category:"numerical",init:function(){let e=document.querySelector("#game-1");if(!e)return;e.innerHTML=`
    <section class="leap-year">
      <h2 class="leap-year__title">\u{41F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440} \u{432} \u{44F}\u{43A}\u{438}\u{439} \u{440}\u{456}\u{43A} \u{442}\u{438} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{438}\u{432}\u{441}\u{44F}</h2>
      <div class="leap-year__content">
        <div class="leap-year__field">
          <input
            class="leap-year__input"
            type="number"
            placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{440}\u{456}\u{43A} \u{43D}\u{430}\u{440}\u{43E}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}"
            data-leap-year-input
          />
          <button class="leap-year__button" type="button" aria-label="\u{41F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440}\u{438}\u{442}\u{438} \u{440}\u{456}\u{43A}" data-leap-year-button>
            <svg class="leap-year__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 4a6.5 6.5 0 0 1 5.17 10.44l4.45 4.44-1.24 1.24-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 1.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" />
            </svg>
          </button>
        </div>
        <p class="leap-year__result" data-leap-year-result></p>
      </div>
      <div class="leap-year__divider"></div>
    </section>
  `;let u=e.querySelector("[data-leap-year-input]"),t=e.querySelector("[data-leap-year-button]"),s=e.querySelector("[data-leap-year-result]"),n=()=>{let e=Number(u.value);if(!Number.isInteger(e)||e<=0){s.textContent="Введіть коректний рік народження",s.classList.remove("is-success"),s.classList.add("is-error");return}if(e%4==0&&e%100!=0||e%400==0){s.textContent="Ви народилися у високосний рік!",s.classList.remove("is-error"),s.classList.add("is-success");return}s.textContent="Ви народилися не у високосний рік!",s.classList.remove("is-success"),s.classList.add("is-error")};t.addEventListener("click",n),u.addEventListener("keydown",e=>{"Enter"===e.key&&n()})}},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){let e=document.querySelector("#game-3"),u=0,t=0,s=["Камінь","Ножиці","Папір"];e.innerHTML=`
    <section class="rockPaperScissors">
      <div class="container">
        <h2 class="rps__title">\u{41A}\u{430}\u{43C}\u{456}\u{43D}\u{44C} - \u{43D}\u{43E}\u{436}\u{438}\u{446}\u{456} - \u{43F}\u{430}\u{43F}\u{456}\u{440}</h2>

        <div class="rps__container"> 
          <div class="rps__box">
            <ul class="rps__list">
              <li class="rps__item" data-choice="stone">
                <svg class="rps__icon">
                  <use href="#icon-stone"></use>
                </svg>
              </li>

              <li class="rps__item" data-choice="scissors">
                <svg class="rps__icon">
                  <use href="#icon-scissors"></use>
                </svg>
              </li>

              <li class="rps__item" data-choice="paper">
                <svg class="rps__icon">
                  <use href="#icon-paper"></use>
                </svg>
              </li>
            </ul>

            <p class="rps__info">\u{412}\u{430}\u{440}\u{456}\u{430}\u{43D}\u{442} \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440}\u{430}</p>
          </div>

          <div class="rps__wrapper">
            <p class="rps__text">\u{420}\u{430}\u{445}\u{443}\u{43D}\u{43E}\u{43A}:</p>
            <ul class="rps__counters">
              <li><p id="computerScore">\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - 0</p></li>
              <li><p id="userScore">\u{412}\u{438} - 0</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;let n=e.querySelectorAll(".rps__item"),a=e.querySelector(".rps__info"),i=e.querySelector("#computerScore"),r=e.querySelector("#userScore");n.forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.choice,c=s[Math.floor(Math.random()*s.length)],l=n===c?"draw":"Камінь"===n&&"Ножиці"===c||"Ножиці"===n&&"Папір"===c||"Папір"===n&&"Камінь"===c?"user":"computer";"user"===l?u++:"computer"===l&&t++,a.textContent=`${c}`,i.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${t}`,r.textContent=`\u{412}\u{438} - ${u}`})})}},{id:4,name:"Калькулятор",category:"numerical",init:function(){document.querySelector("#game-4").innerHTML=`<section class="section section-4">
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

    </section>`;let e=document.querySelector(".calc-input"),u=document.querySelector(".calc-input-second"),t=document.querySelector("input[readonly]"),s=document.querySelector(".calc-equal"),n=document.querySelectorAll(".calc-button"),a="+";n.forEach(e=>{e.addEventListener("click",()=>{a=e.textContent})}),s.addEventListener("click",()=>{let s,n=Number(e.value),i=Number(u.value);if(isNaN(n)||isNaN(i)){t.value="";return}switch(a){case"+":s=n+i;break;case"-":s=n-i;break;case"*":s=n*i;break;case"/":s=0!==i?n/i:alert("ашiбачка, введите правильные числа ")}t.value=s})}},{id:5,name:"Калькулятор часу",category:"numerical",init:function(){let e=document.querySelector("#game-5");if(!e)return;e.innerHTML=`
    <div class="calculator-container">
      <h2 class="calcylation_title">\u{41A}\u{430}\u{43B}\u{44C}\u{43A}\u{443}\u{43B}\u{44F}\u{442}\u{43E}\u{440} \u{447}\u{430}\u{441}\u{443}</h2>
      <div class="calc-row">
        <div class="search-box">
          <input
            type="number"
            id="secondsInput"
            placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"
            min="0"
          />
          <button id="calcBtn" type="button">
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>
        <div class="divder"></div>
        <div class="result" id="timeResult">
          0 \u{434}\u{43D}. 00:00:00
        </div>
      </div>
    </div>
  `;let u=e.querySelector("#calcBtn"),t=e.querySelector("#secondsInput"),s=e.querySelector("#timeResult");function n(){let e=parseInt(t.value,10);if(isNaN(e)||e<0){s&&(s.textContent="0 дн. 00:00:00");return}let u=Math.floor(e/86400),n=e%86400,a=Math.floor(n/3600),i=Math.floor((n%=3600)/60),r=n%60;a<10&&(a="0"+a),i<10&&(i="0"+i),r<10&&(r="0"+r),s&&(s.textContent=u+" дн. "+a+":"+i+":"+r)}u&&t&&(u.onclick=function(){n()},t.onkeypress=function(e){"Enter"===e.key&&n()})}},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical",init:function(){document.querySelector("#game-8").innerHTML=`<section class="biggestNum">
<p class="biggestNum-zag">\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} 3 \u{447}\u{438}\u{441}\u{43B}\u{430}</p>
<ul class="biggestNum-inputs">
    <li><input class="biggestNum-input biggestNum-input-1" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-2" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-3" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
</ul>
<p class="biggestNum-result">\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - (\u{447}\u{438}\u{441}\u{43B}\u{43E})</p>
<div class="biggestNum-underline"></div>
</section>
`;let e=document.querySelector(".biggestNum-result"),u=document.querySelector(".biggestNum-input-1"),t=document.querySelector(".biggestNum-input-2"),s=document.querySelector(".biggestNum-input-3");function n(){let n=parseFloat(u.value),a=parseFloat(s.value),i=parseFloat(t.value);if(console.log(typeof n),"number"==typeof n&&"number"==typeof i&&"number"==typeof a){let u=Math.max(n,i,a);e.textContent=`\u{43D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E} \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}(${u})`}}document.querySelector(".biggestNum-input"),u.addEventListener("input",n),t.addEventListener("input",n),s.addEventListener("input",n)}},{id:9,name:"Наша команда",category:"acquaintance",init:function(){document.querySelector("#game-9").innerHTML=`
          <div class="container swiper-carusel__container">
        <h2 class="section__title">\u{41D}\u{430}\u{448}\u{430} \u{43A}\u{43E}\u{43C}\u{430}\u{43D}\u{434}\u{430}</h2>
        <div class="swiper">
          <ul class="swiper-wrapper">
           
            ${c.map(e=>` <li class="swiper-slide">
              <div class="content content--red"><img class="team__img" src="${e.photo}" alt=""> <h3 class= 'swiper__subtitle'> </h3>${e.name} </div>
            </li>`).join("")}
          </ul>
          <!-- \u{42F}\u{43A}\u{449}\u{43E} \u{43F}\u{43E}\u{442}\u{440}\u{456}\u{431}\u{43D}\u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{438} \u{43D}\u{430}\u{432}\u{456}\u{433}\u{430}\u{446}\u{456}\u{457} -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <!-- \u{42F}\u{43A}\u{449}\u{43E} \u{43F}\u{43E}\u{442}\u{440}\u{456}\u{431}\u{43D}\u{430} \u{43F}\u{430}\u{433}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44F} -->
          <div class="swiper-pagination"></div>
        </div>
      </div>

  `,console.log(c)}},{id:10,name:"Вчений",category:"acquaintance",init:function(){let e=document.querySelector("#game-10");e&&(e.innerHTML=`
    <section class="guess-scientist">
      <h2 class="guess-scientist__title">\u{41E}\u{431}\u{435}\u{440}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{43E}\u{433}\u{43E}/\u{438}\u{445}</h2>
      <ul class="guess-scientist__cards">
        ${S.map(e=>`
              <li class="guess-scientist__card">
                <span class="guess-scientist__card-name">${e.name}</span>
                <span class="guess-scientist__card-name">${e.surname}</span>
              </li>
            `).join("")}
      </ul>
      <ul class="guess-scientist__tasks">
        ${w.map((e,u)=>`
              <li class="guess-scientist__task">
                <button class="guess-scientist__button" type="button" data-scientist-task="${u}">
                  ${e.text}
                </button>
              </li>
            `).join("")}
      </ul>
      <div class="guess-scientist__answer" data-scientist-answer>
        \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{438} \u{43A}\u{43D}\u{43E}\u{43F}\u{43A}\u{443}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{431}\u{430}\u{447}\u{438}\u{442}\u{438} \u{440}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442}.
      </div>
    </section>
  `,e.querySelectorAll("[data-scientist-task]").forEach(u=>{u.addEventListener("click",u=>{let t=w[Number(u.currentTarget.dataset.scientistTask)],s=t.action();e.querySelector("[data-scientist-answer]").innerHTML=`
        <h3 class="guess-scientist__answer-title">${t.title}</h3>
        ${Array.isArray(s)?`<ul class="guess-scientist__answer-list">
      ${s.map(e=>`<li>${"string"==typeof e?e:x(e)}</li>`).join("")}
    </ul>`:"object"==typeof s?`<p class="guess-scientist__answer-text">${x(s)}</p>`:`<p class="guess-scientist__answer-text">${s}</p>`}
      `})}))}}],C=document.querySelector("[data-game-container]"),A=document.querySelectorAll(".dropdown__link");function D(e,u){if(!u)return void console.error("Контейнер не знайдено");if(0===e.length){u.innerHTML='<p class="no-games">Ігор у цій категорії поки немає</p>';return}u.innerHTML=e.reduce((e,u)=>e+`
      <section class="section section-${u.id}">
        <div class="container">
          <div class="game" id="game-${u.id}">
             <h3>${u.name}</h3> 
          </div>
        </div>
      </section>
    `,""),e.forEach(e=>{e.init&&e.init()})}D(L,C),A.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let u=e.target.dataset.category;D("all"===u?L:L.filter(e=>e.category===u),C)})});
//# sourceMappingURL=coding-magic.d8c7417f.js.map
