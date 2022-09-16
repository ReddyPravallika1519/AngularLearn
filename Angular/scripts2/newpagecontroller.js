var mod = angular.module("AppModule");
mod.controller("newpagecontroller", function ($scope, InputService)
{
    $scope.data = InputService.getInput();
})