'use strict';
/*exported asosnovsky */

/**
 * @ngdoc overview
 * @name asosnovsky
 * @description
 * # asosnovsky
 *
 * Main module of the application.
 */
var asosnovsky = angular.module('asosnovsky', ['ngRoute','ui.bootstrap','ui.highlight']);

/*
 * Routes
 */
asosnovsky.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainCtrl'
	}).when('/about', {
		templateUrl: 'views/about.html',
		controller: 'ModallCtrlMobile'
	}).when('/email', {
		templateUrl: 'views/email.html',
		controller: 'EmailCtrlMobile'
	}).when('/actuary', {
		templateUrl: 'views/actuary.html',
		controller: 'ModallCtrlMobile'
	}).when('/img-modal', {
		templateUrl: 'views/img-modal.html',
		controller: 'ImgCtrlMobile'
	}).when('/tutor', {
		templateUrl: 'views/tutor.html',
		controller: 'ModallCtrlMobile'
	}).when('/web', {
		templateUrl: 'views/web.html',
		controller: 'ModallCtrlMobile'
	});
});

asosnovsky.config(['$locationProvider', function($location) {
  $location.hashPrefix('!');
}]);