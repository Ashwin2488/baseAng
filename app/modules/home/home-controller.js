/**
 * @ngdoc overview
 * @name proAngular.home
 *
 * @description
 * Home module with configuration and controller for home page
 *
 */

angular.module('home', [
    'ngRoute',
    'config',
    'common'
  ])
  .config(function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'modules/home/home.tpl.html',
      controller: 'HomeCtrl'
    });
  })
/**
 * @ngdoc controller
 * @name proAngular.home.controller:HomeCtrl
 *
 * @description
 * Home controller that contains logic for home screen
 *
 */
.controller('HomeCtrl', function ($scope, $rootScope, matchDetails) {
  $scope.matchList = [];
  matchDetails.getMatchList().then(function (response) {
    $scope.matchList = response.data.matchesList;
  });
});
