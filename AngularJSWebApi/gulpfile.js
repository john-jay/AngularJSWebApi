/// <binding BeforeBuild='scripts' ProjectOpened='watch' />
/*
  This combines and minifies app files. 
*/

// include plug-ins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

var config = {
    //Include all js files but exclude any min.js files
    src: ['app/**/*.js', '!app/**/*.min.js'],
    libs: {
        sources: ['bower_components/angular-bootstrap/ui-bootstrap-tpls.js'],
        dest: 'Scripts/libs/'
    }
}

// Synchronously delete the output file(s)
gulp.task('clean', function () {
    del.sync(['app/all.min.js'])
});

// Combine and minify all files from the app folder
gulp.task('scripts', ['clean'], function () {

    gulp.src(config.src)
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('app/'));
    gulp.src(config.libs.sources)
      .pipe(gulp.dest(config.libs.dest));
});

//Set a default tasks
gulp.task('default', ['scripts'], function () { });


var watch = require('gulp-watch');
gulp.task('watch', function () {
    return gulp.watch(config.src, ['scripts']);
});
