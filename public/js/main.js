var homeTheatreApp = angular.module('homeTheatreApp', []);

homeTheatreApp.controller('InputsCtrl', function ($scope,  $http) {
	 $http.get('api/discover').success(function(data) {
    	$scope.inputs = data.commands.input;
  	 });
	 $scope.message = '';
	 $scope.get = function() {
	 	var input = this.input
	 	 $http.get(input.endpoint).success(function(data) {
	 	 	$scope.message = input.instructions;
	 	 	console.log(data);
	 	 })
	 }
	});

homeTheatreApp.controller('PowerCtrl', function ($scope,  $http) {
	 $scope.status = 'on';
	 $http.get('api/power/status').success(function(data) {
    	 $scope.status = data.system_status;
  	 });
	 
	 $scope.power_on = function() {
	 	$http.get('api/power/on').success(function(data) {
    	 	$scope.status = 'on';
  	 });
	 }
	 $scope.power_off = function() {
	 	$http.get('api/power/off').success(function(data) {
    	 $scope.status = 'off';
  	 });
	 }
	});