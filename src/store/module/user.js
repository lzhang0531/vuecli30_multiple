import Cookies from "js-cookie";

const user = {
  state: {},
  mutations: {
    logout(state, vm) {
      console.log(vm);
      Cookies.remove("user");
      Cookies.remove("password");
      Cookies.remove("access");
      Cookies.remove("storeId");
    }
  }
};

export default user;
