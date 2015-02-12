module.exports = {

	options: {
		livereload: true
	},
	jshint: {
		files: ['src/base/**/*.{js,mst,json}', 'src/requirejs/**/*.{js,mst,json}', 'src/section/**/*.{js,mst,json}', 'src/theme/**/*.{js,mst,json}'],
		tasks: ['jshint']
	},
	assemble: {
		files: ['template/**/*.hbs'],
		tasks: ['template']
	},
	less: {
		files: ['src/base/**/*.less', 'src/section/**/*.less', 'src/theme/**/*.less'],
		tasks: ['less:minify']
	},
	requirejs: {
		files: ['src/base/**/*.{js,mst,json}', 'src/requirejs/**/*.{js,mst,json}', 'src/section/**/*.{js,mst,json}', 'src/theme/**/*.{js,mst,json}'],
		tasks: ['requirejs']
	},
	img: {
		files: ['src/base/img/*.{gif,png,jpg,jpeg,ico}', 'src/section/img/*.{gif,png,jpg,jpeg,ico}', 'src/theme/<%= config.theme_name %>/img/*.{gif,png,jpg,jpeg,ico}'],
		tasks: ['img']
	}

};
