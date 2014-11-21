var myApp = angular.module('advApp',[]);

myApp.controller('myCtrl',function($scope){
$scope.todos = [
{
	text:'Learn Angular.js',done:false
},{
	text:'Build single page app',
	done:false
}
];

$scope.add = function(){
$scope.todos.push({text:$scope.addTask,done:false});
$scope.addTask = '';
}

});


myApp.controller('myctrl1',function($scope,$http){
	$scope.records = [];
	$scope.deleted = [];
	$http({method:'get',url:'Data/record.json'}).success(function(record){
	$scope.records = record;
	});


	$scope.add = function(){
	 var temp = {};
	temp.name = $scope.fname;
	temp.age = $scope.fage;
	temp.Profession = $scope.fprof;
	$scope.records.push(temp);
	$scope.fname='';
	$scope.fage='';
	$scope.fprof='';
	}

	$scope.del = function(a){
	tem = $scope.records.splice(a,1);
	$scope.deleted.push(tem[0]);
	}

	$scope.undo = function(){
	if($scope.deleted.length>0){
		$scope.records.push($scope.deleted.pop());
	}
	}

	$scope.edit = function(a){
	$scope.fname = $scope.records[a].name;
	$scope.fage = $scope.records[a].age;
	$scope.fprof = $scope.records[a].Profession;
	}
});

