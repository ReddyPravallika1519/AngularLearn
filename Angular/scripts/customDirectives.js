var mod = angular.module("AppModule", []);
//if capital letter is used, in html we need to use - like dashboard-directive
mod.directive("dashboardDirective", function() {
    return    {
        restrict :"EA",
        templateUrl: "templates2/login.html",
        controller : "logincontroller"
       
    }
});
mod.directive("welcomedirective", function() {
    return  {
        restrict :"A",
        template: "<h1>Welcome</h1>",
       
       
    }
});

