import angular from 'angular';
import 'angular-ui-router';

import component from './about.component';

import './style.scss';


const module = angular.module('about.module', ['ui.router'])
	.component('about', component)
	.config(($stateProvider) => {
		"ngInject";		// ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
		$stateProvider
			.state('about', {
				url: '/about',
				template: '<about></about>'
			});
	})
	.name;

export default module;
