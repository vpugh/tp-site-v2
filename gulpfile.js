const concat = require('gulp-concat');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const nunjucksRender = require('gulp-nunjucks-render');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');

const server = browserSync.create();

const paths = {
  scripts: {
    src: 'src/js/**/*.js',
    watchDest: 'src/js',
    dest: 'dist/js'
  },
  src: 'src',
  scss: {
    src: 'src/scss/**/*.scss',
    watchDest: 'src/css',
    dest: 'dist/css'
  },
  nunjucks: {
    templates: 'src/templates',
    templatesAll: 'src/templates/**/*.njk',
    pages: 'src/pages',
    pagesAll: 'src/pages/**/*.njk',
    njk: 'src/pages/**/*.+(html|njk)'
  }
};

const onError = function (err) {
  console.log(err);
  this.emit('end');
}

function style() {
  return gulp.src(paths.scss.src)
    .pipe(plumber({
      errorHandler: function(err) {
          notify.onError({
              title: "Sass Compile Error",
              message: "<%= error.message %>",
              sound: "beep"
          })(err);
          this.emit('end');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({includePaths: ['src/scss/**/.scss']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scss.watchDest))
    .pipe(browserSync.reload({ stream: true }))
}

function nunjucks() {
  return gulp.src(paths.nunjucks.njk)
  .pipe(plumber({
    errorHandler: function(err) {
          notify.onError({
              title: "Nunjucks Compile Error",
    message: "<%= error.message %>",
    sound: "beep"
          })(err);
          this.emit('end');
      }
  }))
  .pipe(nunjucksRender({path: [paths.nunjucks.templates]}))
  .pipe(gulp.dest(paths.src))
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.watchDest));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: paths.src
    }
  });
  done();
}

function watchFiles() {
  gulp.watch(paths.scss.src, gulp.series(style));
  gulp.watch([paths.nunjucks.njk, 'src/templates/**/*.+(html|njk)'], gulp.series(nunjucks));
  gulp.watch(paths.scripts.src, gulp.series(scripts));
  gulp.watch([paths.nunjucks.templatesAll, paths.nunjucks.pagesAll, paths.scss.src], gulp.series(reload));
  // gulp.watch("./assets/img/**/*", images);
}

// const watch = () => gulp.watch(paths.scripts.src, gulp.series(style, nunjucks, scripts, reload));

const dev = gulp.series(style, serve, nunjucks, scripts, watchFiles);
exports.default = dev;
exports.watch = dev;