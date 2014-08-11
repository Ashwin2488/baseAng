angular.module('proAngular.page1').directive("matchList",function(){
  return {
     restrict: "AEC",
     template: "<div ng-repeat='match in matchList'><p><span class='col-xs-6'>{{match.team1}} Vs {{match.team2}}</span><span>{{match.result}}</span></p></div>",
     link: function(scope,element){
     }
  }   
});