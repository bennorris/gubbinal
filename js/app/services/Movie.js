function Movie($http) {

  var moviekey = config.MOVIE_KEY;


  this.getDirectorId = function () {
    return $http.get('https://api.themoviedb.org/3/search/person?api_key=a671a47592d30a7f94478bc9b59410d9&language=en-US&query=ingmar%20bergman&page=1')
  }

}


angular
  .module('app')
  .service('Movie', Movie);
