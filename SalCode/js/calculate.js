'use strict'
var basicSalary = 0;
function takeSalary(){
   // var basicSalary = document.querySelectorAll("input[type='text']")[0];
     basicSalary = document.querySelector("#sal").value;
     basicSalary = parseInt(basicSalary);
    document.querySelector("#result").innerText = basicSalary;
}

function print(){
    var object = {
        "hra":hra,
        "da":da,
        "ta":ta,
        "pf":pf,
        "tax":tax,

        "grosssal":gs,
        "netsal":ns

    };
    for(let key in object){
        fillResult(key,object[key]);
    }
    //fillResult("hra","hra");
    

}

function fillResult(id,fn){
    document.querySelector("#"+id).innerText = fn();
}

// function hra(){
//  return basicSalary * 0.30;
// }

const hra = ()=>basicSalary * 0.30;

const da = ()=>basicSalary * 0.10;
const ta = ()=>basicSalary * 0.20;
const pf = ()=>basicSalary * 0.10;
const gs = ()=>basicSalary + hra() + da() + ta() - pf();
const tax = ()=>gs() * 0.10;
const ns = ()=> gs() - tax();