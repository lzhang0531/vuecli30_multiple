import app from "./app.vue";
import "babel-polyfill"; // 解决ie的兼容

new Vue({
  el: "#app",
  render: h => h(app)
});
