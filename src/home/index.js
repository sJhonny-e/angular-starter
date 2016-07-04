import angular from 'angular';

import homeComponent from './home.component';



const module = angular.module('home.module', [])
	.component('home', homeComponent)
	.config(($stateProvider) => {
		$stateProvider
			.state('home', {
				url: '/home',
				template: '<home></home>'
			});
	})
	.name;

export default module;