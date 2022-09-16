var mod = angular.module("Module1",[]);
mod.controller("myController1", function($scope) {
    $scope.display ={
        name : "Pravalli",
        id : 31,
        marks :55
    }
});
mod.controller("myController2", function($scope) {
    $scope.display ={
        name : "Pravalli",
        id : 31,
        marks :55
    }
    $scope.saved = function()
    {
        console.log("data is ",$scope.display);
        
    }
    $scope.changed = function()
    {
        alert("changed text");
    }
});