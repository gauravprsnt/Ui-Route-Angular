'use strict';

/**
 * @ngdoc function
 * @name uiRouteApp.controller:TestCtrl
 * @description
 * # AboutCtrl
 * Controller of the uiRouteApp
 */
angular.module('uiRouteApp')
  .controller('TestCtrl', function ($scope, myService) {
    $scope.zone = ['Mechi', 'Koshi', 'Sagarmatha', 'Bagmati'];
    $scope.koshi = ['Morang', 'Sunsari', 'Dhankuta', 'Bhojpur'];
    $scope.mechi = ['Jhapa', 'Illam', 'Taplejung', 'Panchthar'];
    $scope.morang = ['Biratnagar', 'Urlabari', 'Letang'];
    $scope.sunsari = ['Itahari', 'Dharan', 'Inaruwa'];
    $scope.dhankuta = ['Bhedetar', 'Dhankuta', 'Basantapur', 'Hile'];
    $scope.bhojpur = ['Bhoj', 'Deurali'];

    $scope.data = $scope.zoneEntered;

    $scope.insertIndi = function (value) {

      myService.setJson(value);
    };
    $scope.getDistrict = function () {
      $scope.lanKey = $scope.opEntered;

      if ($scope.lanKey === 'Koshi') {
        $scope.district = $scope.koshi;

      } else if ($scope.lanKey === 'Mechi') {
        $scope.district = $scope.mechi;
      }else {
        $scope.district='';
      }


    };
    $scope.getPlaces = function () {
      $scope.places=$scope.koshiEntered;
      if($scope.places==='Morang'){
        $scope.city=$scope.morang;
      }else if($scope.places==='Sunsari') {
        $scope.city = $scope.sunsari;
      }else if($scope.places==='Dhankuta') {
        $scope.city = $scope.dhankuta;
      }else if($scope.places==='Bhojpur') {
        $scope.city = $scope.bhojpur;
      }else {
        $scope.city='';
      }

    }


  });
