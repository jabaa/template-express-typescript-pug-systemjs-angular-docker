import * as path from 'path';

import * as gulp from 'gulp';
import * as ts from 'gulp-typescript';
import * as sass from 'gulp-sass';
import * as pug from 'gulp-pug';

import * as watch from 'gulp-watch';
import * as runSequence from 'run-sequence';
import * as browserSync from 'browser-sync';

import config from './config';

gulp.task('serve', () => runSequence(
    'build',
    'server.start',
    'watch.build'
  )
);

gulp.task('build', ['copy', 'ts', 'pug', 'scss']);

gulp.task('copy', () => {
  const src = [path.join('src', 'client', '**', '*'),
               '!' + path.join('src', 'client', '**', '*.ts'),
               '!' + path.join('src', 'client', '**', '*.scss'),
               '!' + path.join('src', 'client', '**', '*.pug')];
  const dist = 'dist/client';

  return gulp.src(src)
    .pipe(gulp.dest(dist));
});

const tsProject = ts.createProject('tsconfig.json');
gulp.task('ts', () => {
  const src = path.join('src', 'client', '**', '*.ts');
  const dist = 'dist/client';

  return gulp.src(src)
    .pipe(tsProject())
    .pipe(gulp.dest(dist));
});

gulp.task('scss', () => {
  const src = path.join('src', 'client', '**', '*.scss');
  const dist = 'dist/client';

  return gulp.src(src)
    .pipe(sass())
    .pipe(gulp.dest(dist));
});

gulp.task('pug', () => {
  const src = path.join('src', 'client', '**', '*.pug');
  const dist = 'dist/client';

  return gulp.src(src)
    .pipe(pug())
    .pipe(gulp.dest(dist));
});

gulp.task('server.start', () => {
  browserSync.init(config.BROWSER_SYNC_INIT);
});

gulp.task('watch.build', () => {
  watch(path.join('src', 'client', '**', '*.ts'), (event) => runSequence('ts', () => browserSync.reload(event.path)));
  watch(path.join('src', 'client', '**', '*.scss'), (event) => runSequence('scss', () => browserSync.reload(event.path)));
  watch(path.join('src', 'client', '**', '*.pug'), (event) => runSequence('pug', () => browserSync.reload(event.path)));
});
