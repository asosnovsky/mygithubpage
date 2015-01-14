'use strict';
/*global asosnovsky:false*/

/**
 * @ngdoc function
 * @name asosnovsky.factory:userData
 * # userData
 * factory of the asosnovsky
 */
asosnovsky
	.factory('datamanager', function($http){
		
		/** @type {Object} data container */
		var data = {};

		return {
			getJSON: function(filename) {
				if(!data[filename]){
					return $http.get('docs/json/' + filename).success(function (retdata) {
						data[filename] = retdata;
					});
				}else{
					return {
						success: function (cb){
							cb(data[filename]);
						}
					};
				}	 
			},
			detachJSON: function (filename) {
				delete data[filename];
			}
		};
	});