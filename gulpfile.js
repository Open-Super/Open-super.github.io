// build time:Fri Mar 13 2020 11:03:09 GMT+0800 (GMT+08:00)
var gulp=require("gulp");var minifycss=require("gulp-minify-css");var uglify=require("gulp-uglify");var minifyhtml=require("gulp-minify-html");gulp.task("minify-css",function(){return gulp.src("./public/**/*.css").pipe(minifycss()).pipe(gulp.dest("./public"))});gulp.task("minify-html",function(){return gulp.src("./public/**/*.html").pipe(minifyhtml()).pipe(gulp.dest("./public"))});gulp.task("minify-js",function(){return gulp.src(["./public/**/*.js","!./public/lib/blog-encrypt.js"]).pipe(uglify()).pipe(gulp.dest("./public"))});gulp.task("default",gulp.parallel("minify-css","minify-html","minify-js"));
//rebuild by neat 