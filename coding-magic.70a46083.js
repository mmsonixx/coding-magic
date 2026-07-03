let e,t,u,n;function s(e){return e&&e.__esModule?e.default:e}function a(e){return new URL(r+(e=l.i?.[e]||e),import.meta.url).toString()}var i="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},r="./",c={},o={},l=i.parcelRequire1ad7;null==l&&((l=function(e){if(e in c)return c[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return c[e]=u,t.call(u.exports,u,u.exports),u.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},i.parcelRequire1ad7=l),l.register,Object.assign(l.i??={},{"2jajS":"sonya.8ce5b47b.webp",J9Ooa:"dima.93854aff.webp","5Mkkr":"roma.63b6bfca.webp","7BdM2":"yaroslav.e4482830.webp"});var d={};d=a("2jajS");var p={};p=a("J9Ooa");var m={};m=a("5Mkkr");var v={};v=a("7BdM2");let b=[{photo:s(d),name:"Соня",description:"Team lead, Section: Камінь-ножиці-папір,Наша команда"},{photo:s(v),name:"Ярослав",description:"Scrum Master,Section: Обери вченого/их,Перевір в який рік ти народився"},{photo:s(p),name:"Діма",description:"Developers,Section: Header,Калькулятор часу"},{photo:s(m),name:"Рома",description:"Developers,Section: Футбол,Google динозавр"},{photo:s(d),name:"Лука",description:"Developers, Section: Footer,Калькулятор"},{photo:s(d),name:"Олексій",description:"Developers,Section: Вгадай число, яке загадав комп’ютер"}],y=document.querySelector(".MD-overlay"),g=document.querySelector(".modalWindow"),_=document.querySelector(".MD-cross"),f=document.querySelector(".MD-logIn-btn"),h=document.querySelector(".MD-thanks"),S=document.querySelector(".MD-thanks-cross");function E(){y.classList.remove("active")}function q(){g.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{y.classList.add("active"),g.style.display="flex"}),f&&f.addEventListener("click",e=>{e.preventDefault(),q(),h.style.display="flex"}),_&&_.addEventListener("click",()=>{q(),E()}),S&&S.addEventListener("click",()=>{h.style.display="none",E()}),e=document.querySelector(".MD-overlay"),t=document.querySelector(".MD-thanks"),u=document.querySelector(".MD-thanks-cross"),document.querySelector("[data-modal-open]"),(n=document.querySelector(".footer-sub form"))&&n.addEventListener("submit",u=>{u.preventDefault(),n.querySelector(".footer-input").checkValidity()&&(e.classList.add("active"),t.style.display="flex")}),u&&u.addEventListener("click",()=>{t.style.display="none",e.classList.remove("active")});let w=document.querySelector(".dropdown__button"),x=document.querySelector(".dropdown"),L=document.querySelector(".theme-toggle__input");w&&x&&(w.onclick=function(){x.classList.toggle("is-open")}),L&&L.addEventListener("change",e=>{e.target.checked?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")});let C=document.querySelector(".MD-logIn-input1"),A=document.getElementById("userGreeting");A&&(A.textContent="Вітаємо, Гість!"),C&&(C.value="",C.addEventListener("input",function(){let e=C.value;""==e&&(e="Гість"),A&&(A.textContent="Вітаємо, "+e+"!"),localStorage.setItem("userName",e)}));let k=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],D=e=>Math.ceil(e/100),M=e=>`${e.name} ${e.surname} (${e.born}-${e.dead})`,N=[{text:"Які вчені народилися в 19 ст.",title:"Вчені, що народилися в 19 столітті",action:()=>k.filter(e=>19===D(e.born))},{text:"Знайти суму років скільки прожили всі вчені",title:"Сума років життя всіх вчених",action:()=>`${k.reduce((e,t)=>e+(t.dead-t.born),0)} \u{440}\u{43E}\u{43A}\u{456}\u{432}`},{text:"Відсортувати вчених за алфавітом",title:"Сортування за алфавітом",action:()=>[...k].sort((e,t)=>e.surname.localeCompare(t.surname))},{text:"Відсортувати вчених за кількістю прожитих років",title:"Сортування за кількістю прожитих років",action:()=>[...k].sort((e,t)=>e.dead-e.born-(t.dead-t.born))},{text:"Видалити з масива вчених що народилися в 15, 16 або 17 столітті",title:"Масив без вчених з 15, 16 або 17 століття",action:()=>k.filter(e=>![15,16,17].includes(D(e.born)))},{text:"Знайти вченого, який народився найпізніше",title:"Вчений, який народився найпізніше",action:()=>k.reduce((e,t)=>t.born>e.born?t:e)},{text:"Знайти рік народження Albert Einstein",title:"Рік народження Albert Einstein",action:()=>k.find(e=>"Albert"===e.name&&"Einstein"===e.surname).born},{text:"Знайти вчених, прізвища яких починаються на літеру “C”",title:"Прізвища починаються на C",action:()=>k.filter(e=>e.surname.startsWith("C"))},{text:"Видалити всіх вчених, ім’я яких починається на “A”",title:"Масив без імен на A",action:()=>k.filter(e=>!e.name.startsWith("A"))},{text:"Знайти вченого, який прожив найдовше і вченого, який прожив найменше",title:"Найдовше і найменше життя",action:()=>{let e,t;return e=k.reduce((e,t)=>t.dead-t.born>e.dead-e.born?t:e),t=k.reduce((e,t)=>t.dead-t.born<e.dead-e.born?t:e),[`\u{41D}\u{430}\u{439}\u{434}\u{43E}\u{432}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${M(e)}`,`\u{41D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${M(t)}`]}},{text:"Знайти вчених, в яких співпадають перші літери імені і прізвища",title:"Однакові перші літери імені та прізвища",action:()=>k.filter(e=>e.name[0]===e.surname[0])},{text:"Дізнатися чи всі вчені працювали в 19 столітті",title:"Чи всі вчені працювали в 19 столітті",action:()=>k.every(e=>e.born<=1900&&e.dead>=1801)?"Так, всі вчені працювали в 19 столітті":"Ні, не всі вчені працювали в 19 столітті"}],$=[{id:1,name:"Високосний калькулятор",category:"numerical",init:function(){let e=document.querySelector("#game-1");if(!e)return;e.innerHTML=`
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
  `;let t=e.querySelector("[data-leap-year-input]"),u=e.querySelector("[data-leap-year-button]"),n=e.querySelector("[data-leap-year-result]"),s=()=>{let e=Number(t.value);if(!Number.isInteger(e)||e<=0){n.textContent="Введіть коректний рік народження",n.classList.remove("is-success"),n.classList.add("is-error");return}if(e%4==0&&e%100!=0||e%400==0){n.textContent="Ви народилися у високосний рік!",n.classList.remove("is-error"),n.classList.add("is-success");return}n.textContent="Ви народилися не у високосний рік!",n.classList.remove("is-success"),n.classList.add("is-error")};u.addEventListener("click",s),t.addEventListener("keydown",e=>{"Enter"===e.key&&s()})}},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){let e=document.querySelector("#game-3"),t=0,u=0,n=["Камінь","Ножиці","Папір"];e.innerHTML=`
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
  `;let s=e.querySelectorAll(".rps__item"),a=e.querySelector(".rps__info"),i=e.querySelector("#computerScore"),r=e.querySelector("#userScore");s.forEach(e=>{e.addEventListener("click",()=>{let s=e.dataset.choice,c=n[Math.floor(Math.random()*n.length)],o=s===c?"draw":"Камінь"===s&&"Ножиці"===c||"Ножиці"===s&&"Папір"===c||"Папір"===s&&"Камінь"===c?"user":"computer";"user"===o?t++:"computer"===o&&u++,a.textContent=`${c}`,i.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${u}`,r.textContent=`\u{412}\u{438} - ${t}`})})}},{id:4,name:"Калькулятор",category:"numerical",init:function(){document.querySelector("#game-4").innerHTML=`<section class="section section-4">
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

    </section>`;let e=document.querySelector(".calc-input"),t=document.querySelector(".calc-input-second"),u=document.querySelector("input[readonly]"),n=document.querySelector(".calc-equal"),s=document.querySelectorAll(".calc-button"),a="+";s.forEach(e=>{e.addEventListener("click",()=>{a=e.textContent})}),n.addEventListener("click",()=>{let n,s=Number(e.value),i=Number(t.value);if(isNaN(s)||isNaN(i)){u.value="";return}switch(a){case"+":n=s+i;break;case"-":n=s-i;break;case"*":n=s*i;break;case"/":n=0!==i?s/i:alert("ашiбачка, введите правильные числа ")}u.value=n})}},{id:5,name:"Калькулятор часу",category:"numerical",init:function(){let e=document.querySelector("#game-5");if(!e)return;e.innerHTML=`
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
    <div class="divider"></div>
  `;let t=e.querySelector("#calcBtn"),u=e.querySelector("#secondsInput"),n=e.querySelector("#timeResult");function s(){let e=parseInt(u.value,10);if(isNaN(e)||e<0){n&&(n.textContent="0 дн. 00:00:00");return}let t=Math.floor(e/86400),s=e%86400,a=Math.floor(s/3600),i=Math.floor((s%=3600)/60),r=s%60;a<10&&(a="0"+a),i<10&&(i="0"+i),r<10&&(r="0"+r),n&&(n.textContent=t+" дн. "+a+":"+i+":"+r)}t&&u&&(t.onclick=function(){s()},u.onkeypress=function(e){"Enter"===e.key&&s()})}},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical",init:function(){document.querySelector("#game-8").innerHTML=`<section class="biggestNum">
<p class="biggestNum-zag">\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} 3 \u{447}\u{438}\u{441}\u{43B}\u{430}</p>
<ul class="biggestNum-inputs">
    <li><input class="biggestNum-input biggestNum-input-1" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-2" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-3" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
</ul>
<p class="biggestNum-result">\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - (\u{447}\u{438}\u{441}\u{43B}\u{43E})</p>
<div class="biggestNum-underline"></div>
</section>
`;let e=document.querySelector(".biggestNum-result"),t=document.querySelector(".biggestNum-input-1"),u=document.querySelector(".biggestNum-input-2"),n=document.querySelector(".biggestNum-input-3");function s(){let s=parseFloat(t.value),a=parseFloat(n.value),i=parseFloat(u.value);if(console.log(typeof s),"number"==typeof s&&"number"==typeof i&&"number"==typeof a){let t=Math.max(s,i,a);e.textContent=`\u{43D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E} \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}(${t})`}}document.querySelector(".biggestNum-input"),t.addEventListener("input",s),u.addEventListener("input",s),n.addEventListener("input",s)}},{id:9,name:"Наша команда",category:"acquaintance",init:function(){document.querySelector("#game-9").innerHTML=`
    <section class="ourTeam">
      <div class="container swiper-carusel__container">

        <h2 class="section__title">\u{41D}\u{430}\u{448}\u{430} \u{43A}\u{43E}\u{43C}\u{430}\u{43D}\u{434}\u{430}</h2>

        <div class="swiper teamSwiper">

          <div class="swiper-wrapper">

            ${b.map(e=>`
                <div class="swiper-slide">
                  <div class="content">
                    <img
                      class="team__img"
                      src="${e.photo}"
                      alt="${e.name}"
                    >

                    <h3 class="swiper__subtitle">
                      ${e.name}
                    </h3>

                    <p class="swiper__info">
                      ${e.description}
                    </p>
                  </div>
                </div>
              `).join("")}

          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>

        </div>
      </div>
    </section>
  `,new Swiper(".teamSwiper",{loop:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:40,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}},{id:10,name:"Вчений",category:"acquaintance",init:function(){let e=document.querySelector("#game-10");e&&(e.innerHTML=`
    <section class="guess-scientist">
      <h2 class="guess-scientist__title">\u{41E}\u{431}\u{435}\u{440}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{43E}\u{433}\u{43E}/\u{438}\u{445}</h2>
      <ul class="guess-scientist__cards">
        ${k.map(e=>`
              <li class="guess-scientist__card">
                <span class="guess-scientist__card-name">${e.name}</span>
                <span class="guess-scientist__card-name">${e.surname}</span>
              </li>
            `).join("")}
      </ul>
      <ul class="guess-scientist__tasks">
        ${N.map((e,t)=>`
              <li class="guess-scientist__task">
                <button class="guess-scientist__button" type="button" data-scientist-task="${t}">
                  ${e.text}
                </button>
              </li>
            `).join("")}
      </ul>
      <div class="guess-scientist__answer" data-scientist-answer>
        \u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{438} \u{43A}\u{43D}\u{43E}\u{43F}\u{43A}\u{443}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{431}\u{430}\u{447}\u{438}\u{442}\u{438} \u{440}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442}.
      </div>
    </section>
  `,e.querySelectorAll("[data-scientist-task]").forEach(t=>{t.addEventListener("click",t=>{let u=N[Number(t.currentTarget.dataset.scientistTask)],n=u.action();e.querySelector("[data-scientist-answer]").innerHTML=`
        <h3 class="guess-scientist__answer-title">${u.title}</h3>
        ${Array.isArray(n)?`<ul class="guess-scientist__answer-list">
      ${n.map(e=>`<li>${"string"==typeof e?e:M(e)}</li>`).join("")}
    </ul>`:"object"==typeof n?`<p class="guess-scientist__answer-text">${M(n)}</p>`:`<p class="guess-scientist__answer-text">${n}</p>`}
      `})}))}}],B=document.querySelector("[data-game-container]"),F=document.querySelectorAll(".dropdown__link");function H(e,t){if(!t)return void console.error("Контейнер не знайдено");if(0===e.length){t.innerHTML='<p class="no-games">Ігор у цій категорії поки немає</p>';return}t.innerHTML=e.reduce((e,t)=>e+`
      <section class="section section-${t.id}">
        <div class="container">
          <div class="game" id="game-${t.id}">
             <h3>${t.name}</h3> 
          </div>
        </div>
      </section>
    `,""),e.forEach(e=>{e.init&&e.init()})}H($,B),F.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let t=e.target.dataset.category;H("all"===t?$:$.filter(e=>e.category===t),B)})});
//# sourceMappingURL=coding-magic.70a46083.js.map
