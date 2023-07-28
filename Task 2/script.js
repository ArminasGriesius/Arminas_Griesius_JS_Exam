/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const els = {
  btnEl: document.getElementById("btn__element"),
  btnState: document.getElementById("btn__state"),
};
let counter = 0;
els.btnState.textContent = parseInt(els.btnState.textContent);

els.btnEl.addEventListener("click", clickCount);

function clickCount() {
  counter++;
  els.btnState.textContent = counter;
  console.log("counter ===", counter);
}
