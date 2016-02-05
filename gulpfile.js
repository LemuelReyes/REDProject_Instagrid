'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var growl = require('gulp-notify-growl');
var jscs = require('gulp-jscs');
//var jshint = require('gulp-jshint');
 var growlNotifier = growl();

//gulp rename

var rename = require("gulp-rename");

//plumber
var plumber = require('gulp-plumber');

//notify

var notify = require("gulp-notify");

//sass
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

// function: notifies error when error is in js
gulp.task('uglify', function() {

      gulp.src('main.js') // What files do we want gulp to consume?
          .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
          .pipe(jscs())
          .pipe(notify({
              title: 'JSCS',
              message: 'JSCS Passed. Let it fly!'
          }))
          .pipe(uglify()) // Call the uglify function on these files
          .pipe(gulp.dest('build')); // Where do we put the result?
});


// THE WATCHER!!!
gulp.task('watch', function(){
    browserSync.init({
      server: {
        baseDir: './'
      }
    });

gulp.watch(['main.js'], ['uglify']);
gulp.watch(['style.scss'], ['sass']);
gulp.watch(['build/main.js', 'index.html']).on('change', browserSync.reload);
  });

gulp.task('default', ['watch']);


// gulp.watch('sass/*/scss', ['sass']);
// gulp.watch('js/*.js', ['js'])

gulp.task('sass', function() {
   gulp.src('./css/style.scss')
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});
