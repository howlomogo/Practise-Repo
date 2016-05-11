var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/page1', {
        templateUrl: '../partials/page1.html',
        controller: 'MainCtrl'
      }).
      when('/page2', {
        templateUrl: '../partials/page2.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '../partials/test.html'
      });
  }]);