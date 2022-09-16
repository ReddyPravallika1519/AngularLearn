//already Module is created in another js file
mod.controller("httpController", function($scope, $http, $log, $location,$window){
    $http({
        method : 'GET',
        url : "https://reqres.in/api/users"
    }).then(function successCallback(response){
        $scope.output = response.data.data;
        $log.info(response);
    }, function errorCallback(response){
        $scope.error = response;
    });
   
   
    
   
    
});
