var mod = angular.module("AppModule");
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