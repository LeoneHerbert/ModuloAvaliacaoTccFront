import { createStore } from "vuex";

export default createStore({
  state: {
    loggedIn: false,
  },
  mutations: {
    SET_LOG_IN(state) {
      state.loggedIn = true;
    },
  },
  actions: {
    logIn({ commit }) {
      commit("SET_LOG_IN");
    },
  },
  modules: {},
});
