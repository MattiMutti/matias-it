/*
Oppgave 9 og 10, lager dokument og deretter bruker innerhtml til å erstatte innholdet
*/

let overskrift = document.querySelector("h1"); 
let avsnitt1 = document.querySelector("p1"); 
let avsnitt2 = document.querySelector("p2"); 

overskrift.innerHTML = "<h1> Dette avsnittet erstatter alt innhold </h1>";
avsnitt1.innerHTML = "<p1> Dette avsnittet erstatter alt innhold </p1>";
avsnitt2.innerHTML = "<p2> Dette avsnittet erstatter alt innhold </p2>";

console.log(overskrift)
console.log(avsnitt1)
console.log(avsnitt2)


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

let liste = document.querySelector("body")

let tabell = "";

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

body.innerHTML += "<li id='liste'>liste</li>";
body.innerHTML += "<ul id='liste'>gulerotkake</ul>";
body.innerHTML += "<ul id='liste'>fleinsopp</ul>";

