var app = angular.module('BookerKeeperApp', ['ngRoute', 'ngMaterial']);


app.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
    console.log('Route config loaded');

    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('blue-grey')
        .dark();

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
        .otherwise({ template: '<h1>404</h1>' });
}]);

