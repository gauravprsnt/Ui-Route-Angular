'use strict';

/**
 * @ngdoc overview
 * @name uiRouteApp
 * @description
 * # uiRouteApp
 *
 * Main module of the application.
 */
var app=angular
  .module('uiRouteApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  app.config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('home.test',{
        url: '/test',
        templateUrl: 'views/test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .state('home.result',{
        url:'/result',
        templateUrl:'views/result.html',
        controller: 'ResultCtrl',
        controllerAs: 'result'
      })

    ;

  });
