angular.module('proAngular.home').factory('homeService',function($http,proConfigHelper){
    
    var getMatchList = function(){
        
      return $http.get(proConfigHelper.generateServiceUrl('getMatchList'));  
        
    };
    
    return {
        getMatchList:getMatchList
        
        
    };
    
    
    
});