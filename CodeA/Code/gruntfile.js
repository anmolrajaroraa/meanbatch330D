module.exports=function(grunt){
    console.log("Grunt Start...");
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            one: {
              files: {
                'relase/output.min.js': ['js/*.js']
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify:one']);

}