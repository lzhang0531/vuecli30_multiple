const app = {
  state: {
    list: [1, 2, 3, 4, 5]
  },
  mutations: {
    setList (state, data) {
      state.list = state.list.concat(data)
    }
  }
}
export default app
