var list = document.getElementById("list")

function addTodo(){
    var todo_item = document.getElementById("todo-item")

    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    list.appendChild(li)
   
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("Class" , "btn")
    delbtn.setAttribute("onclick", "deleteitem(this)")
    delbtn.appendChild(delText)
    
    li.appendChild(delbtn)
    
    var editbtn = document.createElement("button") 
    var editText = document.createTextNode("Edit")
    editbtn.setAttribute("class" , "btn")
    editbtn.setAttribute("onclick" , "editItem(this)")
    editbtn.appendChild(editText)
    
    li.appendChild(editbtn)



    todo_item.value = ""
    console.log(li);

}

function deleteitem(e){
    e.parentNode.remove()
}

function deleteall(){
    list.innerHTML = ""
}

function editItem(e){
    
    var edit = e.parentNode.firstChild.nodeValue;
    var addEd = prompt("Enter Edit Value",edit);

    e.parentNode.firstChild.nodeValue = addEd;
    console.log(e.parentNode.firstChild);

}



