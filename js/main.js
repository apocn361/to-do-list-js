// CLOSE BUTTON
let taskList = document.getElementsByTagName("li")

for (let i = 0; i < taskList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}

// CLOSE BUTTON ACTIONS
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// ADD BUTTON ACTIONS
function newElement() {
    let liDOM = document.createElement("li");
    let taskValue = document.querySelector("#task").value;
    
    let x = document.createTextNode(taskValue);
    liDOM.appendChild(x);
    
    
    if ( taskValue.trim() == "" ) {
        $('.error.toast').toast("show");
        
    } else {
        let task = document.querySelector("#task")
        document.getElementById("list").appendChild(liDOM);
        $('.success').toast("show");
        document.querySelector("#task").value = "";
    }
    
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
  
}

// ITEMS ACTIONS
let list = document.querySelector("ul") 
list.addEventListener("click",function(event){
    if ( event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
},false );

