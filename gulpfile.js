var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var watch = require('gulp-watch');
var pretty = require('gulp-pretty');
var semi = require('gulp-semi').remove;

gulp.task('html', function(){
  return gulp.src('dev/*.pug')
    .pipe(pug())
    .pipe(pretty())
    .pipe(semi({ leading: true }))
    .pipe(gulp.dest('test'))
});

gulp.task('css', function(){
  return gulp.src('dev/*.less')
    .pipe(less())
    .pipe(gulp.dest('build'))
});

gulp.task('default', [ 'html', 'css' ]);

gulp.watch('dev/*.pug', ['html']);
gulp.watch('dev/*.less', ['css']);