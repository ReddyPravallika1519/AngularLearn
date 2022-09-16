var mod = angular.module("AppModule");
mod.controller("dashboardcontroller", function($scope, $http, $log, $location,InputService){
    $http({
        method : 'GET',
        url : "https://reqres.in/api/users"
    }).then(function successCallback(response){
        $scope.output = response.data.data;
        $log.info(response);
    }, function errorCallback(response){
        $scope.error = response;
    });
   
    $scope.getMyDetails = function (input)
    {
        InputService.setInput(input);
        $location.url("gotoNewpage");

    }
   
    
   
    
});
