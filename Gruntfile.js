module.exports = function(grunt) {

	require( 'time-grunt' )( grunt );
  require( 'load-grunt-tasks' )( grunt );

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jekyll: {                            
	    serve: {                           
	      options: {
	        dest: './_site',
	        drafts: true,
	        serve: true
	      }
	    }
	  },
    sass: {                              
      dist: {                            
        options: {                       
          style: 'compressed'
        },
        files: {                                
          'css/main.css': 'css/_scss/main.scss'        
        }
      }
    },
    watch: {
      sass: {
        files : [ '_layouts/*.html',
                  '_posts/*.md',
                  'css/_scss/*.scss', 
                  'css/_scss/*/*.scss',
                  '_config.yml',
                  '*.html' ],
        tasks: ['sass', 'jekyll'],
      }
    }
  });

	grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch', 'jekyll']);

};