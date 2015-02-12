module.exports = {

	asset: {
		files: [{
			expand: true,
			cwd: 'dist/',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'dist/'
		}]
	}

};
