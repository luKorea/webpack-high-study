const {
  src,
  dest,
  series,
  parallel
} = require("gulp")
const html = require('gulp-htmlmin')
const less = require('gulp-less')

const babel = require('gulp-babel')
const terser = require('gulp-terser')

const inject = require('gulp-inject')
// 处理 HTML
const htmlTask = () => {
  return src('./src/**/*.html')
    .pipe(html())
    .pipe(dest('./build'))
}
// 处理 js
const jsTask = () => {
  return src('./src/**/*.js')
    .pipe(babel())
    .pipe(terser({
      mangle: {
        toplevel: true
      }
    }))
    .pipe(dest('./build'))
}
// 处理 less
const lessTask = () => {
  return src('./src/**/*.less')
    .pipe(less())
    .pipe(dest('./build'))
}

//将 css js 注入到 HTML 中
const injectTask = () => {
  return src('./build/**/*.html')
    .pipe(inject(src(['./build/**/*.js', './build/**/*.css']), {
      relative: true
    }))
    .pipe(dest('./build'))
}

const buildTask = series(parallel(htmlTask, jsTask, lessTask), injectTask)

module.exports.default = buildTask