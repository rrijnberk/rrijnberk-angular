angular.module('components').directive('menuItem', [function(){
	'use strict';

	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/menuItem.html'
	};
}]);