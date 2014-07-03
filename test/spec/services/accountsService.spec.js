"use strict";

describe("Product overview api service", function () {
	var accountsService, httpBackend;

	beforeEach(module("services"));

	beforeEach(inject(function (_accountsService_, $httpBackend) {
		accountsService = _accountsService_;
		httpBackend = $httpBackend;
	}));

	it("should do something", function () {
		httpBackend.whenGET("stub/productoverview.json").respond({
			"Accounts": {
				"Account": [
					{
						"Number": "101774699",
						"IBAN": "NL37RABO0101774699",
						"ProductName": "Rabo TotaalRekening",
						"Balance": 105.15,
						"Authorization": {
							"Payment": {},
							"OwnAccount": {},
							"ToThis": {}
						},
						"Configuration": {
							"ShowProduct": true,
							"SortingOrder": 3,
							"CustomProductName": ""
						}
					},
					{
						"Number": "125681097",
						"IBAN": "NL17RABO0125681097",
						"ProductName": "Rabo Beleggersrekening",
						"Currency": "EUR",
						"Balance": 46395.21,
						"Authorization": {
							"OwnAccount": {},
							"ToThis": {}
						},
						"Configuration": {
							"ShowProduct": true,
							"SortingOrder": 4,
							"CustomProductName": ""
						}
					},
					{
						"Number": "125681098",
						"IBAN": "NL17RABO0125681097",
						"ProductName": "Rabo Beleggersrekening",
						"Currency": "EUR",
						"Balance": 46395.21,
						"Authorization": {
							"OwnAccount": {},
							"ToThis": {}
						},
						"Configuration": {
							"ShowProduct": false,
							"SortingOrder": 1,
							"CustomProductName": ""
						}
					},
					{
						"Number": "1",
						"IBAN": "NL62RABO0177880643",
						"ProductName": "Rabo Directrekening",
						"Currency": "EUR",
						"Balance": 231.1,
						"Authorization": {
							"Payment": {},
							"OwnAccount": {},
							"ToThis": {}
						},
						"Configuration": {
							"ShowProduct": true,
							"SortingOrder": 2,
							"CustomProductName": "RaboDirectrekening"
						}
					}
				]
			}
		});
		accountsService.getAccounts().then(function(accounts) {
			expect(accounts.data).toEqual({
				payment: [
					{
						"Number": "1",
						"IBAN": "NL62RABO0177880643",
						"ProductName": "Rabo Directrekening",
						"Currency": "EUR",
						"Balance": 231.1,
						"Authorization": {
							"Payment": {},
							"OwnAccount": {},
							"ToThis": {}
						},
						"Configuration": {
							"ShowProduct": true,
							"SortingOrder": 2,
							"CustomProductName": "RaboDirectrekening"
						}
					},
					{
						"Number": "101774699",
						"IBAN": "NL37RABO0101774699",
						"ProductName": "Rabo TotaalRekening",
						"Balance": 105.15,
						"Authorization": {
							"Payment": {},
							"OwnAccount": {},
							"ToThis": {}
						},
						"Configuration": {
							"ShowProduct": true,
							"SortingOrder": 3,
							"CustomProductName": ""
						}
					}
				],
				saving: [
					{
						"Number": "125681097",
						"IBAN": "NL17RABO0125681097",
						"ProductName": "Rabo Beleggersrekening",
						"Currency": "EUR",
						"Balance": 46395.21,
						"Authorization": {
							"OwnAccount": {},
							"ToThis": {}
						},
						"Configuration": {
							"ShowProduct": true,
							"SortingOrder": 4,
							"CustomProductName": ""
						}
					}
				]
			});
		});
		httpBackend.flush();
	});

});