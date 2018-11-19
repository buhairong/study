var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

/*var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cssClean = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');*/
var open = require('open');

//注册合并压缩js的任务
gulp.task('js',function(){
    //配置任务的操作
    return gulp.src('src/js/**/*.js')  //找到目标源文件，将数据读取到gulp的内存中
        .pipe($.concat('build.js'))      //临时合并文件
        .pipe(gulp.dest('dist/js/'))   //临时输出文件到本地
        .pipe($.uglify())                //压缩文件
        .pipe($.rename({suffix:'.min'})) //重命名
        .pipe(gulp.dest('dist/js/'))
        .pipe($.livereload())           //实时刷新
        .pipe($.connect.reload())
});

//注册转换js的任务
gulp.task('less',function(){
   return gulp.src('src/less/*.less')
       .pipe($.less())                    //编译less文件为css文件
       .pipe(gulp.dest('src/css/'))
       .pipe($.livereload())           //实时刷新
       .pipe($.connect.reload())
});

//注册合并压缩css文件
gulp.task('css',['less'],function(){
    return gulp.src('src/css/*.css')
        .pipe($.concat('build.css'))
        .pipe($.rename({suffix:'.min'}))
        .pipe($.cleanCss({compatibility:'ie8'}))  //compatibility:'ie8' 兼容ie8
        .pipe(gulp.dest('dist/css/'))
        .pipe($.livereload())           //实时刷新
        .pipe($.connect.reload())
});

//注册压缩html的任务
gulp.task('html',function(){
    return gulp.src('index.html')
        .pipe($.htmlmin({collapseWhitespace:'true'}))
        .pipe(gulp.dest('dist/'))
        .pipe($.livereload())           //实时刷新
        .pipe($.connect.reload())
});

//注册监视任务（半自动）
gulp.task('watch',['default'],function(){
    //开启监听
    $.livereload.listen();
    //确认监听的目标以及绑定相应的任务
    gulp.watch('src/js/*.js',['js']);
    gulp.watch(['src/css/*.css','src/less/*.less'],['css']);
});

//注册监视任务（全自动）
gulp.task('server',['default'],function(){
    //配置服务器的选项
    $.connect.server({
        root:'dist/',
        livereload:true,//实时刷新
        port:5000
    });

    //自动打开链接
    open('http://localhost:5000');

    //确认监听的目标以及绑定相应的任务
    gulp.watch('src/js/*.js',['js']);
    gulp.watch(['src/css/*.css','src/less/*.less'],['css']);
})

//注册默认任务
gulp.task('default',['js','less','css','html'])