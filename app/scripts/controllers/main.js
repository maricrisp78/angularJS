'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */

angular.module('angularJsApp')
  .controller('MainCtrl', function ($scope, hikeSearch, $localStorage) {

    $scope.findHikes = function(){
    	$scope.hikesFound = hikeSearch.find({
    		city_eq: $scope.location
        });
    };

  });


$scope.saveCity = function(city){
    var hikeData = {
        'name': city.name,
        'id': city.id
    };
    if (!$localStorage.savedCities){
        $localStorage.savedCities = [hikeData];
    } else {
        // We have already saved some cities. 
        // Check to make sure we haven't already saved the current city.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the city.
        for (var i=0; i < $localStorage.savedCities.length; i++){
            if ($localStorage.savedCities[i].id == cityData.id) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save==true){
            $localStorage.savedCities.push(hikeData);
        } else {
            console.log('city already saved');
        }
    }
};