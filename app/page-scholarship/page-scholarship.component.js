'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('pageScholarship', ['nvd3']).
  component('pageScholarship', {
    templateUrl: 'page-scholarship/page-scholarship.template.html',
    controller: ['$http', '$scope', '$routeParams',
      function PageScholarshipController($http, $scope, $routeParams) {
        $scope.chartOptions = [{
          id: 1,
          name: "Mestrado"
        }, {
          id: 2,
          name: "Doutorado"
        }];

        $scope.options = {
          chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
              top: 20,
              right: 20,
              bottom: 100,
              left: 55
            },
            x: function(d){ return d.name; },
            y: function(d){ return d.score; },
            showValues: true,
            valueFormat: function(d){
              return d3.format(',.1f')(d);
            },
            transitionDuration: 500,
            xAxis: {
              axisLabel: 'Programa',
              rotateLabels: 30
            },
            yAxis: {
              axisLabel: 'Y Axis',
              axisLabelDistance: 30
            }
          }
        };

        var self = $scope;
        $http.get('json/' + $routeParams.dataId + '.json').then(function(response) {
          self.year = response.data;
          $scope.data = response.data.mestrado;
          $scope.updateChart = function () {
            if ($scope.selectedChart.chart === undefined || $scope.selectedChart.chart.id === 1) {
              $scope.data = response.data.mestrado;
            }
            if ($scope.selectedChart.chart !== undefined && $scope.selectedChart.chart.id === 2) {
              $scope.data = response.data.doutorado;
            }
          };
        });





      }
    ]
  });
