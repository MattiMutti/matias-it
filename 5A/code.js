function addTask() {
    const task = document.querySelector("#inputTask").value;
    if (task === "") {
    alert("Skriv inn en oppgave!");
    } else {
      const node = document.createElement("LI");
      const textnode = document.createTextNode(task);
      node.appendChild(textnode);
      document.querySelector("taskList").appendChild(node);
      node.onclick = function() {
        node.parentNode.removeChild(node);
      }
      document.querySelector("#inputTask").value = "";
    }
  }