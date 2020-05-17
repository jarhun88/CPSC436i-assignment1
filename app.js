// Add a "checked" symbol when clicking on a list item
function closeListItem() {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function addMessage() {
  let text = document.getElementById("text-input").value;
  console.log(text)
  if (text === "") 
    return

  let li = document.createElement("li")
  li.className = 'msg';
  li.textContent = text;
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  document.getElementById("list").appendChild(li).appendChild(span)
}

function clearMessage() {
  document.getElementById("text-input").value = "";
}

function clearList() {
  let ul = document.getElementById("list");
  while(ul.firstChild) ul.removeChild(ul.firstChild);
}

function loadDefaultMessages() {
  let defaultMessages = ["apple", "banana", "carrot"];
  for (word of defaultMessages) {
    console.log(word)
    let li = document.createElement("li")
    li.className = 'msg';
    li.textContent = word;

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener("click", function() {
      let ul = document.getElementById("list");
      ul.removeChild(this.parentElement)
    });
    span.appendChild(txt);
    document.getElementById("list").appendChild(li).appendChild(span)
    
  }
}

