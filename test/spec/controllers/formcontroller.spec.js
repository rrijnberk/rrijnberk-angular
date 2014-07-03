'use strict';

describe('Controller: formcontroller', function () {

    // load the controller's module
    beforeEach(module('sandbox'));

    var formcontroller,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        formcontroller = $controller('formcontroller', {
            $scope: scope
        });
    }));

    it('should have an initial count of 0 attempts', function () {
        expect(scope.data.attempts).toBe(0);
    });

    it('should increase the attempts by 1 after each submit', function(){
        scope.submit();
        expect(scope.data.attempts).toBe(1);
        scope.submit();
        expect(scope.data.attempts).toBe(2);

    });

});