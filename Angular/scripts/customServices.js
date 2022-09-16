var mod = angular.module("Module1",[]);
mod.controller("customServiceController", function ($scope, stringService)
{
    $scope.convertString = function (input)
    {
       $scope.output = stringService.transformString(input);
      /* without service 
      var output =input[0];
       if(input=="")
       {
           return output;
       }
       else
       {
           for (var i=1; i< input.length ; i++)
           {
           if(input[i]== " ")
           { 
                   continue;
           }
               else if(input[i] ==input[i].toUpperCase())
               {
                   output  = output  + " " + input[i];
               }
               else
               {
                  output  =  output  + input[i];
               }
           }
           return $scope.output = output ;
       }*/
    }
});