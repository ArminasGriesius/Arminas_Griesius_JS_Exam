/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
"use strict";
console.log("script.js file was loaded");

const els = {
  form: document.getElementById("form"),
  kilos: document.getElementById("search"),
  submit: document.getElementById("submit-btn"),
  output: document.getElementById("output"),
};

let lb = "";
let g = "";
let oz = "";

els.form.addEventListener("submit", svarGramUnc);

function svarGramUnc() {
  event.preventDefault();
  const svarai = els.kilos.value * 2.2046;
  const gramai = els.kilos.value / 0.001;
  const uncijos = els.kilos.value * 35.274;
  lb = `Jusu svoris svarais yra : ${svarai.toFixed(1)} svaru`;
  g = `Jusu svoris gramais yra : ${gramai.toFixed(1)} gramu`;
  oz = `Jusu svoris uncijomis yra : ${uncijos.toFixed(1)} unciju`;
  els.output.innerHTML = "";
  const h2El1 = document.createElement("h2");
  const h2El2 = document.createElement("h2");
  const h2El3 = document.createElement("h2");
  h2El1.classList.add("center");
  h2El2.classList.add("center");
  h2El3.classList.add("center");
  h2El1.append(lb);
  h2El2.append(g);
  h2El3.append(oz);
  output.append(h2El1, h2El2, h2El3);
  return lb, g;
}
