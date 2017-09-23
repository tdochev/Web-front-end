const gulp = require('gulp');
const Builder = require('systemjs-builder');
const clean = require('gulp-clean');

gulp.task('build', ['clean'], () => {
    var builder = new Builder('dev/js', 'dev/js/system-config.js');
    builder.buildStatic('main.js', 'dist/js/main.js', { minify: true, sourceMaps: true });
});

gulp.task('clean', () => {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});
