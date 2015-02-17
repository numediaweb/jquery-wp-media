module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("nw.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/jquery.wp.media.js"],
				dest: "dist/jquery.wp.media.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.wp.media.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.wp.media.js"],
				dest: "dist/jquery.wp.media.min.js"
			},
			options: {
				sourceMap: true,
				preserveComments: "some",
				mangle: true,
				banner: "<%= meta.banner %>"
			}
		},

		// watch for changes to source 
		// Better than calling grunt a million times 
		// (call 'grunt watch')
		watch: {
			files: ['src/*'],
			tasks: ['default']
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "concat", "uglify", "watch"]);
	grunt.registerTask("travis", ["jshint"]);

};