import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from '@/store'
import axios from 'index/common/js/axios'
import VueLazyload from 'vue-lazyload'
import globalComponents from 'index/common/js/components'

import 'index/common/styles/reset.styl'

Vue.use(axios)
Vue.use(globalComponents) // 初始化全局组件
Vue.use(VueLazyload, {
  loading: require('index/common/images/loading.png')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
