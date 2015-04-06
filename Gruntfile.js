module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {                              
      dist: {                        
        options: {                 
          style: 'expanded'
        },
        files: {
          'build/css/stylesheets/screen.css': ['source/css/sass/screen.scss']
        }
      }
    },
  

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        report: 'gzip'
      },
      target: {
        files: {
          'build/css/stylesheets/screen.min.css': ['build/css/stylesheets/screen.css']
        }
      }
    },


    cmq: {
      options: {
        log: false
      },
      style: {
        files: {
          'build/css/stylesheets/screen.css': ['build/css/stylesheets/screen.css']
        }
      }
    },


    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'build/css/stylesheets/*.css', // -> src/css/file1.css, src/css/file2.css 
      }
    },


    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },


    csscomb: {
      style: {
        expand: true,
        src: ["source/css/sass/**/*.scss"]
      }
    },


    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,svg,gif}"]
          }]
      }
    },

    copy: { 
      build: { 
        files: [{ 
          expand: true, 
          cwd: "source", 
          src: ["img/**",
                "js/**",
                "feedback/**",
                 "index.html" ], 
          dest: "build" 
        }] 
      }
    },

    clean: { 
      build: ["build"]
    },

    htmlmin: { 
      options: { 
        removeComments: true, 
        collapseWhitespace: true, 
        collapseBooleanAttributes: true, 
        caseSensitive: true, 
        keepClosingSlash: false 
      }, 
      html: { 
        files: { 
          "build/index.min.html": "build/index.html" 
        } 
      }
    }

  });

  grunt.registerTask("build", [ 
    "clean", 
    "copy", 
    "sass", 
    "autoprefixer", 
    "cmq", 
    "cssmin", 
    "imagemin", 
    "htmlmin" 

 ]);
};
