'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('pageMap').
  component('pageMap', {
    templateUrl: 'page-map/page-map.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PageScholarshipController($http, $scope, $routeParams) {
        var self = $scope;

        $http.get('json/' + $routeParams.dataId + '.json').then(function(response) {
          self.year = response.data;
        });
      }
    ]
  });
