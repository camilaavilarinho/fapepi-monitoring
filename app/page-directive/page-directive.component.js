'use strict';

// TODO: Use d3 with dependency injection
angular.
  module('testDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.chartData = [
      {name: "Greg", score: 98},
      {name: "Ari", score: 96},
      {name: 'Alguem', score: 75},
      {name: "Teste", score: 18},
      {name: "Camila", score: 28}
    ];
  }])
  .directive('barsChart', function($parse) {
    var directiveDefinitionObject = {

      restrict: 'EA',

      scope: {data: '='},
      link: function (scope, element, attrs) {

        var margin = {top: 80, right: 180, bottom: 80, left: 180},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1, .3);

        var y = d3.scale.linear()
        .range([height, 0]);

        var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

        var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(8, "");

        //Obs
        var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>"+d.name +":</strong> <span style='color:red'>" + d.score + "</span>";
        })

        var svg = d3.select(element[0])
          .append('svg')
          .attr("width", "100%")
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate( 30," + margin.top + ")");

        svg.call(tip);


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
          if (!data) return;

          // setup variables
          x.domain(data.map(function(d) { return d.name; }));
          y.domain([0, d3.max(data, function(d) { return d.score; })]);

          svg.append("text")
          .attr("class", "title")
          .attr("x", 180)
          .attr("y", -26)
          .text("Bolsas de Mestrado");

          svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + (height+30) + ")")
          .call(xAxis)
          .selectAll(".tick text")
          .attr("transform", "translate(0,10)")
          .attr("transform", "rotate(-55)")
          .call(wrap, x.rangeBand());

          svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);

          svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.name); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.score); })
          .attr("height", function(d) { return height - y(d.score); })
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide);

        }
        //Deal with long labels
        function wrap(text, width) {
          /*text.each(function() {
            var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
              line.push(word);
              tspan.text(line.join(" "));
              if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
              }
            }
          });*/
        }

      }
    };
    return directiveDefinitionObject;

    /*return {
      templateUrl: 'page-directive/page-directive.template.html'
    };*/
  });
