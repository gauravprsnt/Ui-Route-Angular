'use strict';

/**
 * @ngdoc function
 * @name uiRouteApp.controller:TestCtrl
 * @description
 * # AboutCtrl
 * Controller of the uiRouteApp
 */
angular.module('uiRouteApp')
  .controller('ResultCtrl', function ($scope, myService) {
    $scope.getData = myService.getJsonData();
    $scope.games = ['cricket', 'football', 'baseball', 'Hockey'];
    $scope.capitals = [{
      'country': 'Nepal',
      'capital': 'Kathmandu'
    },
      {
        'country': 'India',
        'capital': 'Delhi'
      },
      {
        'country': 'China',
        'capital': 'Beizing'
      }];
    $scope.price = 370;
    $scope.orderByMe = function (x) {
      $scope.myOrderBy = x;

    };

    $scope.info = [
      {
        name: 'Prashant',
        gender: 'Male',
        address: 'ktm'
      },
      {
        name: 'Shreya',
        gender: 'Female',
        address: 'ktm'
      },
      {
        name: 'Nabin',
        gender: 'Male',
        address: 'ktm'
      },
      {
        name: 'Binju',
        gender: 'Female',
        address: 'ktm'
      }
    ];

  });


