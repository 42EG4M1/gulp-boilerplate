var gulp   = require('gulp');
var config = require('../config').sass;
var $      = require('gulp-load-plugins')();


gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.pleeease({
        /*autoprefixer: {
            browsers: ['last 2 versions']
        },*/
        minifier: true//true or false
    }))
    .pipe(gulp.dest(config.dest));
});