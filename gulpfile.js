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
    exec('live-server');
});

gulp.task('build', ()=> {
     gulp.src('./index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['build'], ()=>{
    exec('firebase deploy');
});