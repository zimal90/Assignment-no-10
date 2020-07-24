function submit(){
var submit = document.getElementById("input")
var ol = document.createElement("ol")
var oltext = document.createTextNode(input.value)

ol.appendChild(oltext)
list.appendChild(ol)
input.value = ""


var delbtn = document.createElement("button")
var btnText = document.createTextNode("Delete")
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(btnText)
ol.appendChild(delbtn)



var editbtn = document.createElement("button")
var btnText = document.createTextNode("Edit")
editbtn.setAttribute("class","btn")
editbtn.setAttribute("onclick","editItem(this)")
editbtn.appendChild(btnText)
ol.appendChild(editbtn)

// console.log(ol)
// console.log(submit.value)
}
var list = document.getElementById("list")

function deleteItem(e){
e.parentNode.remove()
}
function deleteAll(){
list.innerHTML =""
}

function editItem(e){
    var val =prompt("Enter ur value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue =val;
}
        


















