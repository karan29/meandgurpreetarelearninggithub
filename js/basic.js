var myApp = angular.module('ang_Assgn',[]);

myApp.controller('myCtrl',function($scope){

$scope.img = 'images/red.png';

$scope.colors = function(a){
$scope.img = 'images/'+a+'.png';
};


$scope.products = [
{"name":"milk","price":2.99,"quantity":3},
{"name":"bread","price":3.99,"quantity":4},
{"name":"eggs","price":4.99,"quantity":5}
];



 $scope.isDisabled = false;
 $scope.disableClick = function() {
 $scope.isDisabled = true;
        
    }

});



myApp.filter('capitalize',function(){
	var temp = function(value){
		return value.substring(0,1).toUpperCase()+value.substring(1);
	}
	return temp;
});


myApp.filter('reverse',function(){
	return function(value){
		var result= '';
		for (var i=0;i<value.length;i++){
			result=value.charAt(i)+result;
		}
		return result;
	}
});



