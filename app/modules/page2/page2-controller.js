angular.module('proAngular.page2', [
    'ngRoute'
  ])
    .config(function ($routeProvider) {
        $routeProvider.when('/page2', {
           templateUrl: 'modules/page2/page2.tpl.html', 
           controller: 'Page2Ctrl'
        });
    })
    .controller('Page2Ctrl', function ($scope,$rootScope,$location) {
        if($rootScope.matchList === undefined)
        	$location.path('#/home');
    });