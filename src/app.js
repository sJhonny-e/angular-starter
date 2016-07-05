import angular from 'angular';

import 'angular-ui-router';
import 'angular-sanitize';

import Components from './components';
import Home from './home';

import appComponent from './application.component';

import './app.scss';


angular
  .module('synopsis', ['ui.router', 'ngSanitize', Components, Home])
  .config(($locationProvider) => {
    "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
    $locationProvider.html5Mode(true);
  })
  .config(($urlRouterProvider) => {
    "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
    $urlRouterProvider.otherwise('/home');
  })
  .component('app', appComponent)
  ;

angular
  .element(document)
  .ready(() => angular.bootstrap(document, ['synopsis']));

