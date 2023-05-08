function addTask() {
    var task = document.getElementById("inputTask").value;
    if (task === "") {
      alert("Skriv inn en oppgave!");
    } else {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(task);
      node.appendChild(textnode);
      document.getElementById("taskList").appendChild(node);
      node.onclick = function() {
        node.parentNode.removeChild(node);
      }
      document.getElementById("inputTask").value = "";
    }
  }