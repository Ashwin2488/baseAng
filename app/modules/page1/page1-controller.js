angular.module('proAngular.page1', [
    'ngRoute',
  'slideShow'
  ])
    .config(function ($routeProvider) {
        $routeProvider.when('/page1', {
           templateUrl: 'modules/page1/page1.tpl.html', 
           controller: 'Page1Ctrl'
        });
    })
    .controller('Page1Ctrl', function ($scope) {
            $scope.ppl={
              images:[{
              src:'ppl/IMG_0947.JPG'
            },{
              src:'ppl/IMG_0951.JPG'
            },{
              src:'ppl/IMG_0959.JPG'
              },{
                src:'ppl/IMG_1016.JPG'
              },{
                src:'ppl/IMG_1017.JPG'
              },{
                src:'ppl/IMG_1038.JPG'
              },{
                src:'ppl/IMG_1082.JPG'
              },{
                src:'ppl/IMG_1210.JPG'
              },{
                src:'ppl/IMG_1220.JPG'
              },{
                src:'ppl/IMG_1293.JPG'
              },{
                src:'ppl/IMG_1299.JPG'
              }]
            }; 
    });