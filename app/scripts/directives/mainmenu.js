angular.module('components').directive('mainmenu', ['accountsService', function(accountsService){
	'use strict';


	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/mainmenu.html',
		link: function (scope) {
			accountsService.getAccounts().then(function(response){
				scope.data = {
					paymentAccounts: response.data.payment,
					savingAccounts: response.data.saving
				};
			});
		}
	};
}]);