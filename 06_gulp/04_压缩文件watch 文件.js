const {
  src,
  dest,
  watch
} = require("gulp")
const babel = require('gulp-babel')
const terser = require('gulp-terser')

const zipFile = () => {
  return src('./src/**/*.js')
    .pipe(babel())
    .pipe(terser({
      mangle: {
        toplevel: true
      }
    }))
    .pipe(dest('./build'))
}

// 监听文件的变化
watch('./src/index.js', zipFile)

module.exports = {
  zipFile
}