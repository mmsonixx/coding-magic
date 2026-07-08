let e,t,u,a;function s(e){return e&&e.__esModule?e.default:e}function n(e){return new URL(r+(e=l.i?.[e]||e),import.meta.url).toString()}var i="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},r="./",o={},c={},l=i.parcelRequire1ad7;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in c){var t=c[e];delete c[e];var u={id:e,exports:{}};return o[e]=u,t.call(u.exports,u,u.exports),u.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){c[e]=t},i.parcelRequire1ad7=l),l.register,Object.assign(l.i??={},{"2jajS":"sonya.8ce5b47b.webp",J9Ooa:"dima.93854aff.webp","6TJib":"member.92369c67.webp","2kXtr":"alexander.5d62ae35.webp","5Mkkr":"roma.63b6bfca.webp","7BdM2":"yaroslav.e4482830.webp"});var d={};d=n("2jajS");var m={};m=n("J9Ooa");var p={};p=n("6TJib");var v={};v=n("2kXtr");var b={};b=n("5Mkkr");var _={};_=n("7BdM2");let g=[{photo:s(d),name:"Соня",description:"Team lead, Section: Камінь-ножиці-папір,Наша команда"},{photo:s(_),name:"Ярослав",description:"Scrum Master,Section: Обери вченого/их,Перевір в який рік ти народився"},{photo:s(m),name:"Діма",description:"Developers,Section: Header,Калькулятор часу"},{photo:s(b),name:"Рома",description:"Developers,Section: Футбол,Google динозавр"},{photo:s(p),name:"Лука",description:"Developers, Section: Footer,Калькулятор"},{photo:s(v),name:"Олексій",description:"Developers,Section: Вгадай число, яке загадав комп’ютер"}],h=document.querySelector(".MD-overlay"),y=document.querySelector(".modalWindow"),f=document.querySelector(".MD-cross"),S=document.querySelector(".MD-logIn-btn"),E=document.querySelector(".MD-thanks"),q=document.querySelector(".MD-thanks-cross");function A(){h.classList.remove("active")}function w(){y.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{h.classList.add("active"),y.style.display="flex"}),S&&S.addEventListener("click",e=>{e.preventDefault(),w(),E.style.display="flex"}),f&&f.addEventListener("click",()=>{w(),A()}),q&&q.addEventListener("click",()=>{E.style.display="none",A()}),e=document.querySelector(".MD-overlay"),t=document.querySelector(".MD-thanks"),u=document.querySelector(".MD-thanks-cross"),document.querySelector("[data-modal-open]"),(a=document.querySelector(".footer-sub form"))&&a.addEventListener("submit",u=>{u.preventDefault(),a.querySelector(".footer-input").checkValidity()&&(e.classList.add("active"),t.style.display="flex")}),u&&u.addEventListener("click",()=>{t.style.display="none",e.classList.remove("active")});class L{constructor(e,t){this.dino=e,this.gameArea=t,this.gameOver=!1,this.isJumping=!1,this.gameModalStart()}init(){document.addEventListener("keydown",e=>{"Space"!==e.code||this.isJumping||this.gameOver||(e.preventDefault(),this.jump())}),this.gameArea.addEventListener("mousedown",()=>{this.isJumping||this.gameOver||this.jump()}),this.renderObstacles(),this.checkCollision()}jump(){this.isJumping=!0,this.dino.classList.add("jump"),setTimeout(()=>{this.isJumping=!1,this.dino.classList.remove("jump")},500)}checkCollision(){let e=()=>{if(!0===this.gameOver)return;let t=this.gameArea.querySelector(".cactus"),u=t.getBoundingClientRect(),a=this.dino.getBoundingClientRect();a.right>u.left&&a.left<u.right&&a.bottom>u.top?this.endGame(t):requestAnimationFrame(e)};requestAnimationFrame(e)}renderObstacles(){let e=document.createElement("div");e.classList.add("cactus"),e.style.height=this.randomHeight(),this.gameArea.appendChild(e);let t=()=>{e.removeEventListener("animationend",t),e.remove(),this.gameOver||this.renderObstacles()};e.addEventListener("animationend",t)}randomHeight(){return`${Math.floor(31*Math.random()+30)}px`}endGame(e){e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}createModal(e,t,u){let a=`
      <div class="dino__modal">
        <p class="dino__message">${e}</p>
        <button class="dino__start button">${t}</button>
      </div>
        `;this.gameArea.insertAdjacentHTML("beforeend",a),this.gameArea.querySelector(".dino__modal").classList.add("show"),this.gameArea.querySelector(".dino__start").addEventListener("click",u)}gameModalStart(){this.createModal("Зіграємо?","Почати гру!",()=>{let e=this.gameArea.querySelector(".dino__modal");e.classList.remove("show"),setTimeout(()=>{e.remove()},250),this.init()})}gameOverModal(){this.createModal("Ви програли!","Спробувати знову",()=>this.restartGame())}restartGame(){this.gameArea.querySelector(".dino__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.renderObstacles(),this.checkCollision()}}let x=document.querySelector(".dropdown__button"),M=document.querySelector(".dropdown"),C=document.querySelector(".theme-toggle__input");x&&M&&(x.onclick=function(){M.classList.toggle("is-open")}),C&&C.addEventListener("change",e=>{e.target.checked?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")});let k=document.querySelector(".MD-logIn-input1"),D=document.getElementById("userGreeting");D&&(D.textContent="Вітаємо, Гість!"),k&&(k.value="",k.addEventListener("input",function(){let e=k.value;""==e&&(e="Гість"),D&&(D.textContent="Вітаємо, "+e+"!"),localStorage.setItem("userName",e)}));let $=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],F=e=>Math.ceil(e/100),H=e=>`${e.name} ${e.surname} (${e.born}-${e.dead})`,B=[{text:"Які вчені народилися в 19 ст.",title:"Вчені, що народилися в 19 столітті",action:()=>$.filter(e=>19===F(e.born))},{text:"Знайти суму років скільки прожили всі вчені",title:"Сума років життя всіх вчених",action:()=>`${$.reduce((e,t)=>e+(t.dead-t.born),0)} \u{440}\u{43E}\u{43A}\u{456}\u{432}`},{text:"Відсортувати вчених за алфавітом",title:"Сортування за алфавітом",action:()=>[...$].sort((e,t)=>e.surname.localeCompare(t.surname))},{text:"Відсортувати вчених за кількістю прожитих років",title:"Сортування за кількістю прожитих років",action:()=>[...$].sort((e,t)=>e.dead-e.born-(t.dead-t.born))},{text:"Видалити з масива вчених що народилися в 15, 16 або 17 столітті",title:"Масив без вчених з 15, 16 або 17 століття",action:()=>$.filter(e=>![15,16,17].includes(F(e.born)))},{text:"Знайти вченого, який народився найпізніше",title:"Вчений, який народився найпізніше",action:()=>$.reduce((e,t)=>t.born>e.born?t:e)},{text:"Знайти рік народження Albert Einstein",title:"Рік народження Albert Einstein",action:()=>$.find(e=>"Albert"===e.name&&"Einstein"===e.surname).born},{text:"Знайти вчених, прізвища яких починаються на літеру “C”",title:"Прізвища починаються на C",action:()=>$.filter(e=>e.surname.startsWith("C"))},{text:"Видалити всіх вчених, ім’я яких починається на “A”",title:"Масив без імен на A",action:()=>$.filter(e=>!e.name.startsWith("A"))},{text:"Знайти вченого, який прожив найдовше і вченого, який прожив найменше",title:"Найдовше і найменше життя",action:()=>{let e,t;return e=$.reduce((e,t)=>t.dead-t.born>e.dead-e.born?t:e),t=$.reduce((e,t)=>t.dead-t.born<e.dead-e.born?t:e),[`\u{41D}\u{430}\u{439}\u{434}\u{43E}\u{432}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${H(e)}`,`\u{41D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${H(t)}`]}},{text:"Знайти вчених, в яких співпадають перші літери імені і прізвища",title:"Однакові перші літери імені та прізвища",action:()=>$.filter(e=>e.name[0]===e.surname[0])},{text:"Дізнатися чи всі вчені працювали в 19 столітті",title:"Чи всі вчені працювали в 19 столітті",action:()=>$.every(e=>e.born<=1900&&e.dead>=1801)?"Так, всі вчені працювали в 19 столітті":"Ні, не всі вчені працювали в 19 столітті"}],T=[{id:1,name:"Високосний калькулятор",category:"numerical",init:function(){let e=document.querySelector("#game-1");if(!e)return;e.innerHTML=`
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
  `;let t=e.querySelector("[data-leap-year-input]"),u=e.querySelector("[data-leap-year-button]"),a=e.querySelector("[data-leap-year-result]"),s=()=>{let e=Number(t.value);if(!Number.isInteger(e)||e<=0){a.textContent="Введіть коректний рік народження",a.classList.remove("is-success"),a.classList.add("is-error");return}if(e%4==0&&e%100!=0||e%400==0){a.textContent="Ви народилися у високосний рік!",a.classList.remove("is-error"),a.classList.add("is-success");return}a.textContent="Ви народилися не у високосний рік!",a.classList.remove("is-success"),a.classList.add("is-error")};u.addEventListener("click",s),t.addEventListener("keydown",e=>{"Enter"===e.key&&s()})}},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){let e=document.querySelector("#game-3"),t=0,u=0,a=["Камінь","Ножиці","Папір"];e.innerHTML=`
    <section class="rockPaperScissors">
      <div class="container">
        <h2 class="rps__title">\u{41A}\u{430}\u{43C}\u{456}\u{43D}\u{44C} - \u{43D}\u{43E}\u{436}\u{438}\u{446}\u{456} - \u{43F}\u{430}\u{43F}\u{456}\u{440}</h2>

        <div class="rps__container"> 
          <div class="rps__box">
            <ul class="rps__list">
              <li class="rps__item" data-choice="\u{41A}\u{430}\u{43C}\u{456}\u{43D}\u{44C}">
                <svg class="rps__icon">
                  <use href="#icon-stone"></use>
                </svg>
              </li>

              <li class="rps__item" data-choice="\u{41D}\u{43E}\u{436}\u{438}\u{446}\u{456}">
                <svg class="rps__icon">
                  <use href="#icon-scissors"></use>
                </svg>
              </li>

              <li class="rps__item" data-choice="\u{41F}\u{430}\u{43F}\u{456}\u{440}">
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
  `;let s=e.querySelectorAll(".rps__item"),n=e.querySelector(".rps__info"),i=e.querySelector("#computerScore"),r=e.querySelector("#userScore");s.forEach(e=>{e.addEventListener("click",()=>{let s=e.dataset.choice,o=a[Math.floor(Math.random()*a.length)],c=s===o?"draw":"Камінь"===s&&"Ножиці"===o||"Ножиці"===s&&"Папір"===o||"Папір"===s&&"Камінь"===o?"user":"computer";"user"===c?t++:"computer"===c&&u++,n.textContent=`${o}`,i.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${u}`,r.textContent=`\u{412}\u{438} - ${t}`})})}},{id:4,name:"Калькулятор",category:"numerical",init:function(){document.querySelector("#game-4").innerHTML=`<section class="section section-4">
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

    </section>`;let e=document.querySelector(".calc-input"),t=document.querySelector(".calc-input-second"),u=document.querySelector("input[readonly]"),a=document.querySelector(".calc-equal"),s=document.querySelectorAll(".calc-button"),n="+";s.forEach(e=>{e.addEventListener("click",()=>{n=e.textContent})}),a.addEventListener("click",()=>{let a,s=Number(e.value),i=Number(t.value);if(isNaN(s)||isNaN(i)){u.value="";return}switch(n){case"+":a=s+i;break;case"-":a=s-i;break;case"*":a=s*i;break;case"/":a=0!==i?s/i:alert("ашiбачка, введите правильные числа ")}u.value=a})}},{id:5,name:"Калькулятор часу",category:"numerical",init:function(){let e=document.querySelector("#game-5");if(!e)return;e.innerHTML=`
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
  `;let t=e.querySelector("#calcBtn"),u=e.querySelector("#secondsInput"),a=e.querySelector("#timeResult");function s(){let e=parseInt(u.value,10);if(isNaN(e)||e<0){a&&(a.textContent="0 дн. 00:00:00");return}let t=Math.floor(e/86400),s=e%86400,n=Math.floor(s/3600),i=Math.floor((s%=3600)/60),r=s%60;n<10&&(n="0"+n),i<10&&(i="0"+i),r<10&&(r="0"+r),a&&(a.textContent=t+" дн. "+n+":"+i+":"+r)}t&&u&&(t.onclick=function(){s()},u.onkeypress=function(e){"Enter"===e.key&&s()})}},{id:6,name:"Google динозаврик",category:"game",init:function(){document.querySelector("#game-6").innerHTML=`
          <h2 class="dinoGame__title">Google \u{434}\u{438}\u{43D}\u{43E}\u{437}\u{430}\u{432}\u{440}</h2>
         <div id="dinoGameArea" class="dinoGame__box">
            <div id="dino" class="dinoGame__character">
            </div>
            </div>
    `;let e=document.querySelector("#dinoGameArea");new L(document.querySelector("#dino"),e)}},{id:7,name:"Футбол",category:"game",init:function(){document.querySelector("#game-7").innerHTML=`
       <h2 class="football-title">\u{424}\u{443}\u{442}\u{431}\u{43E}\u{43B}</h2>
   <div class="football-area">
    <div class="football-ball"></div>
   </div>
    `,console.log("d")}},{id:8,name:"Найбільше число",category:"numerical",init:function(){let e=document.querySelector("#game-2");if(!e)return;e.innerHTML=`
    <section class="guess-number">
      <h2 class="guess-number__title">\u{412}\u{433}\u{430}\u{434}\u{430}\u{439} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} \u{43A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440}</h2>
      <div class="guess-number__content">
        <div class="guess-number__field">
          <input
            class="guess-number__input"
            type="number"
            min="1"
            max="10"
            placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}"
            data-number-input
          />
          <button class="guess-number__button" type="button" aria-label="\u{41F}\u{435}\u{440}\u{435}\u{432}\u{456}\u{440}\u{438}\u{442}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}" data-number-button>
            <svg class="guess-number__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 4a6.5 6.5 0 0 1 5.17 10.44l4.45 4.44-1.24 1.24-4.44-4.45A6.5 6.5 0 1 1 10.5 4Zm0 1.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" />
            </svg>
          </button>
        </div>
        <p class="guess-number__result" data-number-result></p>
      </div>
      <div class="guess-number__divider"></div>
    </section>
  `;let t=e.querySelector("[data-number-input]"),u=e.querySelector("[data-number-button]"),a=e.querySelector("[data-number-result]"),s=()=>{let e=Number(t.value),u=Math.floor(10*Math.random())+1;if(!Number.isInteger(e)||e<1||e>10){a.textContent="Введіть ціле число від 1 до 10!",a.className="guess-number__result is-error";return}e===u?(a.textContent=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${u})`,a.className="guess-number__result is-success"):(a.textContent=`\u{412}\u{438} \u{43F}\u{440}\u{43E}\u{433}\u{440}\u{430}\u{43B}\u{438}, \u{43A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} (${u})`,a.className="guess-number__result is-error"),t.value=""};u.addEventListener("click",s),t.addEventListener("keydown",e=>{"Enter"===e.key&&s()})}},{id:9,name:"Наша команда",category:"acquaintance",init:function(){document.querySelector("#game-9").innerHTML=`
    <section class="ourTeam">
      <div class="container swiper-carusel__container">

        <h2 class="section__title">\u{41D}\u{430}\u{448}\u{430} \u{43A}\u{43E}\u{43C}\u{430}\u{43D}\u{434}\u{430}</h2>

        <div class="swiper teamSwiper">

          <div class="swiper-wrapper">

            ${g.map(e=>`
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
        ${$.map(e=>`
              <li class="guess-scientist__card">
                <span class="guess-scientist__card-name">${e.name}</span>
                <span class="guess-scientist__card-name">${e.surname}</span>
              </li>
            `).join("")}
      </ul>
      <ul class="guess-scientist__tasks">
        ${B.map((e,t)=>`
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
  `,e.querySelectorAll("[data-scientist-task]").forEach(t=>{t.addEventListener("click",t=>{let u=B[Number(t.currentTarget.dataset.scientistTask)],a=u.action();e.querySelector("[data-scientist-answer]").innerHTML=`
        <h3 class="guess-scientist__answer-title">${u.title}</h3>
        ${Array.isArray(a)?`<ul class="guess-scientist__answer-list">
      ${a.map(e=>`<li>${"string"==typeof e?e:H(e)}</li>`).join("")}
    </ul>`:"object"==typeof a?`<p class="guess-scientist__answer-text">${H(a)}</p>`:`<p class="guess-scientist__answer-text">${a}</p>`}
      `})}))}}],N=document.querySelector("[data-game-container]"),O=document.querySelectorAll(".dropdown__link");function j(e,t){if(!t)return void console.error("Контейнер не знайдено");if(0===e.length){t.innerHTML='<p class="no-games">Ігор у цій категорії поки немає</p>';return}t.innerHTML=e.reduce((e,t)=>e+`
      <section class="section section-${t.id}">
        <div class="container">
          <div class="game" id="game-${t.id}">
          </div>
        </div>
      </section>
    `,""),e.forEach(e=>{e.init&&e.init()})}j(T,N),O.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let t=e.target.dataset.category;j("all"===t?T:T.filter(e=>e.category===t),N)})});
//# sourceMappingURL=coding-magic.2eddc455.js.map
