module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API || 'http://127.0.0.1:5000'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' 
    ? process.env.VUE_APP_API 
    : '/'
}
