'use strict';

/*global asosnovsky:false*/

/**
 * @ngdoc function
 * @name asosnovsky.service:vppathfinder
 * @description
 * # vppathfinder
 * Service of the asosnovsky
 */
asosnovsky
	.service('$vppathfinder', [function () {
		/**
		 * detects the current path
		 * 
		 * @return {String} path
		 * 
		 */
		this.pathfinder = function pathfinder () {
	 		// var hash = window.location.hash.replace(new RegExp('#/', 'g'),'').split('?')[0];
	 		// if(hash === '' || hash === '#/') {
	 		// 	return 'views/home.html';
	 		// }else{
	 		// 	return 'views/' + hash + '.html';
	 		// }
	 		console.log('MOBILE!');
	 	};
	 	/**
	 	 * Changes the path
	 	 * 
	 	 * @param  {String} change 
	 	 * 
	 	 * @param  {scope} $scope 
	 	 * 
	 	 */
	 	this.pathchange = function pathchange (change,$scope) {
	 		// window.location.hash = change;
	 		// $scope.view = this.pathfinder();
	 		// $(window).scrollTop(0);
	 		console.log('MOBILE!',change,$scope);
	 	};

}]);