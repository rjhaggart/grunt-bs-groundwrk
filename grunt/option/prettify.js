module.exports = {

	options: {
		indent: 1,
		wrap_line_length: 78,
		condense: true,
		brace_style: 'expand',
		indent_char: '	'
	},
	all: {
		files: [
			{
				expand: true,
				cwd: 'dist/',
				src: ['*.php'],
				dest: 'dist/',
				ext: '.php'
			}
		]
	}

};
