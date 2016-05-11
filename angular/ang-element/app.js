angular.module('myApp', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.age = 0;
  $scope.shit = "few";


  $scope.monkeys = function(name) {
    return "hi there!";
  };
}]);