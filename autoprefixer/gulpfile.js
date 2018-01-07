var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles',function() {
  // grab the content of your style...
  gulp.src('css/styles.css')
  // pipe it into autoprefixer...
    .pipe(autoprefixer())
      // then pipe it into a build folder
    .pipe(gulp.dest('build'))
});

// this will have gulp watch files and rerun whenever those files change (you can pass an array through this watch)
gulp.task('watch',function() {
  gulp.watch('css/styles.css', ['styles']);
});
