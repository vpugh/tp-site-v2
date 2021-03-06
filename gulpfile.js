var gulp           = require('gulp');
var sass           = require('gulp-sass');
var browserSync    = require('browser-sync');
var useref         = require('gulp-useref');
var uglify         = require('gulp-uglify');
var gulpIf         = require('gulp-if');
var cssnano        = require('gulp-cssnano');
var imagemin       = require('gulp-imagemin');
var cache          = require('gulp-cache');
var del            = require('del');
var runSequence    = require('run-sequence');
var csso           = require('gulp-csso');
var sourcemaps     = require('gulp-sourcemaps');
var lazypipe       = require('lazypipe');
var nunjucksRender = require('gulp-nunjucks-render');
var plumber        = require('gulp-plumber');
var notify         = require('gulp-notify');

// Error
var onError = function (err) {
	console.log(err);
	this.emit('end');
}

// Start browserSync server
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app',
			index: 'index.html',
			directory: true
		},
	})
});

// Sass changes and compile into css
gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(plumber({
		errorHandler: function(err) {
			notify.onError({
				title: "Compile Error",
				message: "<%= error.message %>",
				sound: "beep"
			})(err);
			this.emit('end');
		}
	}))
	.pipe(sourcemaps.init())
	.pipe(sass({includePaths: ['app/scss/partials', 'app/scss/modules', 'app/scss/vendors']}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('nunjucks', function() {
	return gulp.src(['app/pages/**/*.+(html|njk)', '!app/pages/Old/**/*.+(html|njk)', '!app/pages/work/Old/**/*.+(html|njk)'])
		.pipe(plumber({
			errorHandler: function(err) {
				notify.onError({
					title: "Compile Error",
					message: "<%= error.message %>",
					sound: "beep"
				})(err);
				this.emit('end');
			}
		}))
		.pipe(nunjucksRender({path: ['app/templates']}))
		.pipe(gulp.dest('app'))
});

// Watchers
gulp.task('watch', ['nunjucks', 'browserSync', 'sass'], function (){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch(['app/**/*.html', '!app/prototype/'], browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch(['app/templates/**/*.njk', 'app/pages/**/*.njk'], ['nunjucks'], browserSync.reload);
});

// Optimizing CSS and Javascript
gulp.task('useref', function() {
	return gulp.src(['app/**/*.html', '!app/prototype/**/*.html'])
	.pipe(plumber({
			errorHandler: function(err) {
				notify.onError({
					title: "Compile Error",
					message: "<%= error.message %>",
					sound: "beep"
				})(err);
				this.emit('end');
			}
		}))
	//.pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
	.pipe(useref())
	//.pipe(sourcemaps.write('maps'))
	// minifies only js
	.pipe(gulpIf('*.js', uglify()))
	// minifies only css
	.pipe(gulpIf('*.css', csso()))
	.pipe(gulp.dest('dist'))
});

// Optimize Images
gulp.task('images', function(){
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		// Caching images that ran through imagemin
		// .pipe(cache(imagemin({
		// 	interlaced: true
		// })))
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

// Clear Image Cache
gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
});

// Copy fonts to Dist Folder
gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
});

// Clear cache
gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

// Cleaning Dist Folder
gulp.task('clean:dist', function() {
	return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Watch Sequence - compile scss, start server and watch changes
gulp.task('default', function(callback) {
	runSequence(['sass', 'browserSync'], 'watch',
		callback)
});

// Build and Compile Sequence - into Dist folder
gulp.task('build', function(callback) {
	runSequence(
		'clean:dist', 
		['nunjucks', 'sass', 'useref'],
		callback
	)
});