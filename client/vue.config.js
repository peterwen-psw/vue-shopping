const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: '192.168.58.163',
    // port: 8848,
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
