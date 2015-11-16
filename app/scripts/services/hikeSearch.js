'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp')
  .factory('hikeSearch', function ($resource) {
  
    // Service logic
    // ...

    // Public API here

    return $resource(
      'https://outdoor-data-api.herokuapp.com/api.json?api_key=3d915e7fea908a3df09ece5462427d44&city_eq=:city_eq', {},
      {
        find: {
          method: 'JSONP',
          params: {
            city_eq: '',
            callback: 'JSON_CALLBACK'
          }
        }
      }
    );

  });