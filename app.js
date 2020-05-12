function addMessage() {
     let text = document.getElementById("text-input").value; //.value gets input values
     console.log(text)

     let li = document.createElement("li")
     li.className = 'msg';
     li.textContent = text;
 
     document.getElementById("list").appendChild(li);
  }

  function clearMessage() {
    document.getElementById("text-input").value = "";
  }