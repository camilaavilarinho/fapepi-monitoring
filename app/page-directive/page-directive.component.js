'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('testDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.myData = [10,20,30,40,60, 80, 20, 50];
    /*$scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };*/
  }])
  .directive('barsChart', function($parse) {
    var directiveDefinitionObject = {

      restrict: 'E',

      replace: false,

      scope: {data: '=chartData'},
      link: function (scope, element, attrs) {

        var chart = d3.select(element[0]);

        chart.append("div").attr("class", "chart")
        .selectAll('div')
        .data(scope.data).enter().append("div")
        .transition().ease("elastic")
        .style("width", function(d) { return d + "%"; })
        .text(function(d) { return d + "%"; });

      }
    };
    return directiveDefinitionObject;

    /*return {
      templateUrl: 'page-directive/page-directive.template.html'
    };*/
  });
