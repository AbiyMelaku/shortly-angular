angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  $scope.addLink = function() {
    $scope.loading = true;
    Links.addOne($scope.link)
    .then(function() {
      $scope.loading = false;
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  
});
