var app = angular.module("AppModule",["ngRoute"]);
app.config(function ($routeProvider)
{
    $routeProvider
    .when("/",
    {
        template : `<h1>This is common for all pages </h1>`
    })
    .when("/login", {
        templateUrl : "templates2/login.html",
        controller : "logincontroller"
    })
    .when("/register",{
        templateUrl : "templates2/register.html",
        controller : "registercontroller"
    })
    .when("/dashboard", {
        templateUrl : "templates2/dashboard.html",
        controller : "dashboardcontroller"
    })
    .when("/gotoNewpage", {
        templateUrl : "templates2/newpage.html",
        controller : "newpagecontroller"
    })
    
})