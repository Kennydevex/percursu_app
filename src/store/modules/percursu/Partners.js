// jshint esversion:6
export default ({
  strict: true,
  state: {
    partners: [],
    activedPartners: [],
  },

  getters: {
    partners(state) {
      return state.partners;
    },
    activedPartners(state) {
      return state.activedPartners;
    },
  },

  mutations: {
    updatePartners(state, payload) {
      state.partners = payload;
    },

    updateActivedPartners(state, payload) {
      state.activedPartners = payload;
    },
  },

  actions: {
    getPartners(context) {
      axios.get('/partners').then(function (response) {
        context.commit('updatePartners', response.data.data);
      });
    },

    getActivedPartners(context) {
      axios.get('/activedPartners').then(function (response) {
        context.commit('updateActivedPartners', response.data.data);
      });
    },
  }
});
