function show(){
    console.log("this is show");

}
module.exports.show = show;
class Test{
    print(){
        console.log("this is print..");
    }
    display(){
        console.log("this is display");
    }
}
const PI = 3.14;
module.exports.PI = PI;
function add(x,y){
    return x + y;
}
module.exports.addition = add;
module.exports.test = Test;
console.log("Export Done...");