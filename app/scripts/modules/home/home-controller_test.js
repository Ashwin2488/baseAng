'use strict';

describe('Controller :Home', function () {

    beforeEach(module('proAngular.home'));
    var scope,
        httpBackend,
        mockController;
    function createController() {
        return mockController('HomeCtrl', {
            $scope: scope
      
        });
    }

    // Initialize the controller
    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        mockController= $controller;
      
        
    }));

    it('should fetch matchlist on initialization', function () {
      createController();
      expect(scope.matchList).toEqual([]);
      
    });
        
});