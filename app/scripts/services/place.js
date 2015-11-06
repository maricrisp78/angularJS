'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.current
 * @description
 * # current
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp')
  .factory('place', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource(
       'https://outdoor-data-api.herokuapp.com/api.json?api_key=3d915e7fea908a3df09ece5462427d44&city_eq=:city_eq?', {},
      {
        query: {
        method:'GET',
        params:{
          place_id: '27369' //Steliko Ridge Trail
        },
        isArray:false
      }
    });
  });


