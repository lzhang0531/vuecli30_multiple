import VueRouter from "vue-router";
export default new VueRouter({
  // mode: "history",//该模式会在服务器上刷新变404,还需后端设置
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./Home/Home.vue")
    },
    {
      path: "*",
      name: "error_404",
      meta: {
        hideInMenu: true
      },
      component: () => import("@/components/error-page/404.vue")
    }
  ]
});
