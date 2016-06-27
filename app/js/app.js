'use strict';

/* App Module */
var observatoryApp = angular.module('observatoryApp', []);

observatoryApp.controller('AppController', function AppController($scope, $http){
  $scope.years = [];
  $http.get('json/years.json').then(function(response){
    $scope.years = response.data;
    $scope.data = $scope.years[0];
  });
  $scope.calculateTotal = function(data){
    var total = 0;
    for(var i = 0 ; i < data.length; i++){
      total+= data[i].number;
    }
    return total;
  };
  $scope.calculateValue = function(data){
    var total = 0;
    for(var i = 0 ; i < data.length; i++){
      total+= data[i].value;
    }
    return total;
  };
  $scope.calculateSchool = function(data){
    var total = 0;
    for(var i = 0 ; i < data.length; i++){
      if(data[i].name == "UESPI"){
        total+= data[i].value;
      }
    }
    return total;
  }
});
