angular.module('components').directive('supercircle', [function(){
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'partials/supercircle.html',
		scope: {
			size : '@',
			border: '@',
			imageUrl: '@'
		},
		link: function(scope, element) {
			var sizeFactor =  512 / scope.size,
				borderSize = scope.border ? scope.border * sizeFactor : 0,
				viewBox = [0-borderSize, 0-borderSize, (512+borderSize*2), (512+borderSize*2)].join(' ');


			console.log(scope.imageUrl)

			element[0].firstChild.setAttribute('width', (scope.size ? scope.size : 32));
			element[0].firstChild.setAttribute('height', (scope.size ? scope.size : 32));
			element[0].firstChild.setAttribute('viewBox', viewBox);

			element[0].firstChild.childNodes[3].setAttribute('stroke-width', borderSize);

		}
	};
}]);