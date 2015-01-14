'use strict';

/*global asosnovsky:false, WOW:false */

/**
 * @ngdoc function
 * @name asosnovsky.controller:DocumentCtrl
 * @description
 * # DocumentCtrl
 * Controller of the asosnovsky
 */
asosnovsky
	.controller('DocumentCtrl', function ($rootScope) {
		
 	if(!/iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
	 	//-----------------------------------------
	 	//	Initialize WOW
	 	//-----------------------------------------
		new WOW().init();

		/**
		 * Sync scroll with WOW
		 * 
		 * @return {null} 
		 */
		$rootScope.$on('$routeChangeStart', function () {
		 	new WOW().sync();
		});
	}
});
