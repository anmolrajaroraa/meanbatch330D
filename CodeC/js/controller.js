//window.addEventListener("DOMContentLoaded",()=>console.log("DOM LOADED>>"));
window.addEventListener("load",bindEvents);
function bindEvents(){
    //console.log("Bind Event Call");
    document.querySelector("#add").addEventListener("click",addItem);
}

function addItem(){
    //console.log("Add Item Call");
    var obj = new Item();
    for(let key in obj){
      obj[key] = document.querySelector(`#${key}`).value;
        }
        itemOperations.add(obj);
        print(obj);
       // console.log("Obj is ",obj);
}

function print(obj){
    var tbody = document.querySelector("#items");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in obj){
        tr.insertCell(index).innerHTML =  obj[key];
        index++;
    }
}