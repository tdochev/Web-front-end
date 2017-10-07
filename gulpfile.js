const gulp = require('gulp');
const sass = require('gulp-sass');
const exec = require('child_process').exec;

gulp.task('sass', function() {
    gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
})

gulp.task('dev', ['watch'], function() {
    exec("live-server");
});