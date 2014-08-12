angular.module('proAngular.page2').filter("availableTeams",function(){
   return function(items){
     var availableTeam = [],tempTeam=[];
     availableTeam.push(items[0]);
     tempTeam.push(items[0].team1);
     for(var i=1; i< items.length;i++){
       if(tempTeam.indexOf(items[i].team1) == -1){
          tempTeam.push(items[i].team1);
          availableTeam.push(items[i]);
       }
     }
     console.log(availableTeam);
     return availableTeam;
   };
}).filter("matchFilter",function(){
  return function(items,filter){
     var matchToPrint = [];
     filter =filter || "";
     filter = filter.toLowerCase();
     for(var i=0; i< items.length;i++){
       if(items[i].team1.toLowerCase().indexOf(filter) != -1 || items[i].team2.toLowerCase().indexOf(filter) != -1){
        matchToPrint.push(items[i]);
       }
     }
     return matchToPrint;
  };
});