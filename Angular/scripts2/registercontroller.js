var mod = angular.module("AppModule");
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