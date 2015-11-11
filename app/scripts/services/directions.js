'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.directions
 * @description
 * # directions
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp')
  .factory('DirectionsCtrl', function ($Scope, $routeParams, directions, $localStorage) {
         $scope.city_eq = $routeParams.city_eq;

    $scope.hikeData = hikeSearch.query({
        city_eq: $routeParams.city_eq  
    });
  });

