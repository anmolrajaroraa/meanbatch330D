
const initCap = (str)=>str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();


const sayWelcome = (firstName,lastName)=>initCap(firstName) + " "+initCap(lastName);

// function sayWelcome(){
   
//     var fullName = initCap(firstName) + " "+initCap(lastName);
//     return fullName;
//     //document.querySelector("#result").innerHTML = fullName;
// }