var mod = angular.module("Module1",[]);
//custom filter 
mod.filter("customgender", function() {
    return function(gender) {
        switch(gender)
        {
            case "Female" :
                        return 'F';
            case "Male" :
                        return 'M';
        }
    }

});
mod.filter("searchNameOrCity", function (){
    return function(input, searchVal)
    
    {
        var output =[];
        //if searchval is empty it should display all rows
        if( !searchVal)
        {
            return input;
        }
        else
        {
            //input will return array of objects, so we need to iterate through all array objects
            for (var index = 0; index < input.length; index++)
            {
               
                var index1 = (input[index].person.toLowerCase()).indexOf(searchVal.toLowerCase());
                var index2 = (input[index].city.toLowerCase()).indexOf(searchVal.toLowerCase());
                 //if the person name or city contains the search string it should be pushed to array
                //converted both values into lowercase for case insensitive
                if (index1 !== -1 || index2 !== -1) {
                    output.push(input[index]);
                }                
            }
            //returning the array which contains the list that matches with given string
            return output;
    }
    }
});
mod.controller("Controller1",function($scope) {
    $scope.data = [
        {id : 802, person :"Pravalli",gender : "Female", Salary:100000, dob :"2001-10-15", bonus:50000, city : 'Hyd'},  {id : 292, person :"Nanuu",gender : "Male", Salary:200000, dob :"2001-10-15", bonus:90000,city : 'Delhi'}, {id : 811, person :"Yamini",gender : "Female", Salary:120000, dob :"2001-10-15", bonus:50000, city : 'Mysore'},
        {id : 564, person :"Sravani",gender : "Female",Salary:130000, dob :"2001-10-15", bonus:50000, city : 'Hyd'},  {id : 683, person :"Manga",gender : "Female",Salary:140000, dob :"2001-01-05", bonus:30000, city : 'Vizag'},  {id : 661, person :"Saranya",gender : "Female", Salary:170000, dob :"2001-01-05", bonus:50000, city : 'Hyd'},
        {id : 1316, person :"Madhu",gender : "Female", Salary:190000, dob :"2001-10-15", bonus:50000,city : 'Hyd' },{id : 882, person :"Vanitha",gender : "Female", Salary:190000, dob :"2001-10-15", bonus:50000, city : 'TN'},  {id : 776, person :"Madhu",gender : "Female", Salary:180000, dob :"2001-01-25", bonus:50000, city : 'Hyd'}
    ];
    $scope.limitRows=3;
    $scope.header = "person";
    $scope.boolVal =false;
    $scope.searchbar ="";
    $scope.sortOption="";
    $scope.sorting = function(head)
    {
        
            $scope.boolVal = $scope.header == head ? !$scope.boolVal :false;
            $scope.header = head;
        
        
    };
    


   /* $scope.clicked = function(no)
    {
        alert("username is"+no);
    }*/
});

