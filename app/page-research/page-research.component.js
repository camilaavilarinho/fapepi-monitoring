'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('pageResearch').
  component('pageResearch', {
    templateUrl: 'page-research/page-research.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PageScholarshipController($http, $scope, $routeParams) {
        var self = $scope;

        $http.get('json/' + $routeParams.dataId + '.json').then(function(response) {
          self.year = response.data;
        });
      }
    ]
  });
