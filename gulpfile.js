  var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	browser = require('browser-sync').create(),
  iconfont = require("gulp-iconfont"),
  consolidate = require("gulp-consolidate");

gulp.task('sass', function () {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      output_style: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['last 3 version'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browser.stream({match: '**/*.css'}));
});

// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
  browser.init({
        server: {
            baseDir: "./"
        }
    });
});

// Runs all of the above tasks and then waits for files to change
  gulp.task('default', ['serve'], function() {
  gulp.watch(['assets/scss/**/*.scss'], ['sass']);
  gulp.watch('./**/*.html').on('change', browser.reload);
});
