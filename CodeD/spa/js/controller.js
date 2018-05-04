app.controller("homectrl",function($scope){
    $scope.message = "I am a HOme Controller";
})
app.controller("aboutctrl",function($scope,$routeParams){
    $scope.name = $routeParams.name;
    $scope.age = $routeParams.age;
})