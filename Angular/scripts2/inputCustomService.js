var mod = angular.module("AppModule");
mod.service ("InputService" , function ()
{
    var input ="";
    this.setInput = function(i)
    {
        this.input = i;
    };
    this.getInput = function ()
    {
        return this.input;
    }
    

})