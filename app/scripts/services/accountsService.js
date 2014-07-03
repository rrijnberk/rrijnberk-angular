angular.module('services').factory('accountsService',
	function($http, $filter) {
		'use strict';

		var config = {
				serviceUrl: 'stub/productoverview.json'
			},
			orderBy = $filter('orderBy'),
			filter = $filter('filter'),
			pruneAccounts= function(accounts) {
				return filter(accounts, { Configuration: { ShowProduct: true}}, false);
			},
			orderAccounts= function(accounts) {
				var result = [];
				if(accounts) {
					result = orderBy(accounts, 'Configuration.SortingOrder', false);
				}
				return result;
			},
			sortAccounts = function(accounts){
				return {
					payment: getPaymentAccounts(accounts),
					saving: getSavingAccounts(accounts)
				};
			},
			getPaymentAccounts = function(accounts){
				return filter(accounts, function(account){ return account.Authorization.Payment !== undefined ? account : null; }, true);
			},
			getSavingAccounts = function(accounts){
				return filter(accounts, function(account){ return account.Authorization.Payment === undefined ? account : null; }, true);
			};


		return {
			getAccounts: function() {
				return $http.get(config.serviceUrl).then(function(response) {
					var accounts ={
						data: []
					};


					if(response && response.data && response.data.Accounts && response.data.Accounts.Account) {
						accounts.data = response.data.Accounts.Account;

						accounts.data = pruneAccounts(accounts.data);
						accounts.data = orderAccounts(accounts.data);
						accounts.data = sortAccounts(accounts.data);
					}
					return accounts;
				});
			}


		};
	});