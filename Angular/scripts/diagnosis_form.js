var mod = angular.module("Module1",[]);
mod.controller("Controller1", function($scope) {
    $scope.forms={};
    $scope.diagnosisList =[
        {
            id : 101,
            name : 'person1'
        },
        {
            id : 102,
            name : 'person2'
        },
        {
            id : 103,
            name : 'person3'
        }
    ];

    $scope.yearList =["2000","2001","2002","2003"];

    $scope.saveFunc = function ()
    {
        alert("saved");
    }

    $scope.resetFunc = function ()
    {
        if(confirm("Do you want to reset?")){
       $scope.forms={};
       alert("Reset done");
        }
    }
});
