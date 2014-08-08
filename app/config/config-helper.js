'use strict';

angular.module('pro.config').factory('proConfigHelper', function (PROCONFIG) {
     var appReleaseMode = PROCONFIG.releaseMode;
    var generateServiceUrl = function(serviceName){
        return [PROCONFIG.webServiceConfig[appReleaseMode].baseUrl, PROCONFIG.serviceUrls[serviceName]].join('');
    };
    return {
        generateServiceUrl:generateServiceUrl
        
    };
    
});