window.addEventListener("load",bindEvents);
function bindEvents(){
    var txtBoxes = document.querySelectorAll("input[type='text']");
    txtBoxes[0].focus();
    
    document.querySelector("#greet").addEventListener("click",takeNames);
    document.querySelector("#clear").addEventListener("click",()=>{
        var txtBoxes = document.querySelectorAll("input[type='text']");
        
        for(let i = 0; i<txtBoxes.length; i++){
            txtBoxes[i].value = "";
        }
        txtBoxes[0].focus();
    });
}

function takeNames(){
    var firstName = document.querySelector("#firstname").value;
    var lastName = document.querySelector("#lastname").value;
    var fullName = sayWelcome(firstName, lastName);
    print(fullName);
}

function print(fullName){
    var h2 = document.querySelectorAll("h2")[0];
    var span = document.createElement("span");
    //span.innerHTML = fullName;
    span.innerHTML = `<i>${fullName}</i>`;
    h2.appendChild(span);

}

