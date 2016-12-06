function MovieController($scope, GetDirectorId, DirectorCredits, ListDirectorFilms, GetReviews) {
  var ctrl = this;
  $scope.searchTerm = '';
  $scope.searchId = '';
  $scope.moreInfo = "display: none;";
  ctrl.data = [];
  ctrl.films = []; //this array = list of films w id included
  ctrl.reviews = [];
  $scope.buttonText = "see more";
  var count = 0;

  $scope.showMore = function() {
    if (count == 0) {
    $scope.moreInfo = "display: block;"
    $scope.buttonText = "see less"
    count+=1;
  } else if (count == 1) {
    $scope.moreInfo = "display: none;"
    $scope.buttonText = "see more"
    count -=1;
  }
}

 $scope.testing = function() {
  GetDirectorId
    .query($scope.searchTerm)
    .then(function(response) {
      DirectorCredits
      .getMovies(response.data.results[0].id)
      .then(function(res) {
        ctrl.data = res.data;
        ctrl.films = ListDirectorFilms.createList(ctrl.data.crew);
        ctrl.reviews = GetReviews.findReview(ctrl.films);
        console.log(ctrl.reviews);
        })
      })
  }

}



angular
  .module('app')
  .controller('MovieController', MovieController)
