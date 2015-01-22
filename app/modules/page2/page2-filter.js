angular.module('page2')
  .filter("matchFilter", function () {
    return function (items, filter) {
      var matchToPrint = [];
      filter = filter || "";
      filter = filter.toLowerCase();
      for (var i = 0; i < items.length; i++) {
        if (items[i].team1.toLowerCase().indexOf(filter) != -1 || items[i].team2.toLowerCase().indexOf(filter) != -1) {
          matchToPrint.push(items[i]);
        }
      }
      return matchToPrint;
    };
  });
