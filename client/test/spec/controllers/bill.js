'use strict';

describe('Controller: BillsCtrl', function () {

  // load the controller's module
  beforeEach(module('billsToKillApp'));

  var BillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BillsCtrl = $controller('BillCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BillsCtrl.awesomeThings.length).toBe(3);
  });

  it('shout delete'), function() {
      scope.deleteBill({});
      expect(scope.tableParams.length).toBe(1);
  }
});
