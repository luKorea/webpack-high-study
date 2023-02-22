const glob = require('glob')
const path = require('path')
// js
const TerserPlugin = require('terser-webpack-plugin')
// css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  PurgeCSSPlugin
} = require('purgecss-webpack-plugin')
const webpack = require('webpack')

// gzip 压缩
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'production',
  // 优化配置
  optimization: {
    // 开启 tree shaking 默认 production回自动开启
    usedExports: true,
    // chunkId
    chunkIds: 'deterministic',
    // runtime的代码是否抽取到单独的包中
    runtimeChunk: {
      name: 'runtime'
    },
    // 代码分包优化
    splitChunks: {
      // 默认值是 async 默认只有异步加载的文件才会分包
      chunks: 'all',
      // 对需要进行拆包的文件进行分包
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[name].bundle.js'
        }
      }
    },
    // 代码压缩优化
    minimize: true,
    minimizer: [
      // JS 代码压缩
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ],
  },
  // 排除某些包不需要进行打包
  externals: {
    axios: 'axios'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[hash:8].css',
      chunkFilename: 'css/[name]_chunk.css'
    }),
    // css tree shaking 
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`, {
        nodir: true
      })
    }),
    // 作用域提升
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 文件压缩
    new CompressionPlugin({
      // 匹配哪些文件需要压缩
      test: /\.(css|js)$/,
      // 最少得压缩比例
      minRatio: 0.7,
      // 采用的压缩算法
      algorithm: 'gzip'
    })
  ]
}