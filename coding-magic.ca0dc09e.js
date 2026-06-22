var e;let t=document.querySelector(".MD-overlay"),u=document.querySelector(".modalWindow"),c=document.querySelector(".MD-cross"),n=document.querySelector(".MD-logIn-btn"),s=document.querySelector(".MD-thanks"),o=document.querySelector(".MD-thanks-cross");function a(){t.classList.remove("active")}function l(){u.style.display="none"}window.addEventListener("DOMContentLoaded",()=>{t.classList.add("active"),u.style.display="flex"}),n&&n.addEventListener("click",e=>{e.preventDefault(),l(),s.style.display="flex"}),c&&c.addEventListener("click",()=>{l(),a()}),o&&o.addEventListener("click",()=>{s.style.display="none",a()});let i=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game",init:function(){let e=document.querySelector("#game-3"),t=0,u=0,c=["stone","scissors","paper"];e.innerHTML=`
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
  `;let n=e.querySelectorAll(".rps__item"),s=e.querySelector(".rps__info"),o=e.querySelector("#computerScore"),a=e.querySelector("#userScore");n.forEach(e=>{e.addEventListener("click",()=>{let n=e.dataset.choice,l=c[Math.floor(Math.random()*c.length)],i=n===l?"draw":"stone"===n&&"scissors"===l||"scissors"===n&&"paper"===l||"paper"===n&&"stone"===l?"user":"computer";"user"===i?(t++,s.textContent="Ти виграв раунд!"):"computer"===i?(u++,s.textContent="Комп'ютер виграв раунд! "):s.textContent="Нічия!",o.textContent=`\u{41A}\u{43E}\u{43C}\u{43F}\u{2019}\u{44E}\u{442}\u{435}\u{440} - ${u}`,a.textContent=`\u{412}\u{438} - ${t}`})})}},{id:4,name:"Калькулятор",category:"numerical",init:function(){document.querySelector("#game-4").innerHTML=`<section class="section section-4">
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

    </section>`;let e=document.querySelector(".calc-input"),t=document.querySelector(".calc-input-second"),u=document.querySelector("input[readonly]"),c=document.querySelector(".calc-equal"),n=document.querySelectorAll(".calc-button"),s="+";n.forEach(e=>{e.addEventListener("click",()=>{s=e.textContent})}),c.addEventListener("click",()=>{let c,n=Number(e.value),o=Number(t.value);if(isNaN(n)||isNaN(o)){u.value="";return}switch(s){case"+":c=n+o;break;case"-":c=n-o;break;case"*":c=n*o;break;case"/":c=0!==o?n/o:alert("ашiбачка, введите правильные числа ")}u.value=c})}},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}],r=document.querySelector("[data-game-container]");r?(r.innerHTML=i.reduce((e,t)=>e+=`<section class="section section-${t.id}">

<div class="container">

  <div class="game" id="game-${t.id}">

  </div>

</div>

        </section>`,""),i.forEach(e=>{e.init&&e.init()})):console.error("контейнер незнайдено");let d=document.querySelector(".dropdown__button"),m=document.querySelector(".dropdown"),p=document.querySelector(".theme-toggle__input");d.onclick=function(){m.classList.toggle("is-open")},document.querySelector(".theme-toggle__input"),p.addEventListener("change",e=>{e.target.checked?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")});let v=document.querySelector(".MD-logIn-input1"),y=document.getElementById("userGreeting");y.textContent="Вітаємо, Гість!",v.value="",v.addEventListener("input",function(){let e=v.value;""==e&&(e="Гість"),y.textContent="Вітаємо, "+e+"!",localStorage.setItem("userName",e)});let g=document.querySelector("#game-5");e=`
  <div class="container">
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
    </div></div>
   
  `,g?g.innerHTML=e:console.log("Упс! Немає такого контейнера");let _=document.getElementById("calcBtn"),h=document.getElementById("secondsInput");function b(){let e=parseInt(h.value,10);if(isNaN(e)||e<0){document.getElementById("timeResult").textContent="0 дн. 00:00:00";return}let t=Math.floor(e/86400),u=e%86400,c=Math.floor(u/3600),n=Math.floor((u%=3600)/60),s=u%60;c<10&&(c="0"+c),n<10&&(n="0"+n),s<10&&(s="0"+s),document.getElementById("timeResult").textContent=t+" дн. "+c+":"+n+":"+s}_&&h&&(_.onclick=function(){b()},h.onkeypress=function(e){"Enter"==e.key&&b()});
//# sourceMappingURL=coding-magic.ca0dc09e.js.map
