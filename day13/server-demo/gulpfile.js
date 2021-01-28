const {
    src,
    dest,
    watch,
    parallel
} = require("gulp");
const gulpSass = require("gulp-sass");
// const connect = require('gulp-connect');
const gulpWebserver = require('gulp-webserver');


function buildHtml() {
    return src("src/**/*.html")
        .pipe(dest("dist/"))
}

function buildScss() {
    return src("src/sass/*.scss")
        .pipe(gulpSass())
        .pipe(dest("dist/css"))
}

function buildJS() {
    return src("src/js/*.js")
        .pipe(dest("dist/js"))
}

function buildImg() {
    return src("src/img/*.jpeg")
        .pipe(dest("dist/img"))
}

function auto() {
    watch("src/**/*.html", parallel([buildHtml]))
    watch("src/js/*.js", parallel([buildJS]))
    watch("src/sass/*.scss", parallel([buildScss]))
    watch("src/img/*.jpeg", parallel([buildImg]))
}

function webserver() {
    src('dist')
        .pipe(gulpWebserver({
            livereload: true,
            // directoryListing: true,
            open: true,
            middleware(req, res, next) {
                if (req.url === "/login") {
                    res.end("ok")
                } else {
                    next()
                }
            }
        }));
}

// function connect() {
//     connect.server({
//         root: 'dist',
//         livereload: true
//     });
// }

module.exports = {
    buildHtml,
    buildImg,
    buildJS,
    buildScss,
    build: parallel([buildHtml, buildScss, buildImg, buildJS]),
    auto,
    webserver,
    default: parallel([auto, webserver])
}