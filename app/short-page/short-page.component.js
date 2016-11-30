'use strict';

// TODO: Use d3 with dependency injection
angular.
  module('shortPage', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.chartData = [
      {name: "Greg", score: 98},
      {name: "Ari", score: 96},
      {name: 'Alguem', score: 75},
      {name: "Teste", score: 18},
      {name: "Camila", score: 28}
    ];
  }])
  .directive('mapChart', function($parse) {
    var directiveDefinitionObject = {

      restrict: 'EA',

      scope: {data: '='},
      link: function (scope, element, attrs) {

        var width = 660,
        height = 800;

        var svg = d3.select("#map").append("svg");


        // Browser onresize event
        window.onresize = function() {
          scope.$apply();
        };

        // Watch for resize event
        scope.$watch(function() {
          return angular.element(window)[0].innerWidth;
        }, function() {
          scope.render(scope.data);
        });

        scope.$watch('data', function(newVals, oldVals) {
          return scope.render(newVals);
        }, true);

        scope.render = function(data) {
          // remove all previous items before render
          svg.selectAll('*').remove();

          d3.json("json/pi-micro.json", function(error, pi) {
            if (error) return console.error(error);

            var subunits = topojson.feature(pi, pi.objects.micro);

            var projection = d3.geo.mercator()
            .scale(3000)
            .center([-40, -10])
            .translate([width / 2, height / 2]);

            var path = d3.geo.path()
            .projection(projection);

            var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
              return d.id;
            })

            svg.append("path")
            .datum(subunits)
            .attr("d", path);

            svg.call(tip);

            svg.selectAll(".subunit")
            .data(topojson.feature(pi, pi.objects.micro).features)
            .enter().append("path")
            .attr("class", function(d) { return "subunit " + d.id; })
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);
          });

        }

      }
    };
    return directiveDefinitionObject;

    /*return {
      templateUrl: 'page-directive/page-directive.template.html'
    };*/
  });
