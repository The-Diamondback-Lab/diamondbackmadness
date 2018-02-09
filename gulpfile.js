const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');

//error handling
function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}

//compile sass into css & auto-inject into browsers
gulp.task('styles', function() {
  return gulp.src('./src/styles/main.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .on('error', handleError)
    .pipe(gulp.dest('./src/styles/'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/css/'))
});


//watch
gulp.task('watch', function() {
  gulp.watch('./src/components/**/*').on('change', gulp.series('styles'));
});

gulp.task('default', gulp.parallel('styles', 'watch', function(done) {
  done();
}));