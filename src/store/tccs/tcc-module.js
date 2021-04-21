import { tccs } from "./data";

/**
 * @type { import("vuex").Module }
 */
export default {
  namespaced: true,

  state: () => ({
    data: tccs,
    count: 0,
  }),

  getters: {
    fetchClass: (state) => (id) => {
      return !!state.classes.find((c) => !!c && c.classId === id);
    },
  },
};
