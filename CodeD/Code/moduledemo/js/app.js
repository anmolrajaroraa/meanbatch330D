const app = angular.module("myapp",["secondmodule"]);
app.controller("myctrl",($scope,myfactory,$rootScope,myfact)=>{
    $scope.compute = ()=>{
        $rootScope.result = myfactory.compute($scope.firstno,$scope.secondno);
    }
});
app.controller("myctrl2",($scope,myfact)=>{
    $scope.msg = "Inside Second Controller";
})

app.factory("myfact",()=>{
    var object = {
        result:0,
        setResult(result){
            this.result = result;
        },
        getResult(){
            return this.result;
        }
    }
    return object;
})