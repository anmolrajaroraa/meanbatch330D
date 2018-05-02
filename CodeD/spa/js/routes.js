app.config(($routeProvider,$locationProvider)=>{
   $locationProvider.hashPrefix(''); 
$routeProvider.when("/",{
    templateUrl:'../views/home.html',
    controller:"homectrl"
}).when("/about/:name/:age",{
    templateUrl:'../views/about.html',
    controller:'aboutctrl'
}).when("/contact",{
    templateUrl:'../views/contact.html'
}).otherwise({
    template:'Wrong URI'
})
})