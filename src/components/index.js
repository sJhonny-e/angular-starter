import angular from 'angular';

import NavBar from './navbar/navbar';

const module = angular.module('components.module', [])
	.component('navbar', NavBar)
	.name;

export default module;	