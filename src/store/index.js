import { createStore } from "vuex";
import tccsModule from "./tccs/tcc-module";

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
  modules: {
    tccs: tccsModule,
  },
});
