"use strict";
// const titles = require("./title.js");
const glob = require("glob");
const pages = {};

glob.sync("./src/views/**/app.js").forEach(path => {
  const chunk = path.split("./src/views/")[1].split("/app.js")[0];
  // console.log(chunk);
  pages[chunk] = {
    entry: path,
    template: "public/index.html",
    // title: titles[chunk],
    chunks: ["chunk-vendors", "chunk-common", chunk]
  };
});
//正式配置
module.exports = {
  pages,
  lintOnSave: "error",
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
  configureWebpack: {
    externals: {
      //格式为 'aaa' : 'bbb', 其中，aaa表示要引入的资源的名字，bbb表示该模块提供给外部引用的名字，
      //由对应的库自定。例如，vue为Vue，vue-router为VueRouter.
      vue: "Vue",
      iview: "iView",
      "vue-router": "VueRouter",
      axios: "axios",
      vuex: "Vuex"
    }
  }
};
