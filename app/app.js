/**
 * @ngdoc controller
 * @name proAngular.controller:RootCtrl
 * @requires $scope
 * @requires $location
 * @description
 * Base controller for the appication.Application specific global functionalities can be done here.
 * Values added to [$scope](https://docs.angularjs.org/guide/scope) here can be accessed in any of the child pages within the app.
 * Few functionalities that can be added to RootCtrl are
 * - actions that are to be done while navigating from one page to another.
 * - highlighting currently selected link
 * - configuring defaults for certain modules through module provider if required
 */
'use strict';

angular.module('proAngular', ['ngRoute', 'proAngular.home', 'proAngular.page1', 'proAngular.page2']).config(function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo : '/home'
	});
}).controller('RootCtrl', function($scope, $location) {
	$scope.$on("$routeChangeSuccess", function(event, current, previous) {
		console.log('current', current);
		console.log('previous', previous);
	});
	/**
	 * @ngdoc function
	 * @name proAngular.controller:RootCtrl#isActive
	 * @methodOf proAngular.controller:RootCtrl
	 *
	 * @description
	 * Checks if the link is active link.
	 * 
	 * @param {string} viewLocation URL fragment identifier
	 * */
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};
});
 
//Manual Bootstrapping Application
/*
angular.element(document).ready(function () {
  angular.bootstrap(document, ['proAngular']);
});
*/