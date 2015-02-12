module.exports = {

	bootstrap_glyphicons: {
		src: ['src/vendor/bootstrap/less/bootstrap.less'],
		overwrite: true,
		replacements: [{
			from: /@import "glyphicons.less";/g,
			to: ''
		}]
	}

};
