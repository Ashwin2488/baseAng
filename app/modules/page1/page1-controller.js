angular.module('proAngular.page1', [
    'ngRoute'
  ])
    .config(function ($routeProvider) {
        $routeProvider.when('/page1', {
           templateUrl: 'modules/page1/page1.tpl.html', 
           controller: 'Page1Ctrl'
        });
    })
    .controller('Page1Ctrl', function ($scope,$rootScope,$location) {
        if($rootScope.matchList === undefined)
        	$location.path('#/home');
    });