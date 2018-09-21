"use strict";
// const titles = require("./title.js");
const glob = require("glob");
const pages = {};
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
glob.sync("./src/views/**/app.js").forEach(path => {
  const chunk = path.split("./src/views/")[1].split("/app.js")[0];
  // console.log(chunk);
  pages[chunk] = {
    entry: path,
    template: "public/index.html",
    // title: titles[chunk],
    title: "官网",
    chunks: ["chunk-vendors", "chunk-common", chunk]
  };
});
//正式配置
module.exports = {
  pages,
  lintOnSave: "error",
  //不生成map文件
  productionSourceMap: false,
  chainWebpack: config => config.plugins.delete("named-chunks"),
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   "/api": {
    //     target: "http://127.0.0.1:8080",
    //     changeOrigin: true,
    //     pathRewrite: { "^/api": "" }
    //   }
    // }
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
    };
    config.externals = {
      //格式为 '资源的名字' : '给外部引用的名字',
      //由对应的库自定。例如，vue为Vue，vue-router为VueRouter.
      vue: "Vue",
      iview: "iView",
      "vue-router": "VueRouter",
      axios: "axios",
      vuex: "Vuex"
    };
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
};
