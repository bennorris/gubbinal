function MovieController($scope, Movie) {
  var ctrl = this;
  $scope.searchTerm = '';
  $scope.searchId = '';
  ctrl.data = [];

 $scope.testing = function() {
  Movie
    .getDirectorId($scope.searchTerm)
    .then(function(response) {
      getMovies(response.data.results[0].id)
      .then(function(res) {
        ctrl.data = res.data;
      })
    })
}


  }



angular
  .module('app')
  .controller('MovieController', MovieController)
