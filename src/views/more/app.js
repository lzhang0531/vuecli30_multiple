import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import "babel-polyfill"; // 解决ie的兼容
import axios from "axios";
Vue.prototype.$http = axios;
new Vue({
  el: "#app",
  router,
  render: h => h(app)
});
