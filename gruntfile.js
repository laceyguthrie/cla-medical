module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Process scss files
    sass:
    {
      dist:
      {
        options:
        {
          style: 'expanded'
        },
        files:
        {
          'assets/_src/scss/style.css': 'assets/_src/scss/style.scss'
        }
      }
    },

    // Minify CSS
    cssmin:
    {
      options:
      {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target:
      {
        files:
        {
          'assets/css/style.min.css': ['assets/_src/scss/*.css']
        }
      }
    },

    // JS Concat
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/_src/js/jquery.js', 'assets/_src/js/slick.js', 'assets/_src/js/remodal.js', 'assets/_src/js/app.js'],
        dest: 'assets/js/app.js',
      },
    },

    // JS Minify
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/app.min.js': ['assets/js/app.js']
        }
      }
    },

    // Watch Files
    watch:
    {
      css:
      {
        files: ['assets/_src/scss/**'],
        tasks: ['css']
      },
      js:
      {
        files: ['assets/_src/js/**'],
        tasks: ['js']
      }
    }

  });


  // Load
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register
  grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);
  grunt.registerTask('css', ['sass', 'cssmin']);
  grunt.registerTask('js', ['concat', 'uglify']);

};
