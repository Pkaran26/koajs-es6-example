import gulp from 'gulp';
import less from 'gulp-less';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

const paths = {
  scripts: {
    src: '*.js',
    dest: '/'
  }
};

const jsTask = ()=>{
  return gulp.src(['*.js'])
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('/'))
    // gulp.watch('*.js', ['default']);
}

function watchTask(){
    gulp.watch(
        ['*.js'],
        gulp.parallel(jsTask)
    );
}

export default gulp.series(
    gulp.parallel(jsTask),
    watchTask);
