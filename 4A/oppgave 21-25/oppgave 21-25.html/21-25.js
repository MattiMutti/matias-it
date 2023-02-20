let bodyEl = document.querySelector("body");

let liste = "";

let liste1El = document.createElement("ul");
let liste2El = document.createElement("li");
let liste3El = document.createElement("li");
let liste4El = document.createElement("ul");

listeEl.id = "liste"
liste.setAttribute("class", "red");
bodyEl.appendChild(listeEl);



let bodyEl = document.querySelector("body");

tabell += "<table>";
tabell += "<thead>";
tabell += "<tr>";
tabell += "<th>Overskrift 1</th>";
tabell += "<th>Overskrift 2</th>";
tabell += "</tr>";
tabell += "</thead>";
tabell += "<tbody>";
tabell += "<tr>";
tabell += "<td>Innhold 1</td>";
tabell += "<td>Innhold 2</td>";
tabell += "</tr>";
tabell += "</tbody>";
tabell += "</table>";

bodyEl.innerHTML += tabell;
