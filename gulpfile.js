/**
 * Created by John on 11/13/2016.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('sass', function () {

    return gulp.src(['./sass/app.sass','./sass/vendor.sass'])
        .pipe(sourcemaps.init())
        .pipe(sass(
            {
                includePaths: require('bourbon').includePaths
            }
        ).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css/'));
});

// gulp.task('cssmin', function () {
//     gulp.src('./wp-content/themes/storefront-child/css/*.css')
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('./wp-content/themes/storefront-child/css'));
// });


gulp.task('merge-js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./script/'));
});

gulp.task('default', function () {
    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch('./js/**/*.js', ['merge-js']);
});