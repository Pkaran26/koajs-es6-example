import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

const jsTask = () => {
  return gulp.src(['./js/*.js'])
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

function watchTask() {
  gulp.watch(
    ['./js/*.js'],
    gulp.parallel(jsTask)
  );
}

export default gulp.series(
  gulp.parallel(jsTask),
  watchTask);
