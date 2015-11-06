'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */

angular.module('angularJsApp')
  .controller('MainCtrl', function ($scope, hikeSearch) {

    $scope.findHikes = function(){
    	$scope.hikesFound = hikeSearch.find({
    		city_eq: $scope.location
        });
    };
    
  });


