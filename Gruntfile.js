module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    bower: {
      install: {
        options: {
          targetDir: "bower",
          layout: "byType",
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },
    
    
    react: {
      combined_file_output: {
        files: {
          'js/react_compiled.js': [
            'jsx/react.jsx'
          ]
        }
      }
    },
    
    clean: {
      build: ["dst"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-bower-task');
  
  grunt.registerTask('default', ['clean', 'bower:install', 'react']);

};
