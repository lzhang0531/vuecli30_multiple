import app from "./app.vue";
import router from "@/router";
import store from "@/store";
import "babel-polyfill"; // 解决ie的兼容
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
