var ul = document.getElementById("list");
var li;
var itemId;
var item;




 function addTarefa() {
    if (document.getElementById("tarefa").value != "") {
    item = document.getElementById("tarefa");
    itemId = ul.childElementCount;
    li = createItemElement(item.value, itemId);
    li.appendChild(createRemoveTarefaBtn(itemId));
    ul.appendChild(li);

    
}

}

function removeTarefa (itemId) {
    for (let i = 0; i < ul.children.length ; i++) {
        if (ul.children[i].getAttribute("index") == itemId) {
            ul.children[i].remove();
        }
    }
}

function createItemElement(itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

 function createRemoveTarefaBtn(itemId) {
   let btn = document.createElement("button");
   btn.setAttribute("onclick", "removeTarefa("+itemId+")"); 
   btn.innerHTML ="X";
   return btn;
}