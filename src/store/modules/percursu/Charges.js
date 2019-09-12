// jshint esversion:6
export default ({
  strict: true,
  state: {
    charges: [],
  },

  getters: {
    charges(state) {
      return state.charges;
    },
  },

  mutations: {
    updateCharges(state, payload) {
      state.charges = payload;
    },
  },

  actions: {
    getCharges(context) {
      axios.get('/charges').then(function(response) {
        context.commit('updateCharges', response.data.data);
      });
    },
  }
});
