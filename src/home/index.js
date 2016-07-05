import angular from 'angular';
import 'angular-ui-router';

import homeComponent from './home.component';
import itemsService from './items.service';

import './home.scss';


const module = angular.module('home.module', ['ui.router'])
	.component('home', homeComponent)
	.service('ItemsService', itemsService)
	.config(($stateProvider) => {
		$stateProvider
			.state('home', {
				url: '/home',
				template: '<home></home>'
			});
	})
	.name;

export default module;