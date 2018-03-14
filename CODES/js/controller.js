//window.addEventListener("DOMContentLoaded",()=>console.log("DOM LOADED>>"));
window.addEventListener("load",init);
function init(){
    updateCounts();
    bindEvents();
}
function bindEvents(){
    //console.log("Bind Event Call");
    document.querySelector("#add").addEventListener("click",addItem);
    document.querySelector("#delete").addEventListener("click",markDeleteItems);
}
function markDeleteItems(){
    itemOperations.delete();
    printTable();
    updateCounts();

}

function printTable(){
   var itemArray =  itemOperations.getItems();
   document.querySelector("#items").innerHTML="";
   itemArray.forEach(print);
}

function addItem(){
    //console.log("Add Item Call");
    var obj = new Item();
    for(let key in obj){
        if(key=='isMarked'){
            continue;
        }
      obj[key] = document.querySelector(`#${key}`).value;
        }
        itemOperations.add(obj);
        updateCounts();
        print(obj);
       // console.log("Obj is ",obj);
}

function print(obj){
    var tbody = document.querySelector("#items");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in obj){
        if(key=='isMarked'){
            continue;
        }
        tr.insertCell(index).innerHTML =  obj[key];
        index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon("images/delete.png",toggleDelete,obj.id));
    td.appendChild(createIcon("images/edit.png",edit,obj.id));
}
function toggleDelete(){
    var id = parseInt(this.getAttribute("item-id"));
    console.log("Toggle Delete Called... ",id);
    var tr = this.parentNode.parentNode;
    tr.classList.toggle("red");
    itemOperations.toggle(id);
    updateCounts();
}
function updateCounts(){
    document.querySelector("#total").innerHTML  =itemOperations.getItems().length;
    document.querySelector("#mark").innerHTML =itemOperations.totalMark();
    document.querySelector("#unmark").innerHTML=itemOperations.getItems().length - itemOperations.totalMark();
}
function edit(){
    console.log("This Is Edit Called..",this.getAttribute("item-id"));
   
}
function createIcon(path,fn,id){
    var img = document.createElement("img");
    img.src = path;
    img.addEventListener("click",fn);
    img.className="hand";
    img.setAttribute("item-id",id);
    return img;
}
