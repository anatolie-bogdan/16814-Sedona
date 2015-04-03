module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // CSS Min
      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1,
          report: 'gzip'
        },
        target: {
          files: {
            '/css/stylesheets/screen.min.css': ['/css/stylesheets/screen.css']
          }
        }
      }

    // Media
      cmq: {
        options: {
          log: false
        },
        style: {
          files: {
            '/css/stylesheets/screen.css': ['/css/stylesheets/screen.css']
          }
        }
      }


    // Autoprefixer
      autoprefixer: {
        multiple_files: {
          expand: true,
          flatten: true,
          src: '/css/stylesheets/*.css', // -> src/css/file1.css, src/css/file2.css 
        }
      }

    // Lint Spaces in code
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
    }

    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'
        },
        files: {                         // Dictionary of files 
          'css/sass/screen.css': ['css/stylesheets/screen.scss']       // 'destination': 'source'
        }
      }
    }

    //CSS Comb
    csscomb: {
      style: {
        expand: true,
        src: ["css/sass/**/*.scss"]
      }
    }

    //Image min
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: {[
          expand: true,
          src: ["img/**/*.{png,jpg,svg,gif}"]
          ]}
      }
    }

  });
};
