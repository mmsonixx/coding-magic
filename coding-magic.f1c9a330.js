let e,t,u,s;function a(e){return e&&e.__esModule?e.default:e}function i(e){return new URL(r+(e=c.i?.[e]||e),import.meta.url).toString()}var n="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},r="./",l={},o={},c=n.parcelRequire1ad7;null==c&&((c=function(e){if(e in l)return l[e].exports;if(e in o){var t=o[e];delete o[e];var u={id:e,exports:{}};return l[e]=u,t.call(u.exports,u,u.exports),u.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequire1ad7=c),c.register,Object.assign(c.i??={},{"2jajS":"sonya.8ce5b47b.webp",J9Ooa:"dima.93854aff.webp",e5wIb:"luca.d355131e.webp","2kXtr":"alexander.5d62ae35.webp","5Mkkr":"roma.63b6bfca.webp","7BdM2":"yaroslav.e4482830.webp"});var d={};d=i("2jajS");var m={};m=i("J9Ooa");var p={};p=i("e5wIb");var v={};v=i("2kXtr");var g={};g=i("5Mkkr");var b={};b=i("7BdM2");let y=[{photo:a(d),name:"Соня",description:"Team lead, Section: Камінь-ножиці-папір,Наша команда"},{photo:a(b),name:"Ярослав",description:"Scrum Master,Section: Обери вченого/их,Перевір в який рік ти народився"},{photo:a(m),name:"Діма",description:"Developers,Section: Header,Калькулятор часу"},{photo:a(g),name:"Рома",description:"Developers,Section: Футбол,Google динозавр"},{photo:a(p),name:"Лука",description:"Developers, Section: Footer,Калькулятор"},{photo:a(v),name:"Олексій",description:"Developers,Section: Вгадай число, яке загадав комп’ютер"}],h=document.querySelector(".MD-overlay"),_=document.querySelector(".modalWindow"),f=document.querySelector(".MD-cross"),E=document.querySelector(".MD-logIn-btn"),S=document.querySelector(".MD-thanks"),x=document.querySelector(".MD-thanks-cross");function q(){h.classList.remove("active")}function w(){_.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{h.classList.add("active"),_.style.display="flex"}),E&&E.addEventListener("click",e=>{e.preventDefault(),w(),S.style.display="flex"}),f&&f.addEventListener("click",()=>{w(),q()}),x&&x.addEventListener("click",()=>{S.style.display="none",q()}),e=document.querySelector(".MD-overlay"),t=document.querySelector(".MD-thanks"),u=document.querySelector(".MD-thanks-cross"),document.querySelector("[data-modal-open]"),(s=document.querySelector(".footer-sub form"))&&s.addEventListener("submit",u=>{u.preventDefault(),s.querySelector(".footer-input").checkValidity()&&(e.classList.add("active"),t.style.display="flex")}),u&&u.addEventListener("click",()=>{t.style.display="none",e.classList.remove("active")});class L{constructor(e,t){this.dino=e,this.gameArea=t,this.gameOver=!1,this.isJumping=!1,this.gameModalStart()}init(){document.addEventListener("keydown",e=>{"Space"!==e.code||this.isJumping||this.gameOver||(e.preventDefault(),this.jump())}),this.gameArea.addEventListener("mousedown",()=>{this.isJumping||this.gameOver||this.jump()}),this.renderObstacles(),this.checkCollision()}jump(){this.isJumping=!0,this.dino.classList.add("jump"),setTimeout(()=>{this.isJumping=!1,this.dino.classList.remove("jump")},500)}checkCollision(){let e=()=>{if(!0===this.gameOver)return;let t=this.gameArea.querySelector(".cactus"),u=t.getBoundingClientRect(),s=this.dino.getBoundingClientRect();s.right>u.left&&s.left<u.right&&s.bottom>u.top?this.endGame(t):requestAnimationFrame(e)};requestAnimationFrame(e)}renderObstacles(){let e=document.createElement("div");e.classList.add("cactus"),e.style.height=this.randomHeight(),this.gameArea.appendChild(e);let t=()=>{e.removeEventListener("animationend",t),e.remove(),this.gameOver||this.renderObstacles()};e.addEventListener("animationend",t)}randomHeight(){return`${Math.floor(31*Math.random()+30)}px`}endGame(e){e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}createModal(e,t,u){let s=`
      <div class="dino__modal">
        <p class="dino__message">${e}</p>
        <button class="dino__start button">${t}</button>
      </div>
        `;this.gameArea.insertAdjacentHTML("beforeend",s),this.gameArea.querySelector(".dino__modal").classList.add("show"),this.gameArea.querySelector(".dino__start").addEventListener("click",u)}gameModalStart(){this.createModal("Зіграємо?","Почати гру!",()=>{let e=this.gameArea.querySelector(".dino__modal");e.classList.remove("show"),setTimeout(()=>{e.remove()},250),this.init()})}gameOverModal(){this.createModal("Ви програли!","Спробувати знову",()=>this.restartGame())}restartGame(){this.gameArea.querySelector(".dino__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.renderObstacles(),this.checkCollision()}}let C=document.querySelector(".dropdown__button"),A=document.querySelector(".dropdown"),M=document.querySelector(".theme-toggle__input");C&&A&&(C.onclick=function(){A.classList.toggle("is-open")}),M&&M.addEventListener("change",e=>{e.target.checked?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")});let k=document.querySelector(".MD-logIn-input1"),B=document.getElementById("userGreeting");B&&(B.textContent="Вітаємо, Гість!"),k&&(k.value="",k.addEventListener("input",function(){let e=k.value;""==e&&(e="Гість"),B&&(B.textContent="Вітаємо, "+e+"!"),localStorage.setItem("userName",e)}));let D=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],F=e=>Math.ceil(e/100),N=e=>`${e.name} ${e.surname} (${e.born}-${e.dead})`,$=[{text:"Які вчені народилися в 19 ст.",title:"Вчені, що народилися в 19 столітті",action:()=>D.filter(e=>19===F(e.born))},{text:"Знайти суму років скільки прожили всі вчені",title:"Сума років життя всіх вчених",action:()=>`${D.reduce((e,t)=>e+(t.dead-t.born),0)} \u{440}\u{43E}\u{43A}\u{456}\u{432}`},{text:"Відсортувати вчених за алфавітом",title:"Сортування за алфавітом",action:()=>[...D].sort((e,t)=>e.surname.localeCompare(t.surname))},{text:"Відсортувати вчених за кількістю прожитих років",title:"Сортування за кількістю прожитих років",action:()=>[...D].sort((e,t)=>e.dead-e.born-(t.dead-t.born))},{text:"Видалити з масива вчених що народилися в 15, 16 або 17 столітті",title:"Масив без вчених з 15, 16 або 17 століття",action:()=>D.filter(e=>![15,16,17].includes(F(e.born)))},{text:"Знайти вченого, який народився найпізніше",title:"Вчений, який народився найпізніше",action:()=>D.reduce((e,t)=>t.born>e.born?t:e)},{text:"Знайти рік народження Albert Einstein",title:"Рік народження Albert Einstein",action:()=>D.find(e=>"Albert"===e.name&&"Einstein"===e.surname).born},{text:"Знайти вчених, прізвища яких починаються на літеру “C”",title:"Прізвища починаються на C",action:()=>D.filter(e=>e.surname.startsWith("C"))},{text:"Видалити всіх вчених, ім’я яких починається на “A”",title:"Масив без імен на A",action:()=>D.filter(e=>!e.name.startsWith("A"))},{text:"Знайти вченого, який прожив найдовше і вченого, який прожив найменше",title:"Найдовше і найменше життя",action:()=>{let e,t;return e=D.reduce((e,t)=>t.dead-t.born>e.dead-e.born?t:e),t=D.reduce((e,t)=>t.dead-t.born<e.dead-e.born?t:e),[`\u{41D}\u{430}\u{439}\u{434}\u{43E}\u{432}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${N(e)}`,`\u{41D}\u{430}\u{439}\u{43C}\u{435}\u{43D}\u{448}\u{435} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}: ${N(t)}`]}},{text:"Знайти вчених, в яких співпадають перші літери імені і прізвища",title:"Однакові перші літери імені та прізвища",action:()=>D.filter(e=>e.name[0]===e.surname[0])},{text:"Дізнатися чи всі вчені працювали в 19 столітті",title:"Чи всі вчені працювали в 19 столітті",action:()=>D.every(e=>e.born<=1900&&e.dead>=1801)?"Так, всі вчені працювали в 19 столітті":"Ні, не всі вчені працювали в 19 столітті"}];function H(){document.querySelector("#game-8").innerHTML=`<section class="biggestNum">
<p class="biggestNum-zag">\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} 3 \u{447}\u{438}\u{441}\u{43B}\u{430}</p>
<ul class="biggestNum-inputs">
    <li><input class="biggestNum-input biggestNum-input-1" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-2" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
    <li><input class="biggestNum-input biggestNum-input-3" placeholder="\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{447}\u{438}\u{441}\u{43B}\u{43E}" type="number"></li>
</ul>
<p class="biggestNum-result">\u{41D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E}, \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} - (\u{447}\u{438}\u{441}\u{43B}\u{43E})</p>
<div class="biggestNum-underline"></div>
</section>
`;let e=document.querySelector(".biggestNum-result"),t=document.querySelector(".biggestNum-input-1"),u=document.querySelector(".biggestNum-input-2"),s=document.querySelector(".biggestNum-input-3");function a(){let a=parseFloat(t.value),i=parseFloat(s.value),n=parseFloat(u.value);if(console.log(typeof a),"number"==typeof a&&"number"==typeof n&&"number"==typeof i){let t=Math.max(a,n,i);e.textContent=`\u{43D}\u{430}\u{439}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} \u{447}\u{438}\u{441}\u{43B}\u{43E} \u{44F}\u{43A}\u{435} \u{432}\u{438} \u{432}\u{432}\u{435}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}(${t})`}}document.querySelector(".biggestNum-input"),t.addEventListener("input",a),u.addEventListener("input",a),s.addEventListener("input",a)}let T=[{id:1,name:"Високосний калькулятор",category:"numerical",init:function(){let e=document.querySelector("#game-1");if(!e)return;e.innerHTML=`
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
    </section>
  `;let t=e.querySelector("[data-leap-year-input]"),u=e.querySelector("[data-leap-year-button]"),s=e.querySelector("[data-leap-year-result]"),a=()=>{let e=Number(t.value);if(!Number.isInteger(e)||e<=0){s.textContent="Введіть коректний рік народження",s.classList.remove("is-success"),s.classList.add("is-error");return}if(e%4==0&&e%100!=0||e%400==0){s.textContent="Ви народилися у високосний рік!",s.classList.remove("is-error"),s.classList.add("is-success");return}s.textContent="Ви народилися не у високосний рік!",s.classList.remove("is-success"),s.classList.add("is-error")};u.addEventListener("click",a),t.addEventListener("keydown",e=>{"Enter"===e.key&&a()})}},{id:2,name:"Вгадай число",category:"numerical",init:H},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){let e=document.querySelector("#game-3"),t=0,u=0,s=["Камінь","Ножиці","Папір"];e.innerHTML=`
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
  `;let a=e.querySelectorAll(".rps__item"),i=e.querySelector(".rps__info"),n=e.querySelector("#computerScore"),r=e.querySelector("#userScore");a.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.choice,l=s[Math.floor(Math.random()*s.length)],o=a===l?"draw":"Камінь"===a&&"Ножиці"===l||"Ножиці"===a&&"Папір"===l||"Папір"===a&&"Камінь"===l?"user":"computer";"user"===o?t++:"computer"===o&&u++,i.textContent=`${l}`,n.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${u}`,r.textContent=`\u{412}\u{438} - ${t}`})})}},{id:4,name:"Калькулятор",category:"numerical",init:function(){document.querySelector("#game-4").innerHTML=`<section class="section section-4">
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

    </section>`;let e=document.querySelector(".calc-input"),t=document.querySelector(".calc-input-second"),u=document.querySelector("input[readonly]"),s=document.querySelector(".calc-equal"),a=document.querySelectorAll(".calc-button"),i="+";a.forEach(e=>{e.addEventListener("click",()=>{i=e.textContent})}),s.addEventListener("click",()=>{let s,a=Number(e.value),n=Number(t.value);if(isNaN(a)||isNaN(n)){u.value="";return}switch(i){case"+":s=a+n;break;case"-":s=a-n;break;case"*":s=a*n;break;case"/":s=0!==n?a/n:alert("На нуль ділити не можна. Введіть інакше число.")}u.value=s})}},{id:5,name:"Калькулятор часу",category:"numerical",init:function(){let e=document.querySelector("#game-5");if(!e)return;e.innerHTML=`
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
  `;let t=e.querySelector("#calcBtn"),u=e.querySelector("#secondsInput"),s=e.querySelector("#timeResult");function a(){let e=parseInt(u.value,10);if(isNaN(e)||e<0){s&&(s.textContent="0 дн. 00:00:00");return}let t=Math.floor(e/86400),a=e%86400,i=Math.floor(a/3600),n=Math.floor((a%=3600)/60),r=a%60;i<10&&(i="0"+i),n<10&&(n="0"+n),r<10&&(r="0"+r),s&&(s.textContent=t+" дн. "+i+":"+n+":"+r)}t&&u&&(t.onclick=function(){a()},u.onkeypress=function(e){"Enter"===e.key&&a()})}},{id:6,name:"Google динозаврик",category:"game",init:function(){document.querySelector("#game-6").innerHTML=`
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
    `;let e=document.querySelector(".football-area"),t=document.querySelector(".football-ball"),u=e=>{let u=e.offsetX,s=e.offsetY;t.style.left=`${u-25}px`,t.style.top=`${s-25}px`};t.addEventListener("mousedown",()=>{t.style.pointerEvents="none",e.addEventListener("mousemove",u)}),document.addEventListener("mouseup",()=>{t.style.pointerEvents="auto",e.removeEventListener("mousemove",u)})}},{id:8,name:"Найбільше число",category:"numerical",init:H},{id:9,name:"Наша команда",category:"acquaintance",init:function(){document.querySelector("#game-9").innerHTML=`
    <section class="ourTeam">
      <div class="container swiper-carusel__container">

        <h2 class="section__title">\u{41D}\u{430}\u{448}\u{430} \u{43A}\u{43E}\u{43C}\u{430}\u{43D}\u{434}\u{430}</h2>

        <div class="swiper teamSwiper">

          <div class="swiper-wrapper">

            ${y.map(e=>`
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
        ${D.map(e=>`
              <li class="guess-scientist__card">
                <span class="guess-scientist__card-name">${e.name}</span>
                <span class="guess-scientist__card-name">${e.surname}</span>
              </li>
            `).join("")}
      </ul>
      <ul class="guess-scientist__tasks">
        ${$.map((e,t)=>`
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
  `,e.querySelectorAll("[data-scientist-task]").forEach(t=>{t.addEventListener("click",t=>{let u=$[Number(t.currentTarget.dataset.scientistTask)],s=u.action();e.querySelector("[data-scientist-answer]").innerHTML=`
        <h3 class="guess-scientist__answer-title">${u.title}</h3>
        ${Array.isArray(s)?`<ul class="guess-scientist__answer-list">
      ${s.map(e=>`<li>${"string"==typeof e?e:N(e)}</li>`).join("")}
    </ul>`:"object"==typeof s?`<p class="guess-scientist__answer-text">${N(s)}</p>`:`<p class="guess-scientist__answer-text">${s}</p>`}
      `})}))}},{id:11,name:"ticTacToe ",category:"game",init:function(){let e=document.getElementById("game-11");if(!e)return;e.innerHTML=`
    <svg style="display: none;">
      <symbol id="icon-tik" viewBox="0 0 32 32">
        <path d="M11.303 10.697c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l0.707-0.707zM20.496 21.303c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-0.707 0.707zM10.596 20.596c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l-0.707-0.707zM21.203 11.404c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l0.707 0.707zM10.596 11.404l9.899 9.899 0.707-0.707-9.899-9.899-0.707 0.707zM11.303 21.303l9.899-9.899-0.707-0.707-9.899 9.899 0.707 0.707z"></path>
      </symbol>
      <symbol id="icon-tok" viewBox="0 0 32 32">
        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
      </symbol>
    </svg>
    <div class="tic-tac-toe-section">
        <div class="dividr"></div>
        <h2 class="title-ttt">\u{425}\u{440}\u{435}\u{441}\u{442}\u{438}\u{43A}\u{438} - \u{41D}\u{443}\u{43B}\u{438}\u{43A}\u{438}</h2>
        
        <div class="ttt-mode-selection">
            <button class="ttt-mode-btn ttt-active" id="ttt-mode-pvp">\u{413}\u{440}\u{430}\u{442}\u{438} \u{432}\u{434}\u{432}\u{43E}\u{445}</button>
            <button class="ttt-mode-btn" id="ttt-mode-pve">\u{413}\u{440}\u{430}\u{442}\u{438} \u{437} \u{431}\u{43E}\u{442}\u{43E}\u{43C}</button>
        </div>

        <div class="game-status" id="ttt-status">\u{425}\u{43E}\u{434}\u{438}\u{442}\u{44C} \u{413}\u{440}\u{430}\u{432}\u{435}\u{446}\u{44C} 1 (\u{425}\u{440}\u{435}\u{441}\u{442}\u{438}\u{43A})</div>
        
        <div class="ttt-board" id="ttt-board">
            <div class="ttt-cell" data-index="0"></div>
            <div class="ttt-cell" data-index="1"></div>
            <div class="ttt-cell" data-index="2"></div>
            <div class="ttt-cell" data-index="3"></div>
            <div class="ttt-cell" data-index="4"></div>
            <div class="ttt-cell" data-index="5"></div>
            <div class="ttt-cell" data-index="6"></div>
            <div class="ttt-cell" data-index="7"></div>
            <div class="ttt-cell" data-index="8"></div>
        </div>

        <button class="ttt-btn" id="ttt-reset">\u{41F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{437}\u{430}\u{43D}\u{43E}\u{432}\u{43E}</button>
        <div class="dividr"></div>
    </div>
         
  `;let t=e.querySelector("#ttt-board"),u=e.querySelectorAll(".ttt-cell"),s=e.querySelector("#ttt-status"),a=e.querySelector("#ttt-reset"),i=e.querySelector("#ttt-mode-pvp"),n=e.querySelector("#ttt-mode-pve"),r="X",l=["","","","","","","","",""],o=!0,c=!1,d=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function m(e,t){l[t]=r;let u=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=document.createElementNS("http://www.w3.org/2000/svg","use"),i="X"===r?"#icon-tik":"#icon-tok";a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i),u.setAttribute("viewBox","0 0 32 32"),u.classList.add("ttt-image"),u.appendChild(a),e.appendChild(u),function(){let e=!1;for(let t of d){let u=l[t[0]],s=l[t[1]],a=l[t[2]];if(""!==u&&""!==s&&""!==a&&u===s&&s===a){e=!0;break}}if(e){c?s.textContent="X"===r?"Ви перемогли! 🎉":"Бот переміг! 🤖":s.textContent=`\u{41F}\u{435}\u{440}\u{435}\u{43C}\u{456}\u{433} \u{413}\u{440}\u{430}\u{432}\u{435}\u{446}\u{44C} (${"X"===r?"1":"2"})! \u{1F389}`,o=!1;return}if(!l.includes("")){s.textContent="Нічия! 🤝",o=!1;return}r="X"===r?"O":"X",c?s.textContent="X"===r?"Ваш хід (Хрестик)":"Бот думає... 🤖":s.textContent=`\u{425}\u{43E}\u{434}\u{438}\u{442}\u{44C} \u{413}\u{440}\u{430}\u{432}\u{435}\u{446}\u{44C} ${"X"===r?"1 (Хрестик)":"2 (Нулик)"}`}()}function p(){if(!o)return;let t=[];if(l.forEach((e,u)=>{""===e&&t.push(u)}),0===t.length)return;let u=t[Math.floor(Math.random()*t.length)];m(e.querySelector(`.ttt-cell[data-index="${u}"]`),u)}function v(){r="X",l=["","","","","","","","",""],o=!0,c?s.textContent="Ваш хід (Хрестик)":s.textContent="Ходить Гравець 1 (Хрестик)",u.forEach(e=>e.innerHTML="")}function g(e){(c=e)?(n.classList.add("ttt-active"),i.classList.remove("ttt-active")):(i.classList.add("ttt-active"),n.classList.remove("ttt-active")),v()}t.addEventListener("click",function(e){let t=e.target.closest(".ttt-cell");if(!t)return;let u=parseInt(t.getAttribute("data-index"));""!==l[u]||!o||(!c||"O"!==r)&&(m(t,u),o&&c&&"O"===r&&setTimeout(p,500))}),a.addEventListener("click",v),i.addEventListener("click",()=>g(!1)),n.addEventListener("click",()=>g(!0))}},{id:12,name:"guess num of pc ",category:"game",init:function(){let e=document.querySelector("#game-12");if(!e)return;e.innerHTML=`
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
    </section>
  `;let t=e.querySelector("[data-leap-year-input]"),u=e.querySelector("[data-leap-year-button]"),s=e.querySelector("[data-leap-year-result]"),a=()=>{let e=Number(t.value),u=Math.floor(10*Math.random())+1;if(!Number.isInteger(e)||e<1||e>10){s.textContent="Введіть ціле число від 1 до 10!",s.className="guess-number__result is-error";return}e===u?(s.textContent=`\u{412}\u{456}\u{442}\u{430}\u{44E}, \u{432}\u{438} \u{432}\u{433}\u{430}\u{434}\u{430}\u{43B}\u{438} \u{447}\u{438}\u{441}\u{43B}\u{43E}! (${u})`,s.className="guess-number__result is-success"):(s.textContent=`\u{412}\u{438} \u{43F}\u{440}\u{43E}\u{433}\u{440}\u{430}\u{43B}\u{438}, \u{43A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} \u{437}\u{430}\u{433}\u{430}\u{434}\u{430}\u{432} (${u})`,s.className="guess-number__result is-error"),t.value=""};u.addEventListener("click",a),t.addEventListener("keydown",e=>{"Enter"===e.key&&a()})}}],O=document.querySelector("[data-game-container]"),j=document.querySelectorAll(".dropdown__link");function G(e,t){if(!t)return void console.error("Контейнер не знайдено");if(0===e.length){t.innerHTML='<p class="no-games">Ігор у цій категорії поки немає</p>';return}t.innerHTML=e.reduce((e,t)=>e+`
      <section class="section section-${t.id}">
        <div class="container">
          <div class="game" id="game-${t.id}">
          </div>
        </div>
      </section>
    `,""),e.forEach(e=>{e.init&&e.init()})}G(T,O),j.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let t=e.target.dataset.category;G("all"===t?T:T.filter(e=>e.category===t),O)})});
//# sourceMappingURL=coding-magic.f1c9a330.js.map
