import app from "./module/app";
import user from "./module/user";
import Vuex from "vuex";
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user
  }
});
export default store;
