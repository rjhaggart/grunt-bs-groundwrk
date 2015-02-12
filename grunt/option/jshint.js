module.exports = {

	options: {
		jshintrc: '.jshintrc'
	},
	target: {
		src: ['src/base/js/**/*.js', 'src/theme/<%= config.theme_name %>js/**/*.js', 'src/section/js/**/*.js']
	}

};
