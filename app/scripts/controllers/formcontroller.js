angular.module('sandbox').controller('formcontroller', ['$scope', function ($scope) {
	'use strict';
	$scope.data = {
		attempts: 0,
		complete: false
	};

	$scope.submit = function () {
		$scope.increaseAttempts();
	};

	$scope.increaseAttempts = function(){
		$scope.data.attempts++;
	};

}]);