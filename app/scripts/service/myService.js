'use strict';

/**
 * @ngdoc function
 * @name uiRouteApp.controller:TestCtrl
 * @description
 * # AboutCtrl
 * Controller of the uiRouteApp
 */
angular.module('uiRouteApp')
  .service('myService',function () {
    var myjsonObj=null;
    return{
      getJsonData: function () {
        return myjsonObj;
      },
      setJson:function (value) {
        myjsonObj=value;
      }
    }
  });
