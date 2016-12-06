function MovieController($scope, Movie) {
  var ctrl = this;
  $scope.id = '';
  $scope.searchId = '';

 $scope.testing = function() {
  Movie
    .getDirectorId()
    .then(function(response) {
      $scope.searchId = response.data.results[0].id
    })
  }

}

angular
  .module('app')
  .controller('MovieController', MovieController)
