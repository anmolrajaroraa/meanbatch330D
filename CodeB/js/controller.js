window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#basicsalary").addEventListener("change",compute);
}
function compute(){
    var basicSalary = this.value; 
    console.log("Salary is ",basicSalary);
    salaryCalculator.takeSalary(parseInt(basicSalary));
    var arr = ["hra","da","ta","gs","pf","ns"];
    var table = document.createElement("table");
    for(let a of arr){
    var tr = table.insertRow();
    tr.insertCell(0).innerHTML = a.toUpperCase();
    tr.insertCell(1).innerHTML = salaryCalculator[a]();
    }
    document.body.appendChild(table);

    // document.querySelector("#hra").innerHTML = salaryCalculator.hra();
    // document.querySelector("#da").innerHTML = salaryCalculator.da();
    // document.querySelector("#ta").innerHTML = salaryCalculator.ta();
    // document.querySelector("#pf").innerHTML = salaryCalculator.pf();
    // document.querySelector("#gs").innerHTML = salaryCalculator.gs();
    // document.querySelector("#tax").innerHTML = salaryCalculator.tax();
    // document.querySelector("#ns").innerHTML = salaryCalculator.ns();
}