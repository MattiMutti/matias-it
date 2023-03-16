let overskriftEl = document.querySelector("h1");
overskriftEl.addEventListener("click", skrivAntall);

let antallTrykk = 0;

function skrivAntall() {
  antallTrykk++;
  overskriftEl.innerHTML = "Du har trykket på meg " + antallTrykk + " ganger.";
}

let paragraphEL = document.querySelector("p");
paragraphEL.addEventListener("click", nyklasse);

let nyklasse = 0;

function nyklasse() {
  nyklasse++;
  
}