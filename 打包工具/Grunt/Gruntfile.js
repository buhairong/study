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
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    'build/js/build.min.js': ['build/js/build.js']
                }
            }
        }
    })

    //grunt任务执行的时候去加载对应的任务插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //注册grunt的默认任务
    grunt.registerTask('default',[]);
}