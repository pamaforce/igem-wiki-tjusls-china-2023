const { defineConfig } = require('@vue/cli-service')

if(process.env.NODE_ENV !== "production"){
  module.exports = defineConfig({
    transpileDependencies: true
  })
} else {
  module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/tjusls-china/',
    pages: {
      index: {
        entry: 'src/main.js'
      }
    }
  })

}

