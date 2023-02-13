/*
Overskrift
*/

let overskrift = document.querySelector("h1"); 
overskrift.innerHTML = "<h1> Dette er overskriften </h1>";

/*
Avsnitt
*/

let avsnitt1 = document.querySelector("p1"); 
avsnitt1.innerHTML = "<p1> Dette er ett avsnitt </p1>";

/*
Liste
*/

let bodyEl = document.querySelector("div");
let liste = "";

liste += "<ol>";
liste += "<li> Fleinsopp </li>";
liste += "<li> Fluesopp </li>";
liste += "<li> Skivesopp </li>";
liste += "</ol>";

bodyEl.innerHTML += liste;