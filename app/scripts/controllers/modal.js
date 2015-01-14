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
.controller('ModallCtrlWeb', function ($scope, $modalInstance, $vpmodal) {
	
	$vpmodal.scope ($scope);

	
	$scope.ok = function () {
		$modalInstance.close();
	};
	
})
.controller('ModallCtrlMobile', function ($scope, $vpmodal) {
	
	$vpmodal.scope ($scope);
	
	$scope.ok = function () {
		window.location.hash = '';
	};

});