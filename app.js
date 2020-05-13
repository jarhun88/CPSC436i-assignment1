function addMessage() {
     let text = document.getElementById("text-input").value; 
     console.log(text)
     if (text === "") 
      return

     let li = document.createElement("li")
     li.className = 'msg';
     li.textContent = text;
 
     document.getElementById("list").appendChild(li);
  }

  function clearMessage() {
    document.getElementById("text-input").value = "";
  }

  function clearList() {
    let ul = document.getElementById("list");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
  }