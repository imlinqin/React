/// <binding Clean='webpack' />
var gulp = require('gulp');
var webpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task('webpack', function () {
	var myConfig = Object.create(webpackConfig);
	return gulp
      .src('./mui/index.jsx')
        .pipe(webpack(myConfig))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    gulp.watch('./mui/*.*', ['webpack']);
});

// 注册缺省任务
//gulp.watch('./mui/*.*', ['webpack']);
gulp.task('default', ['webpack','watch']);