'use strict';

/**
 * @ngdoc overview
 * @name angularJsApp
 * @description
 * # angularJsApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
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
      .when('/current', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
      .when('/directions/:directions', {
        templateUrl: 'views/directions.html',
        controller: 'DirectionsCtrl',
        controllerAs: 'directions'
      })
      .when('/savedHikes', {
        templateUrl: 'views/savedhikes.html',
        controller: 'SavedhikesCtrl',
        controllerAs: 'savedHikes'
      })
      .when('/savedHikes', {
        templateUrl: 'views/savedhikes.html',
        controller: 'SavedhikesCtrl',
        controllerAs: 'savedHikes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });