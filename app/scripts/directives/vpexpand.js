'use strict';

/*global asosnovsky:false, $:false*/

/**
 * @ngdoc function
 * @name asosnovsky.directive:vpexpand
 * @description
 * # expands a html-container if there is a max-height
 * Directive of the asosnovsky
 */
asosnovsky
	.directive('vpexpand', function() {
		return function(scope, element, attr) {
			//-----------------------------------------
			//	Define Style for mouse-over
			//-----------------------------------------
			var style =  {
				nobtn: {
					'width': '100%',
					'height': '30px',
					'position': 'absolute', 
					'bottom': '0',
					'cursor': 'pointer',
					'text-align': 'center',
					'background': 'linear-gradient(rgba(255, 255, 255, 0), rgb(243, 241, 241))'
				},
				btn: {
					'font-size': '30px',
					'text-align': 'center',
					'left': '40%',
					'position': 'absolute', 
					'bottom': '0',
					'cursor': 'pointer',
					'border': '3px groove',
					'border-radius': '8px',
					'background': 'rgba(237, 247, 255, 0.82)'
				}
			};
			var overlay = $('<div></div>');
			var text = $('<span></span>');
			var icon = $('<i class="fa fa-plus-circle"></i>');
			var btn = scope.$eval(attr.vpexpand);
			
			//-----------------------------------------
			//	Adds style
			//-----------------------------------------
			if(btn){
				overlay.css(style.btn);
			}else{
				overlay.css(style.nobtn);
			}

			/**
			 * adds an onclick event, that expands the container
			 * 
			 */
			function vpexpand (target,btn) {
				//-----------------------------------------
				//	Running Main Function
				//-----------------------------------------
				if(element[0].offsetHeight < element[0].scrollHeight){
					target.bind('click', function() {
						//-----------------------------------------
						//	Using 100 as a reference-point 
						//	for later usage,
						//	Setting height and text/icon for btn
						//-----------------------------------------
						element.css({'max-height':element[0].scrollHeight + 100});
						if(btn){
							icon.attr('class','fa fa-minus-circle');
							text.html('Show Less ');
						}else{
							overlay.css({'background':''});
							icon.attr('class','');
						}

						//-----------------------------------------
						//	Binding minimizing event
						//-----------------------------------------
						target.bind('click', function() {

							//-----------------------------------------
							//	Set height and text/icon for btn
							//-----------------------------------------
							element.css({'max-height':''});
							if(btn){
								icon.attr('class','fa fa-plus-circle');
								text.html('Show More ');	
							}else{
								overlay.css({'background': style.nobtn.background});
								icon.attr('class','fa fa-plus-circle');
							}

							//-----------------------------------------
							//	Run again
							//-----------------------------------------
							vpexpand(target, btn);

						});
					});
				}
			}
			//-----------------------------------------
			//	Determine if btn is needed
			//-----------------------------------------
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || btn === false) {
				//-----------------------------------------
				//	Adds style to required containers
				//-----------------------------------------
				setTimeout(function () {
					if(element[0].offsetHeight < element[0].scrollHeight){
						element.append(overlay);
						overlay.append(icon);
					}
				},1);

				//-----------------------------------------
				//	On touch expands the container
				//-----------------------------------------
				element.bind('mouseenter', function() {
					vpexpand(element,btn);
				});

			}else{
				//-----------------------------------------
				//	Adds btn to overlay
				//-----------------------------------------
				overlay.append(text);
				text.html('Show More ');
				overlay.append(icon);

				//-----------------------------------------
				//	Shows the Showmore btn when hover on
				//-----------------------------------------
				element.bind('mouseenter', function() {
					if(element[0].offsetHeight < element[0].scrollHeight || element.css('max-height') === (element[0].scrollHeight + 100)+'px'){
						//-----------------------------------------
						//	expands when btn is clicked
						//-----------------------------------------
						element.append(overlay);
						vpexpand(overlay,btn);
					}
				});

				//-----------------------------------------
				//	Hide the Showmore btn when hover off
				//-----------------------------------------
				element.bind('mouseleave', function() {
					overlay.detach();
				});
			
			}
		};
	});