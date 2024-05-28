const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

gulp.task('ejs', () => {
  return gulp.src('src/**/*.ejs')
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.ejs', gulp.series('ejs'));
});

gulp.task('serve', () => {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8080
  });
});

gulp.task('default', gulp.series('ejs', gulp.parallel('watch', 'serve')));
