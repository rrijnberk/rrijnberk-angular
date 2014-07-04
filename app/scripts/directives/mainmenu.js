angular.module('components').directive('mainmenu', ['accountsService', 'newsItemsService', function(accountsService, newsItemsService){
	'use strict';


	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/mainmenu.html',
		link: function (scope) {
			scope.data = {};
			accountsService.getAccounts().then(function(response){
				scope.data.paymentAccounts= response.data.payment;
				scope.data.savingAccounts = response.data.saving;
			});
			newsItemsService.getNewItemsCount().then(function(newNewsItemsCount){
				scope.data.newNewsItems = newNewsItemsCount;
			});
		}
	};
}]);