import * as path from 'path';

import * as gulp from 'gulp';
import * as ts from 'gulp-typescript';
import tslint from 'gulp-tslint';
import * as sass from 'gulp-sass';
import * as sasslint from 'gulp-sass-lint';
import * as pug from 'gulp-pug';
import * as puglint from 'gulp-pug-lint';

import * as sourcemaps from 'gulp-sourcemaps';

import * as watch from 'gulp-watch';
import * as runSequence from 'run-sequence';
import * as browserSync from 'browser-sync';

import config from './src/config';

gulp.task('build.prod', ['build.client.copy', 'build.client.dev.ts', 'build.client.dev.pug', 'build.client.dev.scss', 'build.server', 'build.config']);

gulp.task('build.server', ['build.server.ts', 'build.server.copy']);

const tsProjectServer = ts.createProject('tsconfig-server.json');
gulp.task('build.server.ts', () => {
  const srcTs = path.join(config.SERVER_SRC, '**', '*.ts');
  return gulp.src(srcTs)
    .pipe(tslint())
    .pipe(tsProjectServer())
    .pipe(gulp.dest(config.SERVER_DIST));
});

gulp.task('build.server.copy', () => {
  const srcCopy = [path.join(config.SERVER_SRC, '**', '*'),
                   '!' + path.join(config.SERVER_SRC, '**', '*.ts')];

  return gulp.src(srcCopy)
    .pipe(gulp.dest(config.SERVER_DIST));
});

gulp.task('build.config', () =>
  gulp.src(path.join(config.SRC, 'config.ts'))
    .pipe(tslint())
    .pipe(ts({
      "allowUnreachableCode": false,
      "allowUnusedLabels": false,
      "declaration": false,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": [
        "es2016",
        "dom"
      ],
      "module": "commonjs",
      "noFallthroughCasesInSwitch": true,
      "noImplicitAny": true,
      "noImplicitReturns": true,
      "noImplicitUseStrict": false,
      "noLib": false,
      "pretty": true,
      "removeComments": true,
      "sourceMap": true,
      "target": "es5"
    }))
    .pipe(gulp.dest(config.DIST))
);

gulp.task('serve.dev', () => runSequence(
    'build.dev',
    'browserSync.start',
    'watch.build.dev'
  )
);

gulp.task('build.dev', ['build.client.copy', 'build.client.dev.ts', 'build.client.dev.pug', 'build.client.dev.scss']);

gulp.task('build.client.copy', () => {
  const src = [path.join(config.CLIENT_SRC, '**', '*'),
               '!' + path.join(config.CLIENT_SRC, '**', '*.ts'),
               '!' + path.join(config.CLIENT_SRC, '**', '*.scss'),
               '!' + path.join(config.CLIENT_SRC, '**', '*.pug')];

  return gulp.src(src)
    .pipe(gulp.dest(config.CLIENT_DIST));
});

const tsProject = ts.createProject('tsconfig.json');
gulp.task('build.client.dev.ts', () => {
  const src = path.join(config.CLIENT_SRC, '**', '*.ts');

  return gulp.src(src)
    .pipe(tslint())
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.CLIENT_DIST));
});

gulp.task('build.client.dev.scss', () => {
  const src = path.join(config.CLIENT_SRC, '**', '*.scss');

  return gulp.src(src)
    .pipe(sasslint())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.CLIENT_DIST));
});

gulp.task('build.client.dev.pug', () => {
  const src = path.join(config.CLIENT_SRC, '**', '*.pug');

  return gulp.src(src)
    .pipe(puglint())
    .pipe(sourcemaps.init())
    .pipe(pug())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.CLIENT_DIST));
});

gulp.task('browserSync.start', () => {
  browserSync.init(config.BROWSER_SYNC_INIT);
});

gulp.task('watch.build.dev', () => {
  watch(path.join(config.CLIENT_SRC, '**', '*.ts'), (event) => runSequence('build.client.dev.ts', () => browserSync.reload(event.path)));
  watch(path.join(config.CLIENT_SRC, '**', '*.scss'), (event) => runSequence('build.client.dev.scss', () => browserSync.reload(event.path)));
  watch(path.join(config.CLIENT_SRC, '**', '*.pug'), (event) => runSequence('build.client.dev.pug', () => browserSync.reload(event.path)));
  const src = [path.join(config.CLIENT_SRC, '**', '*'),
               '!' + path.join(config.CLIENT_SRC, '**', '*.ts'),
               '!' + path.join(config.CLIENT_SRC, '**', '*.scss'),
               '!' + path.join(config.CLIENT_SRC, '**', '*.pug')];
  watch(src, (event) => runSequence('build.client.copy', () => browserSync.reload(event.path)));
});

gulp.task('test', ['build.prod']);
