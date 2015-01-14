'use strict';

/*global asosnovsky:false*/

/**
 * @ngdoc function
 * @name asosnovsky.service:vpmodal
 * @description
 * # vpmodal
 * Service of the asosnovsky
 */
asosnovsky
	.service('$vpmodal', ['datamanager', '$http', '$sce', function (datamanager, $http, $sce) {
		this.scope = function scope ($scope) {
			 	
				//-----------------------------------------
				//	About
				//-----------------------------------------
				$scope.tooltips = {
					sfl: '<div class="tooltips-wrapper"><img src="http://ssdp.org/assets/sfl-logo.png"></div>',
					york: '<div class="tooltips-wrapper"><img src="http://www.yorku.ca/liaskos/images/sotirios.jpg"></div>',
					major:'',
					actsci:'<div class="tooltips-wrapper"><img style="width:200px" src="https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10696214_1491856511098536_1217672413771580967_n.jpg?oh=f0e7c9b21bc97a05b05b61c320945efa&oe=551AAED4&__gda__=1427625963_8ebeba705f094d96c4db31748b61d92d"></div>',
					stockrender:'<div class="tooltips-wrapper"><img style="width:300px" src="http://static.tumblr.com/0bf1a42dbb5c62f8d0995840b8b1e7b6/r0wa4v2/fU4nebwu8/tumblr_static_cz4g1ks1m5ckws40ks0cg00g0_2048_v2.jpg"></div>'
				};

				//-----------------------------------------
				//	Actuary
				//-----------------------------------------
				datamanager.getJSON('courses.json')
					.success(function(data){
						$scope.courses = data;
				});

				//-----------------------------------------
				//	Tutor
				//-----------------------------------------
				datamanager.getJSON('tutoring.json')
					.success(function(data){
						$scope.tutoring = data;
				});
					
			 	/**
				 * highlight text
				 * 
				 * @param  {String} text   
				 * 
				 * @param  {String} search 
				 * 
				 * @return {String}        trusted html text
				 * 
				 */
				$scope.highlight = function(text, search) {
					if (!search) {
						return $sce.trustAsHtml(text);
					}
					return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));
				};
		};
	}]);