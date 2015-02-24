grunt-bs-groundwrk
================

Opinionated kick starter for a static site, built on Grunt.js with Bower, Assemble, Bootstrap, Require.js and a little H5BP.


##Getting started

###Install NodeJS

You need to install [NodeJS](http://nodejs.org/) in order to use [npm](https://www.npmjs.com/), Node's package manager.

Make sure you add /usr/local/bin is in your $PATH.  Located in your home directory.

###Installing Grunt

Install Grunt via Node package manager.

`sudo npm install -g grunt-cli`

` -g` option is for global.

For bower packages, install using `npm install -g bower`

Next you'll install the Grunt plugins as defined in the package.json config file.  From your project directory, run the following command:

```
sudo npm install
```

Now that Grunt is installed, you'll want to run a Grunt task for the first time.  Use the following command.

```
grunt build
```

##Usage

You can use grunt watch, which will run predefined tasks whenever a file is added, modified or deleted.

```
grunt watch
```

If you want to build manually, you can use the `grunt` command or `grunt build`.

Note: `grunt build` will clear and download vendor files using Bower.

##Structure

This is a kick starter primarily for Require.js and Bootstrap, providing a foundation for structured front-end development, using tools such as Grunt, Bower and Assembly to automate and build the site.

[jQuery](//jquery.com/), specific [jQuery UI](//jqueryui.com/) components, [Bootstrap](//getbootstrap.com/), [Modernizr](//github.com/Modernizr/grunt-modernizr) and [Web Font Loader](//developers.google.com/fonts/docs/webfont_loader) are part of the [Require.js](//requirejs.org/) build.

Also using grunt-text-replace to remove Bootstrap Glyphicons from bootstrap.less, using Font Awesome instead.

Some test scripts have been created to demonstrate the structure and use of [Require.js](//requirejs.org/).  You can see what's loaded from the console.

[RequireJS Plugins](//github.com/millermedeiros/requirejs-plugins) is used to use get [Google fonts](//www.google.com/fonts) using the [Web Font Loader](//developers.google.com/fonts/docs/webfont_loader) via the [Google CDN](//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js).

##Configuration

The Grunt tasks are organised using [Thomas Boyt's approach, More maintainable Gruntfiles](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html).

There is a config.json file in the /grunt directory where you can set the `asset_path` and `theme_name`.  Grunt config uses these variables, as does Assemble, so there should be no additional configuration, other than naming the appropriate directories.

##Included Grunt tasks

* grunt-assemble
* grunt-bower-clean
* grunt-bower-task
* grunt-bowercopy
* grunt-contrib-clean
* grunt-contrib-jshint
* grunt-contrib-less
* grunt-contrib-requirejs
* grunt-contrib-uglify
* grunt-contrib-watch
* grunt-remove
* grunt-rename
* load-grunt-tasks
* grunt-text-replace
* grunt-contrib-imagemin
* grunt-contrib-copy
* grunt-modernizr
* grunt-prettify

##Related
* [Grunt: The JavaScript Task Runner](http://gruntjs.com/)
* [Assemble](https://github.com/assemble/)

##License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
