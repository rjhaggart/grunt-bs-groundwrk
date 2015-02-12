function loadConfig(path) {

	var glob = require('glob');

	var object = {};
	var key;

	glob.sync('*', {
		cwd: path
	}).forEach(function(option) {
		key = option.replace(/\.js$/, '');
		object[key] = require(path + option);
	});

	return object;

}

module.exports = function(grunt) {

	var config = {
		pkg: grunt.file.readJSON('package.json'),
		config: grunt.file.readJSON('grunt/config.json')
	};

	require('load-grunt-tasks')(grunt);

	grunt.util._.extend(config, loadConfig('./grunt/option/'));

	grunt.initConfig(config);


	// Tasks //////////////////////////////////////////////////////////////////

	grunt.registerTask('vendor', ['clean:vendor', 'bower', 'bower_clean', 'bowercopy', 'uglify:requirejs', 'remove:vendor', 'replace:bootstrap_glyphicons']);

	grunt.registerTask('img', ['copy:icon', 'copy:img_base', 'copy:img_section', 'copy:img_theme', 'imagemin']);

	grunt.registerTask('asset', ['clean:asset', 'modernizr', 'requirejs', 'less:minify', 'uglify:requirejs', 'img', 'copy:fontawesome']);

	grunt.registerTask('template', ['assemble', 'prettify']);

	// Use default for development
	grunt.registerTask('default', ['clean:dist', 'asset', 'template']);

	grunt.registerTask('build', ['vendor', 'default']);

};
