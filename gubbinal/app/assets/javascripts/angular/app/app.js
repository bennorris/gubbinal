angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider) {
    $stateProvider
      .state('music',  {
        url: '/music',
        templateUrl: 'app/assets/javascripts/angular/app/templates/music.html',
        controller: 'MusicController'
      })
      .state('books', {
        url: '/books',
        templateUrl: 'gubbinal/app/javascripts/app/templates/book.html',
        controller: 'BookController'
      })
      .state('movies', {
        url: '/movies',
        templateUrl: 'js/app/templates/movie.html',
        controller: 'MovieController'
      })
  })
