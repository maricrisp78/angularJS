'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:SavedhikesCtrl
 * @description
 * # SavedhikesCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('SavedhikesCtrl', function ($scope, $localStorage) {
 	$scope.storage = $localStorage;
      
  });
