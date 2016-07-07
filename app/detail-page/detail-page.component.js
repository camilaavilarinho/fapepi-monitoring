'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('detailPage').
  component('detailPage', {
    templateUrl: 'detail-page/detail-page.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PhoneDetailController($http, $scope, $routeParams) {
        var self = $scope;

        $http.get('json/' + $routeParams.dataId + '.json').then(function(response) {
          self.year = response.data;
        });
      }
    ]
  });
