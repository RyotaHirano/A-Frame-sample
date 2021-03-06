import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import { reload } from 'browser-sync';
import { DIR } from './gulp/conf';

requireDir('./gulp/tasks');

gulp.task('predefault', cb => {
  runSequence(
    ['webpack', 'html', 'sass'],
    'serve',
    cb
  );
});

gulp.task('build', cb => {
  runSequence(
    'clean',
    ['html', 'sass', 'webpack', 'imagemin'],
    'copy:build',
    cb
  );
});

gulp.task('default', ['predefault'], () => {
  gulp.watch(
    [`${DIR.SRC}/html/**/*.html`],
    ['html', reload]
  );
  gulp.watch(
    [`${DIR.SRC}/css/**/*.{scss,sass}`],
    ['sass', reload]
  );
  gulp.watch(
    [`${DIR.SRC}/js/**/*.js`],
    ['webpack', reload]
  ).on('change', ev => {
    console.log(`File ${ev.path} was ${ev.type}, running tasks...`);
  });
});
