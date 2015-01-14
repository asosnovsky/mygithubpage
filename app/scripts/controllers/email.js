'use strict';

/*global asosnovsky:false*/

/**
 * @ngdoc function
 * @name asosnovsky.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the asosnovsky
 */
asosnovsky
	.controller('EmailCtrlWeb', function ($scope, $modalInstance) {
		
		//-----------------------------------------
		//	Btns
		//-----------------------------------------
		$scope.ok = function () {
			$modalInstance.close();
		};

}).controller('EmailCtrlMobile', function ($scope) {
		
		//-----------------------------------------
		//	Btns
		//-----------------------------------------
		$scope.ok = function () {
			window.location.hash = '';
		};

});
