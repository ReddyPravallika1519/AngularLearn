var mod = angular.module("Module1");
mod.service("stringService", function ()
{
    this.transformString = function (input)
    {
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
                return output ;
            }
    }
})