let e,t,u,s,a=document.querySelector(".MD-overlay"),n=document.querySelector(".modalWindow"),c=document.querySelector(".MD-cross"),i=document.querySelector(".MD-logIn-btn"),r=document.querySelector(".MD-thanks"),l=document.querySelector(".MD-thanks-cross");function o(){a.classList.remove("active")}function d(){n.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{a.classList.add("active"),n.style.display="flex"}),i&&i.addEventListener("click",e=>{e.preventDefault(),d(),r.style.display="flex"}),c&&c.addEventListener("click",()=>{d(),o()}),l&&l.addEventListener("click",()=>{r.style.display="none",o()}),e=document.querySelector(".MD-overlay"),t=document.querySelector(".MD-thanks"),u=document.querySelector(".MD-thanks-cross"),(s=document.querySelector("[data-modal-open]"))&&s.addEventListener("click",()=>{e.classList.add("active"),t.style.display="flex"}),u&&u.addEventListener("click",()=>{t.style.display="none",e.classList.remove("active")});let m=document.querySelector(".dropdown__button"),p=document.querySelector(".dropdown"),y=document.querySelector(".theme-toggle__input");m&&p&&(m.onclick=function(){p.classList.toggle("is-open")}),y&&y.addEventListener("change",e=>{e.target.checked?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")});let v=document.querySelector(".MD-logIn-input1"),b=document.getElementById("userGreeting");b&&(b.textContent="Вітаємо, Гість!"),v&&(v.value="",v.addEventListener("input",function(){let e=v.value;""==e&&(e="Гість"),b&&(b.textContent="Вітаємо, "+e+"!"),localStorage.setItem("userName",e)}));let _=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],g=e=>Math.ceil(e/100),h=e=>`${e.name} ${e.surname} (${e.born}-${e.dead})`,E=[{text:"Які вчені народилися в 19 ст.",title:"Вчені, що народилися в 19 столітті",action:()=>_.filter(e=>19===g(e.born))},{text:"Знайти суму років скільки прожили всі вчені",title:"Сума років життя всіх вчених",action:()=>`${_.reduce((e,t)=>e+(t.dead-t.born),0)} \u{440}\u{43E}\u{43A}\u{456}\u{432}`},{text:"Відсортувати вчених за алфавітом",title:"Сортування за алфавітом",action:()=>[..._].sort((e,t)=>e.surname.localeCompare(t.surname))},{text:"Відсортувати вчених за кількістю прожитих років",title:"Сортування за кількістю прожитих років",action:()=>[..._].sort((e,t)=>e.dead-e.born-(t.dead-t.born))},{text:"Видалити з масива вчених що народилися в 15, 16 або 17 столітті",title:"Масив без вчених з 15, 16 або 17 століття",action:()=>_.filter(e=>![15,16,17].includes(g(e.born)))},{text:"Знайти вченого, який народився найпізніше",title:"Вчений, який народився найпізніше",action:()=>_.reduce((e,t)=>t.born>e.born?t:e)},{text:"Знайти рік народження Albert Einstein",title:"Рік народження Albert Einstein",action:()=>_.find(e=>"Albert"===e.name&&"Einstein"===e.surname).born},{text:"Знайти вчених, прізвища яких починаються на літеру “C”",title:"Прізвища починаються на C",action:()=>_.filter(e=>e.surname.startsWith("C"))},{text:"Видалити всіх вчених, ім’я яких починається на “A”",title:"Масив без імен на A",action:()=>_.filter(e=>!e.name.startsWith("A"))},{text:"Знайти вченого, який прожив найдовше і вченого, який прожив найменше",title:"Найдовше і найменше життя",action:()=>{let e,t;return e=_.reduce((e,t)=>t.dead-t.born>e.dead-e.born?t:e),t=_.reduce((e,t)=>t.dead-t.born<e.dead-e.born?t:e),[`\u{41D}\u{430}\u{439}\u{434}\u{43E}\u{432}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${h(e)}`,`\u{41D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${h(t)}`]}},{text:"Знайти вчених, в яких співпадають перші літери імені і прізвища",title:"Однакові перші літери імені та прізвища",action:()=>_.filter(e=>e.name[0]===e.surname[0])},{text:"Дізнатися чи всі вчені працювали в 19 столітті",title:"Чи всі вчені працювали в 19 столітті",action:()=>_.every(e=>e.born<=1900&&e.dead>=1801)?"Так, всі вчені працювали в 19 столітті":"Ні, не всі вчені працювали в 19 столітті"}],f=[{id:1,name:"Високосний калькулятор",category:"numerical",init:function(){let e=document.querySelector("#game-1");if(!e)return;e.innerHTML=`
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
  `;let t=e.querySelector("[data-leap-year-input]"),u=e.querySelector("[data-leap-year-button]"),s=e.querySelector("[data-leap-year-result]"),a=()=>{let e=Number(t.value);if(!Number.isInteger(e)||e<=0){s.textContent="Введіть коректний рік народження",s.classList.remove("is-success"),s.classList.add("is-error");return}if(e%4==0&&e%100!=0||e%400==0){s.textContent="Ви народилися у високосний рік!",s.classList.remove("is-error"),s.classList.add("is-success");return}s.textContent="Ви народилися не у високосний рік!",s.classList.remove("is-success"),s.classList.add("is-error")};u.addEventListener("click",a),t.addEventListener("keydown",e=>{"Enter"===e.key&&a()})}},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){let e=document.querySelector("#game-3"),t=0,u=0,s=["stone","scissors","paper"];e.innerHTML=`
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

            <p class="rps__info">\u{417}\u{440}\u{43E}\u{431}\u{438} \u{441}\u{432}\u{456}\u{439} \u{432}\u{438}\u{431}\u{456}\u{440}</p>
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
  `;let a=e.querySelectorAll(".rps__item"),n=e.querySelector(".rps__info"),c=e.querySelector("#computerScore"),i=e.querySelector("#userScore");a.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.choice,r=s[Math.floor(Math.random()*s.length)],l=a===r?"draw":"stone"===a&&"scissors"===r||"scissors"===a&&"paper"===r||"paper"===a&&"stone"===r?"user":"computer";"user"===l?(t++,n.textContent="Ти виграв раунд!"):"computer"===l?(u++,n.textContent="Комп'ютер виграв раунд! "):n.textContent="Нічия!",c.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${u}`,i.textContent=`\u{412}\u{438} - ${t}`})})}},{id:4,name:"Калькулятор",category:"numerical",init:function(){document.querySelector("#game-4").innerHTML=`<section class="section section-4">
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

    </section>`;let e=document.querySelector(".calc-input"),t=document.querySelector(".calc-input-second"),u=document.querySelector("input[readonly]"),s=document.querySelector(".calc-equal"),a=document.querySelectorAll(".calc-button"),n="+";a.forEach(e=>{e.addEventListener("click",()=>{n=e.textContent})}),s.addEventListener("click",()=>{let s,a=Number(e.value),c=Number(t.value);if(isNaN(a)||isNaN(c)){u.value="";return}switch(n){case"+":s=a+c;break;case"-":s=a-c;break;case"*":s=a*c;break;case"/":s=0!==c?a/c:alert("ашiбачка, введите правильные числа ")}u.value=s})}},{id:5,name:"Калькулятор часу",category:"numerical",init:function(){let e=document.querySelector("#game-5");if(!e)return;e.innerHTML=`
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
  `;let t=e.querySelector("#calcBtn"),u=e.querySelector("#secondsInput"),s=e.querySelector("#timeResult");function a(){let e=parseInt(u.value,10);if(isNaN(e)||e<0){s&&(s.textContent="0 дн. 00:00:00");return}let t=Math.floor(e/86400),a=e%86400,n=Math.floor(a/3600),c=Math.floor((a%=3600)/60),i=a%60;n<10&&(n="0"+n),c<10&&(c="0"+c),i<10&&(i="0"+i),s&&(s.textContent=t+" дн. "+n+":"+c+":"+i)}t&&u&&(t.onclick=function(){a()},u.onkeypress=function(e){"Enter"===e.key&&a()})}},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance",init:function(){let e=document.querySelector("#game-10");e&&(e.innerHTML=`
    <section class="guess-scientist">
      <h2 class="guess-scientist__title">\u{41E}\u{431}\u{435}\u{440}\u{438} \u{432}\u{447}\u{435}\u{43D}\u{43E}\u{433}\u{43E}/\u{438}\u{445}</h2>
      <ul class="guess-scientist__cards">
        ${_.map(e=>`
              <li class="guess-scientist__card">
                <span class="guess-scientist__card-name">${e.name}</span>
                <span class="guess-scientist__card-name">${e.surname}</span>
              </li>
            `).join("")}
      </ul>
      <ul class="guess-scientist__tasks">
        ${E.map((e,t)=>`
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
  `,e.querySelectorAll("[data-scientist-task]").forEach(t=>{t.addEventListener("click",t=>{let u=E[Number(t.currentTarget.dataset.scientistTask)],s=u.action();e.querySelector("[data-scientist-answer]").innerHTML=`
        <h3 class="guess-scientist__answer-title">${u.title}</h3>
        ${Array.isArray(s)?`<ul class="guess-scientist__answer-list">
      ${s.map(e=>`<li>${"string"==typeof e?e:h(e)}</li>`).join("")}
    </ul>`:"object"==typeof s?`<p class="guess-scientist__answer-text">${h(s)}</p>`:`<p class="guess-scientist__answer-text">${s}</p>`}
      `})}))}}],S=document.querySelector("[data-game-container]"),q=document.querySelectorAll(".dropdown__link");function x(e,t){if(!t)return void console.error("Контейнер не знайдено");if(0===e.length){t.innerHTML='<p class="no-games">Ігор у цій категорії поки немає</p>';return}t.innerHTML=e.reduce((e,t)=>e+`
      <section class="section section-${t.id}">
        <div class="container">
          <div class="game" id="game-${t.id}">
             <h3>${t.name}</h3> 
          </div>
        </div>
      </section>
    `,""),e.forEach(e=>{e.init&&e.init()})}x(f,S),q.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let t=e.target.dataset.category;x("all"===t?f:f.filter(e=>e.category===t),S)})});
//# sourceMappingURL=coding-magic.94366232.js.map
