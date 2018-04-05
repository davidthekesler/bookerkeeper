var app = angular.module('BookerKeeperApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
            redirectTo: '/book'
        })
        .when('/book', {
            templateUrl: 'views/book.html',
            controller: 'BookController as vm'
        })
        .when('/genre', {
            templateUrl: 'views/genre.html',
            controller: 'GenreController as vm'
        })
        .otherwise( { template: '<h1>404</h1>' });
}]);
