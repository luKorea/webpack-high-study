const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// 将css打包到单独的文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolvePath = pathName => path.resolve(__dirname, pathName)

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolvePath('./build'),
    filename: '[name]-bundle.js',
    // 单独针对分包进行命名
    chunkFilename: '[name]_chunk.js',
    // publicPath 配置cdn地址
    clean: true
  },
  // 优化配置
  optimization: {
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
    }
  },
  // 排除某些包不需要进行打包
  externals: {
    axios: 'axios'
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // 将css注入到style中
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[hash:8].css',
      chunkFilename: 'css/[name]_chunk.css'
    })
  ]
}