function BookController (Book) {
  var ctrl = this;

  Book
    .getAuthor()
    .then(function(resp) {
      console.log(resp.data);
    })

}


angular
  .module('app')
  .controller('BookController', BookController)
