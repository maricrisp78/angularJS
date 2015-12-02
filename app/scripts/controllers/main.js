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
             city_cont: $scope.location
       
        });
    };


    $scope.saveCity = function(city){
        if (!$localStorage.savedHikes){
            $localStorage.savedHikes = [];
        
            $localStorage.savedHikes.push(city);
        } else {
            // We have already saved some cities. 
            // Check to make sure we haven't already saved the current city.

            var save = true; // Initialize the save decision variable.

            // Use this loop to check if we've already saved the city.

            for (var i=0; i < $localStorage.savedHikes.length; i++){
                if ($localStorage.savedHikes[i].unique_id === city.unique_id) {
                    // This is a duplicate, so don't save (variable set to false).
                    save = false;
                }
            }
                // console.log($localStorage.savedHikes[i].id);

            if (save === true){
                $localStorage.savedHikes.push(city);
            } else {
                console.log('city already saved');
            }
        }
    };

  });

// $( document ).ready(function() {

// var userInfo = {
//     username: ' guest'

// };


//     $('#login-form').on('click', function() {
//         $('#login-form').hide();
//         $('.user-info').show();
//         $('.username').text(userInfo.username);

//     $('.submit').on('click', function() {
//         $('.submit').show();
//         $('#login-form').hide();
//         $('.user-info').hide() ++;
        
//     });
// });
// });