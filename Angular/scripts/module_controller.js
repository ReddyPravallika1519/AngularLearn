//creating module
var mod = angular.module("Module1",[]);
//creating a controller and registering it to module
mod.controller("myController1", function($scope){
    $scope.msg ="Good mrng";
 
});
mod.controller("myController2", function($scope) {
    $scope.student =[
    {
        name :"A",
        class_no :12
    },
    {
        name :"B",
        class_no :15
    }
    ];
   

});
function check()
{
    alert("checked");
    
}