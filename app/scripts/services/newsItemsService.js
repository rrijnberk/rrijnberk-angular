angular.module('services').factory('newsItemsService',
	function($http) {
		'use strict';

		var config = {
				serviceUrl: 'stub/news.json'
			};

		return {
			getNewItemsCount: function() {
				return $http.get(config.serviceUrl).then(function(response) {
					return response.data.newItemCount;
				});
			},

			getNewsItems: function() {
				return $http.get(config.serviceUrl).then(function(response) {
					return response.data.items;
				});
			}
		};
	});