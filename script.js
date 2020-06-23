var myApp = angular.module("boardApp", []);

myApp.controller("boardController", function($scope, $http){
	
	$http.get(https://hngi7.hng.tech/)
	 .then(function(response){
		 $scope.campers = response.data;
		 })
		 $scope.sortColumn="name";
		 $scope.reverseSort=false;
		 
		 $scope.sortData = function(column){
			  $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
			  $scope.sortColumn = column;
			 }
			 
			 $scope.getSortClass = function(column){
				 if($scope.sortColumn == column) {
					 return $scope.reverse ? 'down' : 'up';
					 }
					 return''
				 
				 }
	});
