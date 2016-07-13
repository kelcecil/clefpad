module.exports = function(grunt) {
   grunt.loadNpmTasks('grunt-mocha-test');

   grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');
  grunt.registerTask('test', 'mochaTest');
};
