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
          number: 30,
          value: 170000

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
  $scope.data = $scope.years[0];
  $scope.calculateTotal = function(data){
    var total = 0;
    for(var i =0 ; i< data.length; i++){
      total+= data[i].number;
    }
    return total;
  };
  $scope.calculateValue = function(data){
    var total = 0;
    for(var i =0 ; i< data.length; i++){
      total+= data[i].value;
    }
    return total;
  };
});
