const gulp = require('gulp');
const Builder = require('systemjs-builder');

gulp.task('build', function() {
    var builder = new Builder('dev/js', 'dev/js/system-config.js');
    builder.buildStatic('main.js', 'dist/js/main.js', { minify: true, sourceMaps: true });
});
