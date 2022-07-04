var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');


  //npm install gulp --save --only=dev
gulp.task('hello', async () => {
    console.log('Hello ¡¡¡');
  });

  //npm install gulp-sass
  gulp.task('sass', function(){
    return gulp.src('SCSS/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('public/stylesheets'))
  });


//npm install gulp-minify-css
gulp.task("style_min", () => {
  return gulp
    .src("SCSS/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat("style_main.min.css"))
    .pipe(gulp.dest("public/stylesheets"));
});

//gulp watch
gulp.task('watch', () => {
  gulp.watch('SCSS/**/*.scss', gulp.series('style_min'));
});