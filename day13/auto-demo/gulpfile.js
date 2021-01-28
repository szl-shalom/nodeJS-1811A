const {
    src,
    dest,
    parallel,
    watch,
} = require("gulp");
const gulpHtmlmin = require("gulp-htmlmin"); //引入压缩html
const gulpSass = require("gulp-sass"); //引入编译sass
const gulpCleanCss = require("gulp-clean-css"); //引入压缩css
const gulpBabel = require("gulp-babel"); //引入编译js
const gulpUglify = require("gulp-uglify"); //引入压缩软卷
const gulpRename = require("gulp-rename"); // 修改名字
const concat = require("gulp-concat");
const imagemin = require('gulp-imagemin');
// console.log(imagemin)

// 打包任务 
function BuildHtml() {
    // 读取所有html文件
    return src("src/**/*.html")
        // 压缩
        .pipe(gulpHtmlmin({
            collapseWhitespace: true,
        }))
        // 输出
        .pipe(dest("dist"))

}
// 任务名称
function BuildScss() {
    // 读取
    return src("src/sass/*.scss")
        .pipe(gulpSass())
        .pipe(gulpCleanCss())
        // 写入
        .pipe(dest("dist/css"))
}

// 任务名称
function BuildJS() {
    return src("src/js/*.js")
        .pipe(concat('all.js'))
        .pipe(dest("dist/js"))
        .pipe(gulpBabel())
        .pipe(gulpUglify())
        .pipe(gulpRename(path => {
            path.basename += ".min"
        }))
        .pipe(dest("dist/js"))

}

function BuildImg() {
    return src("src/img/1.jpeg")
        .pipe(imagemin())
        .pipe(dest("dist/img"))
}


// 
function auto() {
    watch("src", parallel(BuildHtml, BuildImg, BuildScss, BuildJS))
}



// 抛出
module.exports = {
    BuildHtml,
    BuildScss,
    BuildJS,
    BuildImg,
    build: parallel(BuildHtml, BuildImg, BuildScss, BuildJS),
    auto: auto
}