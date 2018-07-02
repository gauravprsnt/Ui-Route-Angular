'use strict';

angular.module('uiRouteApp')
  .filter('camelFormat', function () {


    return function (x) {

      var str = '';
      var sttr='';
      for (var i = 0; i < x.length; i++) {
        str = x[i];
        if (str === '_') {
          str=x[i+1].toUpperCase();
          sttr += str;
          i++;
        } else {
          sttr += str;
        }

      }return sttr;

    }
  });

