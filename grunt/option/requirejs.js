module.exports = {

	compile: {
		options: {
			mainConfigFile: 'src/requirejs/build.js',
			out: 'dist/<%= config.asset_path %>/theme/<%= config.theme_name %>/js/main.js',
			name: 'build',
			preserveLicenseComments: false,
			//optimize: 'none',
			paths: {
				'theme':	'../theme/<%= config.theme_name %>/js',
				'base':		'../base/js',
				'section':	'../section/js'
			}
		}
	}

};
