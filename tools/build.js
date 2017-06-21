import clean from './clean';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { runTool } from 'toolz-cli';

const $ = gulpLoadPlugins();

export default async function build() {
  await runTool(clean);
  return new Promise((resolve, reject) => {
    gulp.src(['./src/proj-path.js'])
      // .pipe($.eslint())
      // .pipe($.eslint.format())
      // .pipe($.eslint.failAfterError())
      .pipe($.babel({
        presets: [
          ['es2015', { modules: false }],
          'stage-2',
          'node5'
        ],
        plugins: ['babel-plugin-transform-async-to-generator']
      }))
      .pipe($.uglify().on('error', reject))
      .pipe(gulp.dest('./dist/'))
      .on('end', resolve).on('error', reject);
  });
}
