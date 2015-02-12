module.exports = {

	theme: {
		options: {
			rootpath: '',
			outputSourceFiles: true,
			compress: true,
		},
		files: {
			'dist/<%= config.asset_path %>/theme/<%= config.theme_name %>/css/style.css': 'src/theme/<%= config.theme_name %>/less/theme.less'
		}
	},
	minify: {
		options: {
			rootpath: '',
			compress: true,
			cleancss: true,
		},
		files: {
			'dist/<%= config.asset_path %>/theme/<%= config.theme_name %>/css/style.css': 'src/theme/<%= config.theme_name %>/less/theme.less'
		}
	}

};
