// Henter elementet der vi skal legge til tabellen
let hovedEl = document.querySelector("#hoved");

// Array med objekter
let favorittband = [
  {"Navn": "Children of bodom", "Sjanger": "Melodic Death Metal", "Land": "Finland"},
  {"Navn": "Gaerea", "Sjanger": "Black Metal", "Land": "Portugal"},
  {"Navn": "Slaughter to Prevail", "Sjanger": "Deathcore", "Land": "Russland"},
  {"Navn": "Killswitch Engage", "Sjanger": "Metalcore", "Land": "USA"},
  {"Navn": "Suicide Silence", "Sjanger": "Deathcore", "Land": "USA"},
];

// Lager tabellen (et <table>-element)
let tabellEl = document.createElement("table");

// Lager en overskriftsrad (<thead> og <tr>)
let theadEl = document.createElement("thead");
let trEl = document.createElement("tr");

// Henter ut objektet i første rad i arrayen og bruker egenskapsnavnene som overskrifter
for (let egenskap in favorittband[0]) {
  // Lager et <th>-element for hver egenskap
  let thEl = document.createElement("th");
  thEl.innerHTML = egenskap;
  trEl.appendChild(thEl);
}

// Legger til <tr>- og <thead>-elementene i tabellen
theadEl.appendChild(trEl);
tabellEl.appendChild(theadEl);

// Lager tabellinnholdet (<tbody>)
let tbodyEl = document.createElement("tbody");

// Går gjennom hele objektlista og lager én rad for hvert objekt
for (let i = 0; i < favorittband.length; i++) {
  // Lager et <tr>-element
  let trEl = document.createElement("tr");

  // Går gjennom hver egenskap i objektet
  for (let egenskap in favorittband[i]) {
    // Lager et <td>-element
    let tdEl = document.createElement("td");
    // Legger til verdien til gjeldende egenskap i <td>-elementet
    tdEl.innerHTML = favorittband[i][egenskap];
    // Legger til <td>-elementet i <tr>-elementet
    trEl.appendChild(tdEl);
  }

  // Legger til <tr>-elementet i <tbody>-elementet
  tbodyEl.appendChild(trEl);
}

// Legger til <tbody>-elementet i tabellen
tabellEl.appendChild(tbodyEl);

// Legger til tabellen i #hoved-elementet
hovedEl.appendChild(tabellEl);