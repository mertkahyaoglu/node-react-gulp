var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    nodemon = require('gulp-nodemon'),
    refresh = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify');

var paths = {
  appjs: ['./public/app.js']
};

gulp.task('build', function () {
  browserify(paths.appjs)
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    //.pipe(streamify(uglify()))
    .pipe(gulp.dest('public/dist'))
    .pipe(refresh());
});

gulp.task('serve', function () {
  nodemon({script: 'server.js'})
})

gulp.task('watch', function() {
  gulp.watch(paths.appjs, ['build']);
});

gulp.task('default', ['build', 'serve', 'watch']);
