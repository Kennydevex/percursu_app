// jshint esversion:6
// import axios from 'axios'
export function init(store, router) {
    router.beforeEach((to, from, next) => {
        const authUser = store.state.authentication.authUser;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

        if (authUser) {
            axios.defaults.headers.common = {
                "Authorization": `Bearer ${authUser.token}`,
                "Content-Type": "multipart/form-data",
                "X-Requested-With": "XMLHttpRequest"
            };
        }

        if (requiresAuth && !authUser) {
            next({ name: 'login' })
        } else if (to.path == '/login' && authUser) {
            next('/');
        } else {
            next();
        }
    });

    axios.interceptors.response.use(null, (error) => {
        if (error.response.status == 401) {
            store.commit('logout');
            router.push('/login');

        }

        if (error.response.status == 403) {
            router.push('/403');
        }



        return Promise.reject(error);
    });
}
