'use strict';

/* App Module */
var observatoryApp = angular.module('observatoryApp', []);

observatoryApp.controller('AppController', function AppController($scope){
  $scope.years = [
    {
      id: "2016",
      scholarship: [
        {
          name: "UESPI",
          city: "Teresina",
          number: 15,
          value: 70000

        }, {
          name: "UFPI",
          city: "Teresina",
          number: 20,
          value: 100000
        }
      ]
    }, {
      id: "2015",
      scholarship: [
        {
          name: "UESPI",
          city: "Teresina",
          number: 15,
          value: 70000

        }, {
          name: "UFPI",
          city: "Teresina",
          number: 20,
          value: 100000
        }
      ]
    }, {
      id: "2014"
    }, {
      id: "2013"
    }, {
      id: "2012"
    }, {
      id: "2011"
    }
  ];
  $scope.numTotal = $scope.years[0].scholarship[0].number + $scope.years[0].scholarship[1].number;
  $scope.valTotal = $scope.years[0].scholarship[0].value + $scope.years[0].scholarship[1].value;

});
