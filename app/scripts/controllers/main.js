'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('MainCtrl', function ($scope, place) {
    $scope.place = place.query();

    $scope.refreshCurrent = function(){
        $scope.place = place.query({
            city_eq: $scope.place
        });
        console.log ($scope.place);
    };
  });