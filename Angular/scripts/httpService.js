var mod = angular.module("Module1",[]);
mod.controller("Controller1", function($scope, $http, $log){
    $http({
        method : 'GET',
        url : "https://reqres.in/api/users"
    }).then(function successCallback(response){
        $scope.output = response.data.data;
        $log.info(response);
    }, function errorCallback(response){
        $scope.error = response;
    });

    $scope.getDetails = function(input)
    {
       $scope.display = input.id;
    }

});
mod.controller("Controller2", function($scope, $http, $log){
    $http({
        method : 'POST',
        url : "https://reqres.in/api/users",
        data :
        {
            id :9,
            email :"abbb",
            first_name : "ppp"
        }
    }).then(function successCallback(response){
        $log.info(response);
        
    }, function errorCallback(response){
        $log.info(response);
    });

});