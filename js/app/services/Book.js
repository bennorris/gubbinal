function Book ($http) {

  var goodreadsKey = config.GOODREADS_KEY;

  this.getAuthor = function(search) {
    return $http.get('https://www.goodreads.com/api/author_url/' + 'ernest%20hemingway' + '?key=' + goodreadsKey);
    }
  }



angular
  .module('app')
  .service('Book', Book)
