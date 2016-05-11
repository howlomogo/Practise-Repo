//$scope.watch powerful, but be careful about where to use it for optimisation

var app = angular.module('myApp', []);

app.controller('cont1', function($scope, $rootScope) {
  $scope.cont1data = "foo";

  $rootScope.cheese = "foobar";
});

app.controller('cont2', function($scope) {
  $scope.cont2data = "foo2";
});

app.controller('cont3', function($scope) {
  $scope.cont3data = "foo3";
});

app.controller('cont4', function($scope) {
  $scope.cont4data = "foo4";
});

app.controller('cont5', function($scope) {
  $scope.cont5data = "foo5";



  $scope.changeparent = function() {
    $scope.$parent.cont4data = "MODDED";
  };
});