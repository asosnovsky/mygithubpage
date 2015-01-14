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

}).controller('ImgCtrlMobile', function ($scope, $location, datamanager) {

	console.log($location.url());
	$scope.ok = function () {
		$location.hash('');
		$location.path('').replace();
	};

	//-----------------------------------------
 	//	Load Data
 	//-----------------------------------------
	var slidedata = '{'+$location.hash().replace('&',',')+'}';
	console.log(slidedata);
	slidedata = JSON.parse(slidedata.replace(/[\\"']/g, '\"'));

	//-----------------------------------------
	// 	Data Manager
	//-----------------------------------------
	datamanager.getJSON(slidedata.type + '.json')
		.success(function(data){
			$scope.slide = data[slidedata.i];
	});

});
