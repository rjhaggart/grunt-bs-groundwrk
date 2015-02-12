module.exports = {

	icon: {
		files: [{
			expand: true,
			flatten: true,
			cwd: 'src/base/',
			src: ['img/favicon.ico', 'img/apple-touch-icon.png'],
			dest: 'dist/'
		}]
	},
	fontawesome: {
		files: [{
			expand: true,
			cwd: 'src/vendor/font-awesome/',
			src: ['fonts/*'],
			dest: 'dist/<%= config.asset_path %>/theme/<%= config.theme_name %>/'
		}]
	},
	img_base: {
		files: [{
			expand: true,
			cwd: 'src/base/img/',
			src: ['**/*', '!favicon.ico', '!apple-touch-icon.png'],
			dest: 'dist/<%= config.asset_path %>/base/img/'
		}]
	},
	img_section: {
		files: [{
			expand: true,
			cwd: 'src/section/img/',
			src: ['**/*'],
			dest: 'dist/<%= config.asset_path %>/section/img/'
		}]
	},
	img_theme: {
		files: [{
			expand: true,
			cwd: 'src/theme/<%= config.theme_name %>/img/',
			src: ['**/*'],
			dest: 'dist/<%= config.asset_path %>/theme/<%= config.theme_name %>/img/'
		}]
	}

};
