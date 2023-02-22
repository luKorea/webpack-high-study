module.exports = {
  mode: 'development',
  devServer: {
    // 静态服务器访问资源目录
    static: ['public', 'static'],
    port: 3000,
    compress: true, // 开启 gzip
    proxy: {
      '^/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },
  plugins: []
}