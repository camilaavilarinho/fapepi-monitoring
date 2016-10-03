'use strict';

// Register `pageMap` component, along with its associated controller and template
angular.
  module('pageMap').
  component('pageMap', {
    templateUrl: 'page-map/page-map.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PageMapController($http, $scope, $routeParams) {
        var self = $scope;

        $http.get('json/summary.json').then(function(response) {
          self.years = response.data;
        });
      }
    ]
  });
