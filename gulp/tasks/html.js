import gulp from 'gulp';
import { html as conf } from '../conf';

gulp.task('html', () => {
  return gulp.src(conf.src)
    .pipe(gulp.dest(conf.dst));
});
