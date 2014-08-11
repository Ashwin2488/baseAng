/**
 * @ngdoc overview
 * @name proAngular.home
 *
 * @description
 * Home module with configuration and controller for home page
 * 
 */

angular.module('proAngular.home', [
    'ngRoute',
    'pro.config'
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
    .controller('HomeCtrl', function ($scope, $rootScope, homeService) {
        $rootScope.matchList = [];
        homeService.getMatchList().then(function (response) {
         
            $rootScope.matchList = response.data.matchesList;
        });
    });