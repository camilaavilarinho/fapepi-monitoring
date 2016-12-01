'use strict';

// TODO: Use d3 with dependency injection
angular.
  module('testDirective', [])
  .directive('barsChart', function($parse) {
    var directiveDefinitionObject = {
      restrict: 'EA',

      scope: {data: '='},
      link: function (scope, element, attrs) {

        var width = 660,
        height = 800;

        var svg = d3.select(element[0]).append("svg");

        //svg.call(tip);

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
          // If we don't pass any data, return out of the element
          console.log("Chegou aqui!!!"+ data);
          if (!data) return;

          // setup variables

          var subunits = topojson.feature(data, data.objects.micro);

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
          });

          svg.append("path")
          .datum(subunits)
          .attr("d", path);

          svg.call(tip);

          svg.selectAll(".subunit")
          .data(topojson.feature(data, data.objects.micro).features)
          .enter().append("path")
          .attr("class", function(d) { return "subunit " + d.id; })
          .attr("d", path)
          .on('mouseover', mouseover)
          .on('mouseout', mouseout);

        }

        function mouseover(d){
          d3.select("#infoname").text(d.id);
        }

        function mouseout(d){
          d3.select("#infoname").text("");
        }

      }
    };
    return directiveDefinitionObject;

  });
