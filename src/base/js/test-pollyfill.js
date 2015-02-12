require(['jquery', 'modernizr'], function($, Modernizr){

	'use strict';

	$(function(){

		if(Modernizr.boxshadow){
			console.log('Modernizr: boxshadow available');
		}

	});

});
