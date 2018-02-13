const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

//error handling
function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}

//compile sass into css & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('./src/stylesheets/sass/app.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .on('error', handleError)
    .pipe(gulp.dest('./src/stylesheets/'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./src/stylesheets/'))
});


//watch
gulp.task('watch', function() {
  gulp.watch('./src/stylesheets/sass/**/*')
    .on('change', gulp.series('sass'));

})

gulp.task('default', gulp.parallel('sass', 'watch', function(done) {
  done();
}));