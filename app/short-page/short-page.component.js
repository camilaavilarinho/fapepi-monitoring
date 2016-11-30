'use strict';

angular.
  module('shortPage').
  component('shortPage', {
    templateUrl: 'short-page/short-page.template.html',
    controller: ['$http', '$scope', function ShortPageController($http, $scope) {
      $http.get('json/pi-micro.json').then(function(response){
        $scope.chartData = response.data;
        console.log($scope.chartData);
      });
    }]
  });
