var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles', function() {
  gulp.src('./app/assets/styles/style.css')
  .pipe(postcss([cssImport, autoprefixer,cssvars, nested]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
