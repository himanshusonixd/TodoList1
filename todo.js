const input = document.getElementById("input")
const submit = document.getElementById("submit-btn")
const taskdisplay = document.getElementById("tasklist")

function show() {
  if(input.value==""){

  }else{
    let li = document.createElement("li")
    li.innerHTML = input.value
    taskdisplay.appendChild(li)
    let spanN = document.createElement("span")
    spanN.innerHTML = "&times;";
    li.appendChild(spanN)
    input.value = ""
  }
  savedata()
 
}

submit.addEventListener("click", show)

function check(e) {

  if (e.target.tagName === "LI") {

    e.target.classList.toggle("checked")
  
    savedata()
  }
  else if (e.target.tagName === "SPAN") {

    e.target.parentElement.remove()
  
    savedata()
  }


}

taskdisplay.addEventListener("click", check)

function savedata(){
  localStorage.setItem("notes", taskdisplay.innerHTML)
}

function getdata(){
  taskdisplay.innerHTML=localStorage.getItem("notes")
}

getdata()