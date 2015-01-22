angular.module('common',[])
  .factory('matchDetails', function ($http, proConfigHelper) {

    var getMatchList = function () {
      return $http.get(proConfigHelper.generateServiceUrl('getMatchList'));

    };

    return {
      getMatchList: getMatchList
    };



  });
