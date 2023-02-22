const path = require('path')

const resolvePath = pathName => path.resolve(__dirname, pathName)

module.exports = {
  mode: 'development',
  // false
  // eval
  // source-map

  // 不常用的值
  // eval-source-map
  // nosources-source-map
  // cheap-source-map
  // cheap-module-source-map 
  // inline-source-map
  // hidden-source-map
  devtool: 'source-map', // map文件映射
  entry: './src/index.js',
  output: {
    path: resolvePath('./build'),
    filename: 'bundle.js'
  }
}