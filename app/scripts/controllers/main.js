'use strict';
/*global asosnovsky:false */
/**
 * @ngdoc function
 * @name asosnovsky.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asosnovsky
 */
 asosnovsky
 .controller('MainCtrl', function ($scope, $modal, $location, datamanager) {
 	//-----------------------------------------
	//	Scope Carousel Items
	//-----------------------------------------

	datamanager.getJSON('documents.json')
		.success(function(data){
			$scope.documents = data;
	});
	
	datamanager.getJSON('programs.json')
		.success(function(data){
			$scope.programs = data;
	});

	datamanager.getJSON('engages.json')
		.success(function(data){
			$scope.engages = data;
	});

 	//-----------------------------------------
 	//	Modals
 	//-----------------------------------------
 	$scope.emailModal = function () {
 		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
 			$location.path('email').replace();
 		}else{	
	 		$modal.open({
	 			templateUrl: 'views/email.html',
	 			controller: 'EmailCtrlWeb'
	 		});
 		}
 	};

 	$scope.aboutModal = function (address) {
 		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
 			$location.path(address).replace();
 		}else{	
	 		$modal.open({
	 			templateUrl: 'views/' + address + '.html',
	 			controller: 'ModallCtrlWeb',
	 			size: 'lg'
	 		});
	 	}
 	};

 	$scope.imgModal = function (slide,index) {
 		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
 			$location.hash(index);
 			$location.path('img-modal').replace();
 			$scope.slide = slide;
 		}else{	
 			$modal.open({
 				templateUrl: 'views/img-modal.html',
 				controller: 'ImgCtrlWeb',
 				resolve:{
 					slide: function(){
 						return slide;
 					}
 				}
 			});
 		}
 	};
 });
