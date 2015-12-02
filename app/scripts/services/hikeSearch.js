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
      'https://trailapi-trailapi.p.mashape.com/?q[city_cont]=:city_cont', {},
      {
        find: {
          method: 'GET',
          headers:{
            'X-Mashape-Key': 'zEe48mTpJumshw1QLLrbFi4g6huSp1AoAgBjsnsYqmtxr90Wqm'
          },
          params: {
            city_cont: ''
          }
        }
      }
    );

  });