'use strict';

/*global asosnovsky:false*/

/**
 * @ngdoc function
 * @name asosnovsky.controller:ImgCtrl
 * @description
 * # ImgCtrl
 * Controller of the asosnovsky
 */
asosnovsky
.controller('ImgCtrlWeb', function ($scope, $modalInstance, slide) {
	
	$scope.ok = function () {
		$modalInstance.close();
	};

	$scope.slide = slide;

}).controller('ImgCtrlMobile', function ($scope, datamanager) {
	
	$scope.ok = function () {
		window.location.hash = '';
	};

	//-----------------------------------------
 	//	Load Data
 	//-----------------------------------------
	var slidedata = '{'+window.location.hash.split('?')[1].replace('&',',')+'}';
	slidedata = JSON.parse(slidedata.replace(/[\\"']/g, '\"'));

	//-----------------------------------------
	//	Data Manager
	//-----------------------------------------
	datamanager.getJSON(slidedata.type + '.json')
		.success(function(data){
			$scope.slide = data[slidedata.i];
	});

});
