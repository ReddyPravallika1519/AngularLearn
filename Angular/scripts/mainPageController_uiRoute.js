//ngRoute is the module dependency
var mod = angular.module("Module1", ["ui.router"]);
mod.config( ["$stateProvider", "$urlRouterProvider",function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider
    .state('/', {
    url: '/',
    template: `<h1>Welcome to Main page</h1>
            <p>
            Click on the links to redirect to specifiied links
            </p>`
    })
    .state("login", {
        url : '/login123',
        templateUrl: 'templates/login.html',
        controller : 'logincontroller'
    })
    .state("home", {
        url : '/homepage',
        templateUrl: 'templates/home.html'
    
    })
    .state("register", {
        url : '/registerpage' ,
        templateUrl: 'templates/register.html',
        controller : 'registercontroller'
    
    })
    .state("dashboard", {
        url : '/dashboard' ,
        templateUrl: 'templates/dashboard.html',
        controller : 'httpController'
    
    })
   
    ;        
				
}]);
mod.controller("registercontroller", function($scope) {
    $scope.register = function(pswd, cpswd)
    {
        if(pswd==cpswd)
        {
            alert("Registered successfully");
        }
        else
        {
            alert("Pswd and cpswd are not matched");
        }
    }
});
mod.controller("logincontroller", function($scope){
    $scope.submit = function(name, pswd)
    {
        if(name=="abc" && pswd =="123")
        {
            alert("login success");
        }
        else{
            alert("invalid details");
        }
    }
});


/* Code goes here

var routerApp = angular.module("routerApp", ["ui.router"]);
routerApp.config(  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("template1", {
          url: "/template1",
          templateUrl: "templates/login.html"
        
        })
        .state("template2", {
          url: "/template2",
          templateUrl: "templates/home.html"
        
        })



      ;

    }
  ]);

*/