function Book ($http) {

  var goodreadsKey = config.GOODREADS_KEY;

  this.getAuthor = function() {
    return $http.get("https://api.themoviedb.org/3/movie/550?api_key=a671a47592d30a7f94478bc9b59410d9");
    }
  }



angular
  .module('app')
  .service('Book', Book)
