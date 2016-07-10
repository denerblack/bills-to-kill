'use strict';

/**
 * @ngdoc function
 * @name billsToKillApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the billsToKillApp
 */
angular.module('billsToKillApp')
.controller('BillsCtrl', ['$scope', 'Bill', 'ngTableParams', function ($scope, Bill, ngTableParams) {
    $scope.index = function() {
        console.log("DSFSD");
    };
    var data = Bill.query();
    $scope.tableParams = new ngTableParams(
            {
                page: 1, count: 10
            }, {
                total: data.length,
                sorting: { name: 'asc'  },
                data: data
            });

    $scope.createBill = function() {
        var bill = $scope.bill;
        console.log(bill);
        /*if (bill.bill.id != undefined) {
            bill = Bill.updateBill({ id: bill.bill.id.$oid }, bill );
        } else {
            bill = Bill.save(bill);
        }*/
        bill = Bill.save(bill);
        $scope.tableParams.data.push(bill.bill);
        $scope.tableParams.reload();
        $scope.bill = {};
    };

    $scope.deleteBill = function(bill) {
    console.log("TESTE");
        Bill.deleteBill({ id: bill.id.$oid });
//$scope.tableParams.data.splice(bill, 1);
        $scope.tableParams.reload();
    };

    $scope.editBill = function(bill) {
        var date = bill.finishing_at.match(/\d{1,4}/g);
        console.log(date);
        bill.finishing_at = new Date(date[1] + "/" + date[2] + "/" + date[0]);
        $scope.bill.bill = bill;
    };

    $scope.cancelBill = function() {
        $scope.bill = {};
    };
}]);
