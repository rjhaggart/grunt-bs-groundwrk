require.config({

	shim: {
		'bootstrap':				{'deps': ['jquery']},
		'modernizr':				{'exports': 'Modernizr'}
	},
	paths: {
		'modernizr':				'../vendor/modernizr/modernizr-custom',
		'font':						'../vendor/requirejs-plugins/font',
		'propertyParser':			'../vendor/requirejs-plugins/propertyParser',
		'jquery':					'../vendor/jquery',
		'jquery-ui/core':			'../vendor/jquery-ui/core',
		'jquery-ui/widget':			'../vendor/jquery-ui/widget',
		'jquery-ui/position':		'../vendor/jquery-ui/position',
		'jquery-ui/autocomplete':	'../vendor/jquery-ui/autocomplete',
		'jquery-ui/menu':			'../vendor/jquery-ui/menu',
		'bootstrap':				'../vendor/bootstrap/bootstrap'
	}

});

require(['app'], function(){

});
