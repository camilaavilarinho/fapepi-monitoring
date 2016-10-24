'use strict';

angular.
  module('observatoryApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<short-page></short-page>'
        }).
        when('/:dataId/bolsas', {
          template: '<div ng-controller="Controller"><bars-chart chart-data="myData"></bars-chart></div>'
        }).
        when('/:dataId/pesquisas', {
          template: '<page-research></page-research>'
        }).
        when('/:dataId/eventos', {
          template: '<page-events></page-events>'
        }).
        when('/:dataId/instituicoes', {
          template: '<page-instituition></page-instituition>'
        }).
        otherwise('/home');
    }
  ]);
