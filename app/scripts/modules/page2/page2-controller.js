angular.module('proAngular.page2', [
    'ngRoute'
  ])
    .config(function ($routeProvider) {
        $routeProvider.when('/page2', {
           templateUrl: 'scripts/modules/page2/page2.tpl.html', 
           controller: 'Page2Ctrl'
        });
    })
    .controller('Page2Ctrl', function ($scope,$rootScope) {
          $scope.name = "new template";
    });