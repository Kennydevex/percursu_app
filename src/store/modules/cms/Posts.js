// jshint esversion:6

export default ({
  strict: true,
  state: {
    posts: [],
  },

  getters: {
    posts(state) {
      return state.posts;
    },
  },

  mutations: {
    updatePosts(state, payload) {
      state.posts = payload;
    },
  },

  actions: {
    getPosts(context) {
      axios.get('/posts').then(function(response) {
        context.commit('updatePosts', response.data.data);
      });
    },
  }
});
