
let label1El = document.querySelector("#label1");
let option0El = document.querySelector("#tall2");
let tall3El = document.querySelector("#tall3");
let tall4El = document.querySelector("#tall4");
let tall5El = document.querySelector("#tall5");

knappEl.addEventListener("click", beregn);

function beregn() {
  let label1 = Number(label1El.value);
  let tall2 = Number(tall2El.value);
  let tall3 = Number(tall3El.value);
  let tall4 = Number(tall4El.value);
  let tall5 = Number(tall5El.value);

let knappEl = document.querySelector("button");
let resultatEl = document.querySelector("#resultat");
let sum = label1 + tall2+ tall3 + tall4 + tall5;

  resultatEl.innerHTML = "Summen blir " + sum;
}


