import angular from 'angular';

import 'angular-ui-router';
import 'angular-ui-select/select.min';
import 'angular-sanitize';

import Components from './components';
import Home from './home';

import appComponent from './application.component';
import ServiceFactory from './app.utils';

import './app.scss';
import 'angular-ui-select/select.min.css';


angular
  .module('synopsis', ['ui.router', 'ui.select', 'ngSanitize', Components, Home])
  .config(($locationProvider) => $locationProvider.html5Mode(true))
  .config(($urlRouterProvider) => $urlRouterProvider.otherwise('/home'))
  .component('app', appComponent)
  ;

angular
  .element(document)
  .ready(() => angular.bootstrap(document, ['synopsis']));

