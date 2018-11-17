module.exports = function(grunt){
    //初始化配置grunt任务
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'build/js/build.js'
            }
        }
    })

    //grunt任务执行的时候去加载对应的任务插件
    grunt.loadNpmTasks('grunt-contrib-concat');

    //注册grunt的默认任务
    grunt.registerTask('default',['concat']);
}