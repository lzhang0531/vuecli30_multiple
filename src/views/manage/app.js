import Vue from 'vue'
import app from './app.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
