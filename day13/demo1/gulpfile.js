const gulp = require("gulp");
const gulpWebserver = require("gulp-webserver");



function server() {
    gulp.src("public")
        .pipe(gulpWebserver({
            open: true,
            middleware(req, res, next) {
                if (req.url === "/getData") {
                    res.end(JSON.stringify(["a", "b", "c"]))
                }else{
                    next()
                }
            }
        }))
}

exports.server = server