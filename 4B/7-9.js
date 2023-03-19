let dorbilderEl = document.querySelectorAll("img");

// Går gjennom alle bildene og legger på samme lytter på hver av dem
for (let i = 0; i < dorbilderEl.length; i++) {
  dorbilderEl[i].addEventListener("click", sjekkDor);
}

function sjekkDor(e) {
  console.log(e.target);
  console.log(e.type);
}

function sjekkDor(e) {
  let trykketDor = e.target;
  console.log(trykketDor.id);

  if (trykketDor.id === "dor1") {
    console.log("Du trykket på dør 1.");
  } else if (trykketDor.id === "dor2") {
    console.log("Du trykket på dør 2.");
  } else {
    console.log("Du trykket på dør 3.");
  }
}