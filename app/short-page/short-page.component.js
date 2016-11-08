'use strict';

angular.
  module('shortPage').
  component('shortPage', {
    templateUrl: 'short-page/short-page.template.html',
    controller: ['$http', '$scope', function ShortPageController($http, $scope) {
      var self = $scope;
      self.years = [];
      $http.get('json/summary.json').then(function(response){
        self.years = response.data;
        self.data = self.years[0];
      });
      self.calculateTotal = function(data){
        var total = 0;
        for(var i = 0 ; i < data.length; i++){
          total+= data[i].number;
        }
        return total;
      };
      self.calculateValue = function(data){
        var total = 0;
        console.log(data);
        for(var i = 0 ; i < data.length; i++){
          total+= data[i].value;
        }
        return total;
      };
      self.calculateSchool = function(data){
        var total = 0;
        for(var i = 0 ; i < data.length; i++){
          if(data[i].name == "UESPI"){
            total+= data[i].value;
          }
        }
        return total;
      }
    }]
  });
