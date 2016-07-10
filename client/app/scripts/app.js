'use strict';

/**
 * @ngdoc overview
 * @name billsToKillApp
 * @description
 * # billsToKillApp
 *
 * Main module of the application.
 */
var  app = angular
.module('billsToKillApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'rails',
        'ngTable'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .when('/bills', {
        templateUrl: 'views/bills.html',
        controller: 'BillsCtrl',
        controllerAs: 'bill'
    })
    .when('/months', {
        templateUrl: 'views/months.html',
        controller: 'MonthsCtrl',
        controllerAs: 'month'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.factory('Bill', ['$resource', function($resource) {
    return $resource('http://localhost:3000/bills/:id', '@id',
            {
                updateBill: {  method: 'PUT', id: '@id' },
                deleteBill: {  method: 'DELETE', unique: true }
            }
            );
}]);

app.filter('total', function() {
    return function(input, collection, attr) {
        var output = input || 0;
        $.each(collection, function (index) {
            var data = collection[index];
            var value = data[attr];
            if ( value != null ) {
                output += data[attr]
            }
        });
        return output;
    }
});
