const app2 = angular.module("secondmodule",[]);
app2.factory("myfactory",()=>{
    var object = {
        compute(x,y){
            return parseInt(x) + parseInt(y);
        }
    };
    
    return object;
})