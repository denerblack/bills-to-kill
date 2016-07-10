'use strict';

/**
 * @ngdoc function
 * @name billsToKillApp.controller:BillCtrl
 * @description
 * # BillCtrl
 * Controller of the billsToKillApp
 */
angular.module('billsToKillApp')
  .controller('BillsCtrl', ['$scope', 'Bill', 'ngTableParams', function ($scope, Bill, ngTableParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var data = Bill.query();
    $scope.tableParams = new ngTableParams(
            {
                page: 1, count: 10
            }, {
                total: data.length,
                sorting: { name: 'asc'  },
                data: data
            });

    $scope.deleteBill = function(bill) {
        console.log("TESTE");
        Bill.deleteBill({ id: bill.id.$oid });
        //$scope.tableParams.data.splice(bill, 1);
        $scope.tableParams.reload();
    };

  }]);
