const {
  src,
  dest
} = require("gulp")


const copyFile = () => {
  return src('./src/**/*').pipe(dest('./build'))
}

module.exports = {
  copyFile
}