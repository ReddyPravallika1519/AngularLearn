//ngRoute is the module dependency
var mod = angular.module("Module1", ["ngRoute"]);
mod.config(function ($routeProvider) {
			$routeProvider
            .when("/", {
                template: `<h1>Welcome to Main page</h1>
                <p>
                    Click on the links to redirect to specifiied links
                </p>`
            })
				.when("/login", {
					templateUrl: 'templates/login.html',
                    controller : 'logincontroller'
				})
				.when("/home", {
					templateUrl: 'templates/home.html'
				
				})
                .when("/register", {
					templateUrl: 'templates/register.html',
                    controller : 'registercontroller'
				
				});
});
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
	

