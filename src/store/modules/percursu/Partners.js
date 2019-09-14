// jshint esversion:6
export default ({
  strict: true,
  state: {
    partners: [],
    activedPartners: [],
    featuredPartners: [],
  },

  getters: {
    partners(state) {
      return state.partners;
    },
    activedPartners(state) {
      return state.activedPartners;
    },
    featuredPartners(state) {
      return state.featuredPartners;
    },
  },

  mutations: {
    updatePartners(state, payload) {
      state.partners = payload;
    },

    updateActivedPartners(state, payload) {
      state.activedPartners = payload;
    },

    updateFeaturedPartners(state, payload) {
      state.featuredPartners = payload;
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

    getFeaturedPartners(context) {
      axios.get('/featuredPartners').then(function (response) {
        context.commit('updateFeaturedPartners', response.data.data);
      });
    },
  }
});
