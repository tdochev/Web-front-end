const gulp = require('gulp');
const sass = require('gulp-sass');
const exec = require('child_process').exec;
const Builder = require('systemjs-builder');

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

gulp.task('test', ()=>{
    var builder = new Builder('', './systemjs.config.js');
    
    builder.buildStatic('./app/main.js', 'outfile.js')
    .then(function() {
      console.log('Build complete');
    })
    .catch(function(err) {
      console.log('Build error');
      console.log(err);
    });
})