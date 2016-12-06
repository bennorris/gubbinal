function Movie($http) {

  var moviekey = config.MOVIE_KEY;


  this.getDirectorId = function (name) {
    return $http.get('https://api.themoviedb.org/3/search/person?api_key=' + moviekey + '&language=en-US&query=' + name + '&page=1')
  }

  getMovies = function(id) {
    return $http.get('https://api.themoviedb.org/3/person/' + id +'/movie_credits?api_key=' + moviekey + '&language=en-US');
  }

}


angular
  .module('app')
  .service('Movie', Movie);
