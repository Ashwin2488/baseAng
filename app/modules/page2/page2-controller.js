angular.module('page2', [
    'ngRoute',
    'common'
  ])
  .config(function ($routeProvider) {
    $routeProvider.when('/page2', {
      templateUrl: 'modules/page2/page2.tpl.html',
      controller: 'Page2Ctrl'
    });
  })
  .controller('Page2Ctrl', function ($scope,matchDetails) {
    $scope.matchList = [];
    matchDetails.getMatchList().then(function (response) {

      $scope.matchList = response.data.matchesList;
    });
  });
