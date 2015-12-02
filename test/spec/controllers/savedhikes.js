'use strict';

describe('Controller: SavedhikesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsApp'));

  var SavedhikesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SavedhikesCtrl = $controller('SavedhikesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SavedhikesCtrl.awesomeThings.length).toBe(3);
  });
});
