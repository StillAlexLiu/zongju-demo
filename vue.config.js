const StatsPlugin = require('stats-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      '/screenNode': {
        target: 'http://localhost:3000/screenNode',
        pathRewrite: {
          '^/screenNode': '/'
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new StatsPlugin('stats.json', {
        chunkModules: true,
        chunks: true,
        assets: false,
        modules: true,
        children: true,
        chunksSort: true,
        assetsSort: true
      }), new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false// 是否删除源文件
      })
    ]
  }
}
