//$scope.watch powerful, but be careful about where to use it for optimisation

var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $rootScope) {
  $scope.mydata = {val: "jake"}

  // $scope.watch excecutes code whenever the scope is changed
  // Execute a change when it sees a change in mydata.val
  $scope.$watch('mydata.val', function() {
    console.log("mydata.val has been changed");
  })

  // This is called on initlization you can prevent this
  // you can check if new val == old val to prevent
  // first param is new val new val 2nd is old val
  $scope.$watch('mydata.val2', function(newval) {
    // true if longer than 15 chars, do check to stop intial error
    if(newval) {
      $scope.mydata.toolong = newval.length > 15;
    }
    console.log($rootScope);
  }) 
});

app.controller('MyController2', function($scope) {
  $scope.somemoredata = "donkey";
})

app.controller('MyController3', function($scope) {
  $scope.evenmoredata = 3;
})