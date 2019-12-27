import VueRouter from 'vue-router'
export default new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/list/1'
    },
    {
      path: '/list/:type',
      name: 'list',
      component: () => import('./pages/List.vue') },
    {
      path: '/user',
      name: 'user',
      component: () => import('./pages/User.vue')
    }
  ]
})
