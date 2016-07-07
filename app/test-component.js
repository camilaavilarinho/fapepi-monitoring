angular.
  module('observatoryApp').
  component('testComponent', {
    template: 'Hello, {{$ctrl.user}}!',
    controller: function TestComponentController() {
      this.user = 'world';
    }
  });
