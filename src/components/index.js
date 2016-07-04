import angular from 'angular';

import NavBar from './navbar/navbar';

const module = angular.module('components', [])
	.component('navbar', NavBar)
	.name;

export default module;	