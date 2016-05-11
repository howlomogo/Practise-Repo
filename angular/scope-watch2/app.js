//$scope.watch powerful, but be careful about where to use it for optimisation

var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  $scope.mydata = [{name: "Button1", alert: "You clicked Button 1"},
                   {name: "Button2", alert: "You clicked Button 2"},
                   {name: "Button3", alert: "You clicked Button 3"}];

  $scope.activeBtn = undefined;

  $scope.setActive = function(buttonClicked) {
    $scope.activeBtn = buttonClicked;
  }


  $scope.$watch('activeBtn', function() {
    if($scope.activeBtn !== undefined) {
      alert($scope.activeBtn.alert);
    }
  })
});