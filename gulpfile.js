import gulp from 'gulp';
import concat from 'gulp-concat';

const jsTask = () => {
  return gulp.src(['./src/public/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./src/public/dist'))
}

// function watchTask() {
//   gulp.watch(
//     ['./src/public/js/*.js'],
//     gulp.parallel(jsTask)
//   );
// }

export default gulp.series(
  gulp.parallel(jsTask));

/*gulp.series(
  gulp.parallel(jsTask),
  watchTask);
*/
