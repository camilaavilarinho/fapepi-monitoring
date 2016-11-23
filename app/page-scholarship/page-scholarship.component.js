'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('pageScholarship').
  component('pageScholarship', {
    templateUrl: 'page-scholarship/page-scholarship.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PageScholarshipController($http, $scope, $routeParams) {
        var self = $scope;
        self.dado = "mestrado";
        self.mestrado = [];
        self.doutorado = [];
        self.change = function(d){
          self.dado =  d;
        };
        $http.get('json/' + $routeParams.dataId + '.json').then(function(response) {
          self.year = response.data;
          self.mestrado = response.data.mestrado;
          self.doutorado = response.data.doutorado;
          if(self.dado == "doutorado"){
            self.chartData = self.doutorado;
          }else{
            self.chartData = self.mestrado;
          }

        });

      }
    ]
  });
