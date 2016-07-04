import angular from 'angular';
import ComponentRouter from '@angular/router/angular1/angular_1_router';
import UISelect from 'angular-ui-select/select.min';
import ngSanitize from 'angular-sanitize';
import Navbar from './components/navbar/navbar';
import ServiceFactory from './app.utils';

import './app.scss';
import 'angular-ui-select/select.min.css';

let AppComponent = {
  template: `
        <div class="container-fluid">
          <navbar></navbar>
        </div>
    `,
  controller: () => new AppController()
};

class AppController { }

angular
  .module('synopsis', ['ngComponentRouter', 'ui.select', 'ngSanitize'])
  .config(($locationProvider) => $locationProvider.html5Mode(true))
  .value('$routerRootComponent', 'app')
  .component('app', AppComponent)
  .component('navbar', Navbar);

angular
  .element(document)
  .ready(() => angular.bootstrap(document, ['synopsis']));

export default AppController;
