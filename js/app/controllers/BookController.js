function BookController (Book) {
  var ctrl = this;

  Book
    .getAuthor()
    .then(function(resp) {
      console.log(resp);
    })

}


angular
  .module('app')
  .controller('BookController', BookController)
