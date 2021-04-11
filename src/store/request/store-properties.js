/**
 * @type { import("vuex").StoreOptions }
 */
export const storeProperties = {
  state: () => ({
    isLoading: false,
  }),

  mutations: {
    "SWITCH-LOADING-STATE"(state) {
      state.isLoading = !state.isLoading;
    },
    nowLoad(state) {
      state.isLoading = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },

  actions: {
    /**
     *
     * @param {ActionContext} param
     * @param {Promise} callback
     */
    async onRequest({ commit }, callback) {
      try {
        commit("SWITCH-LOADING-STATE");
        const executed = await callback();
        return executed;
      } catch (error) {
        console.error(error);
        return {};
      } finally {
        commit("SWITCH-LOADING-STATE");
      }
    },
  },
  getters: {
    loading: (state) => state.isLoading,
  },
};
