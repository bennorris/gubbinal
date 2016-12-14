function MusicController(Album, $scope) {
  var ctrl = this;
  $scope.search = '';

$scope.searchRecord = function () {
  Album
    .getAlbum($scope.search)
    .then(function(result) {
      ctrl.data = result.data;
    })

}

}

angular
  .module('app')
  .controller('MusicController', MusicController);
