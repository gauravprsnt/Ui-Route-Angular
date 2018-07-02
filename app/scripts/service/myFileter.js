'use strict';

angular.module('uiRouteApp')
  .filter('myFormat', function () {
    return function (x) {
      var i, c, txt = '';

      for (i = 0; i < x.length; i++) {
        c = x[i];
        if (i % 2 == 0) {
          c = c.toUpperCase();
        }
        txt += c;
      }
      return txt;
    };
  });

angular.module('uiRouteApp')
.filter('newFormat',function () {
  return function (x) {
  //  for(var i=0;i<x.length;i++){
      var c=x;
      if(c.gender==='Male'){
        console.log(c);
        return c;
      }else {
        return null;
      }

   //}

  };

});
