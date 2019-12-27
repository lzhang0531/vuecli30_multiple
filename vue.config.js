'use strict'
// const titles = require("./title.js");
const glob = require('glob')
const pages = {}
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

glob.sync('./src/views/**/app.js').forEach(path => {
  const chunk = path.split('./src/views/')[1].split('/app.js')[0]
  // console.log(chunk);
  pages[chunk] = {
    entry: path,
    template: 'public/' + chunk + '.html',
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})

// 正式配置
module.exports = {
  pages,
  lintOnSave: 'error',
  // 不生成map文件
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('named-chunks')
    config.resolve.alias
      .set('common', resolve('src/common'))
      .set('index', resolve('src/views/index'))
      .set('manage', resolve('src/views/manage'))
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://movie.ihaoze.cn/'
      }
    }
  },
  configureWebpack: config => {
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          }
        })
      ]
    }
    config.externals = {
      // 格式为 '资源的名字' : '给外部引用的名字',
      vue: 'Vue',
      iview: 'iView',
      'vue-router': 'VueRouter',
      axios: 'axios',
      vuex: 'Vuex',
      dplayer: 'Dplayer'
    }
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
