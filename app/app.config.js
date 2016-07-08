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
          template: '<page-scholarship></page-scholarship>'
        }).
        when('/:dataId/pesquisas', {
          template: '<page-research></page-research>'
        }).
        when('/:dataId/eventos', {
          template: '<page-events></page-events>'
        }).
        otherwise('/home');
    }
  ]);
