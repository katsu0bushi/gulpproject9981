var gulp = require("gulp");
var slim = require("gulp-slim");

gulp.task('slim', function(){
  gulp.src("slim/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("css"));
});
