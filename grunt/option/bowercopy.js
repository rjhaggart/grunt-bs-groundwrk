module.exports = {

	options: {
		clean: true
	},
	libs: {
		options: {
			destPrefix: 'src/vendor/'
		},
		files: {
			'jquery.js':								'jquery/dist/jquery.js',
			'jquery-ui/core.js':						'jquery-ui/ui/core.js',
			'jquery-ui/widget.js':						'jquery-ui/ui/widget.js',
			'jquery-ui/position.js':					'jquery-ui/ui/position.js',
			'jquery-ui/autocomplete.js':				'jquery-ui/ui/autocomplete.js',
			'jquery-ui/menu.js':						'jquery-ui/ui/menu.js',
			'bootstrap/bootstrap.js':					'bootstrap/dist/js/bootstrap.js',
			'bootstrap/less/':							'bootstrap/less/*',
			'require.js':								'requirejs/require.js',
			'font-awesome/less/':						'font-awesome/less/*',
			'font-awesome/fonts/':						'font-awesome/fonts/*',
			'modernizr/modernizr.js':					'modernizr/modernizr.js',
			'requirejs-plugins/font.js':				'requirejs-plugins/src/font.js',
			'requirejs-plugins/propertyParser.js':		'requirejs-plugins/src/propertyParser.js'
		}
	}

};
