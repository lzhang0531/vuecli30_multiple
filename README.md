
vue项目基础框架搭建

``` bash
采用最新vue-cli3.0模板，自定义优化，多页面配置，框架集成
  "axios",
  "iview",
  "js-cookie",
  "less",
  "less-loader",
  "vue-router",
  "vuex"

# 解决问题
框架优化：1.路由按需加载，2.图片懒加载，3.CDN大幅优化首屏加载速度

webpack配置：打包自动清除console.log与debugger信息

# 安装dependencies
cnpm install

# 启动项目 localhost:8080
npm run dev

# 打包
npm run build


