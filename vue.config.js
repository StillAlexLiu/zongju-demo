module.exports = {
  devServer: {
    proxy: {
      '/screenNode': {
        target: 'http://localhost:3000/screenNode',
        pathRewrite: {
          '^/screenNode': '/'
        }
      }
    }
  }
}
