const gulp = require("gulp")
const htmlmin = require('gulp-htmlmin'); //引入压缩html插件
const cleanCSS = require('gulp-clean-css'); //引入压缩css插件
const uglify = require('gulp-uglify'); // 引入压缩JS插件
const babel = require('gulp-babel'); //编译js
var sass = require('gulp-sass'); //编译sass



function buildHtml() {
    // 读取文件
    return gulp.src("public/index.html")
        // 压缩
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        // 写入文件
        .pipe(gulp.dest("src/"))
}


function buildCss() {
    // 读取文件
    return gulp.src("public/css/common.css")

        // 压缩css
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        // 写入文件
        .pipe(gulp.dest("src/css/"))
}


function buildScss() {
    // 读取文件
    return gulp.src("public/sass/*.scss")
        // 编译
        // 编译
        .pipe(sass())

        // 压缩css
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        // 写入文件
        .pipe(gulp.dest("src/css/"))
}

function buildJS() {
    // 读取文件
    return gulp.src("public/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // 压缩css
        .pipe(uglify())

        // 写入文件
        .pipe(gulp.dest("src/js/"))
}

exports.buildHtml = buildHtml;
exports.buildCss = buildCss
exports.buildJS = buildJS
exports.buildScss = buildScss