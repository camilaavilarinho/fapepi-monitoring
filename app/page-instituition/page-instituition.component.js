'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('pageInstituition').
  component('pageInstituition', {
    templateUrl: 'page-instituition/page-instituition.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PageInstituitionController($http, $scope, $routeParams) {
        var self = $scope;

        $http.get('json/' + $routeParams.dataId + '.json').then(function(response) {
          self.year = response.data;
        });
      }
    ]
  });
