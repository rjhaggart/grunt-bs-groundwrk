module.exports = {

	requirejs: {
		options:{
			mangle: false
		},
		files: {
			'dist/<%= config.asset_path %>/vendor/require.js': ['src/vendor/require.js']
		}
	}

};
