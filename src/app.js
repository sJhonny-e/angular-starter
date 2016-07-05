import angular from 'angular';

import 'angular-ui-router';
import 'angular-ui-select/select.min';
import 'angular-sanitize';

import Components from './components';
import Home from './home';

import appComponent from './application.component';

import './app.scss';
import 'angular-ui-select/select.min.css';


angular
  .module('synopsis', ['ui.router', 'ui.select', 'ngSanitize', Components, Home])
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

