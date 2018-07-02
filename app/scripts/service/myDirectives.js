'use strict';

angular.module('uiRouteApp')
  .directive('pgHello',function () {
    return{
      restrict:'ECA',
      templateUrl:'views/directiveTest.html'
    };
  });
