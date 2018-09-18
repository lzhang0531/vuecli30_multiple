import Vue from "vue";
import app from "./app.vue";
import "babel-polyfill"; // 解决ie的兼容
import axios from "axios";
Vue.prototype.$http = axios;
new Vue({
  el: "#app",
  render: h => h(app)
});
