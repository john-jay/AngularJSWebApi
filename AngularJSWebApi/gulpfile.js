/// <binding BeforeBuild='scripts' ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

// include plug-ins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

var config = {
    //Include all js files but exclude any min.js files
    src: ['app/**/*.js', '!app/**/*.min.js']
}

// Synchronously delete the output file(s)
gulp.task('clean', function () {
    del.sync(['app/all.min.js'])
});

// Combine and minify all files from the app folder
gulp.task('scripts', ['clean'], function () {

    return gulp.src(config.src)
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('app/'));
});

//Set a default tasks
gulp.task('default', ['scripts'], function () { });


var watch = require('gulp-watch');
gulp.task('watch', function () {
    return gulp.watch(config.src, ['scripts']);
});
