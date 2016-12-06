angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider) {
    $stateProvider
      .state('music',  {
        url: '/music',
        templateUrl: 'js/app/templates/music.html',
        controller: 'MusicController'
      });
  })
