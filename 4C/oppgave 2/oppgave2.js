// Henter elementer
let tall1El = document.querySelector("#tall1");
let tall2El = document.querySelector("#tall2");
let tall3El = document.querySelector("#tall3");
let tall4El = document.querySelector("#tall4");
let tall5El = document.querySelector("#tall5");
let knappEl = document.querySelector("button");
let resultatEl = document.querySelector("#resultat");

// Legger til lytter på knappen
knappEl.addEventListener("click", beregn);

// Funksjon som beregner og skriver ut summen på nettsiden
function beregn() {
  let tall1 = Number(tall1El.value);
  let tall2 = Number(tall2El.value);
  let tall3 = Number(tall3El.value);
  let tall4 = Number(tall4El.value);
  let tall5 = Number(tall5El.value);
  let sum = tall1 + tall2+ tall3 + tall4 + tall5;

  resultatEl.innerHTML = "Summen blir " + sum;
}