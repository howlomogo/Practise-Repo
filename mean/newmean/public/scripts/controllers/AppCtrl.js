angular.module('newapp').controller("AppCtrl", ['$scope', '$http', function ($scope, $http) {
  var url = "http://localhost:3000";

  $scope.products = {};

  $scope.saveProduct = function (newProduct) {
    $http.post(url + "/add", {name: newProduct}).success(function() {
      loadProducts();
    })
  }

  // This works, but I want to pass in the parameters/ quries / whatever from angular
  // And search them from mongoose, rather than saying IN mongoose what to search
  $scope.getSearchedProduct = function (searched) {
    $http.get(url + "/find").success(function (theproduct) {
      console.log(theproduct);
    });
  }

  $scope.deleteProducts = function () {
    $http.delete(url + "/deleteall").success(function (theproducts) {
      console.log("theproducts is " + theproducts);
      loadProducts();
    });
  }

  $scope.deleteProduct = function () {
    $http.delete(url + "/delete").success(function () {
      console.log("theproducts is ");
      loadProducts();
    });
  }

  // re set the products scope
  function loadProducts() {
    $http.get(url).success(function (products) {
      $scope.products = products;
    })
  }

  $http.get(url).success(function (products) {
    $scope.products = products;
    console.log("Get Products");
  })
}]);