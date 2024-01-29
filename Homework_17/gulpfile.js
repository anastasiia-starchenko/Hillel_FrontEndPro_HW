const {src, dest, watch, parallel} = require('gulp');
const fileinclude = require('gulp-file-include');
const uglify = require("gulp-uglify");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));

const PATH = {
    html: {
        src: "src/*.html"
    },
    scss: {
        src: "src/scss/*.scss"
    },
    js: {
        src: "src/*.js"
    }
}

function htmlTask() {
    return src(PATH.html.src)
        .pipe(fileinclude({}))
        .pipe(dest("dist"));
}

function stylesTask() {
    return src(PATH.scss.src)
        .pipe(sourcemap.init())
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(sourcemap.write("."))
        .pipe(dest("dist/css"));
}

function jsTask() {
    return src(PATH.js.src)
        .pipe(sourcemap.init())
        .pipe(uglify())
        .pipe(sourcemap.write("."))
        .pipe(dest("dist/js"));
}

function watchTask() {
    watch(PATH.html.src, htmlTask);
    watch(PATH.scss.src, stylesTask);
    watch(PATH.js.src, jsTask);
}

exports.jsTask = jsTask;
exports.htmlTask = htmlTask;
exports.stylesTask = stylesTask;
exports.watchTask = watchTask;

exports.default = parallel(
    htmlTask,
    stylesTask,
    jsTask,
    watchTask
)
