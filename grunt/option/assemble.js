module.exports = {

	options: {
		layout: 'template/layout/default.hbs',
		flatten: true,
		partials: ['template/partial/**/*.hbs'],
		ext: '.php',
		data: ['grunt/config.json']
	},
	pages: {
		files: {
			'dist/': ['template/page/*.hbs']
		}
	},
	tests: {
		files: {
			'dist/': ['template/test/*.hbs']
		}
	}

};
