// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");

// style.scssをタスクを作成する
gulp.task('default', function () {

  // ★ style.scssファイルを監視
  gulp.watch('css/style.scss', function () {

    // style.scssファイルを取得
    gulp.src('css/style.scss')
      // Sassのコンパイルを実行
      .pipe(sass({
        outputStyle: 'expanded'
      })
      // (これがないと自動的に止まってしまう)
      .on('error', sass.logError))
      .pipe(autoprefixer())
      // cssフォルダー以下に保存
      .pipe(gulp.dest('css'));
  });
});










// テストーーーーーーーーーーーーーーstyle.scssをタスクを作成する
gulp.task('destcss', function () {
  // style.scssファイルを取得
  gulp.src('css/style.scss')
    // Sassのコンパイルを実行
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    // cssフォルダー以下に保存
    .pipe(gulp.dest('dest'));
});
