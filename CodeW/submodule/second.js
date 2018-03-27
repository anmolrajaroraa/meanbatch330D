const x = require("../first");
console.log("X is ",x);
x.show();
console.log("Add is ",x.addition(100,200));
console.log("PI is ",x.PI);
var obj = new x.test();
obj.print();
obj.display();
//x();