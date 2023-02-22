const path = require('path')

// html
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  ProvidePlugin
} = require('webpack')

// merge合并
const {
  merge
} = require('webpack-merge')
const productionConfig = require('./production.config')
const developmentConfig = require('./development.config')


const getCommonConfig = function (isProduction) {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name]_[contenthash].js',
      chunkFilename: '[name]_[contenthash].bundle.js',
      clean: true
    },
    // 配置扩展名
    resolve: {
      extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
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
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      // 垫片
      new ProvidePlugin({
        axios: ['axios', 'default'],
        dayjs: 'dayjs'
      })
    ]
  }
}


module.exports = function (env) {
  const isProduction = env.production
  const mergeConfig = isProduction ? productionConfig : developmentConfig
  return merge(getCommonConfig(isProduction), mergeConfig)
}