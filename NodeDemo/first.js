// var a= 100;
// var b= 200;
// var c = a +b;
// console.log(`A is ${a} and B is ${b} `);
// console.log(`Sum is ${c}`);
const fs = require("fs");
function done(err,content){
    if(err){
        console.log("Can't read this file ",err);
    }
    else{
        console.log("Content is "+content);
    }
}
fs.readFile("first.js",done);
var a= 100;
var b= 200;
var c = a +b;
console.log(`A is ${a} and B is ${b} `);
console.log(`Sum is ${c}`);


 