'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('pageEvents').
  component('pageEvents', {
    templateUrl: 'page-events/page-events.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PageEventsController($http, $scope, $routeParams) {
        var self = $scope;

        $http.get('json/' + $routeParams.dataId + '.json').then(function(response) {
          self.year = response.data;
        });
      }
    ]
  });
