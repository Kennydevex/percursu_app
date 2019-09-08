import Vue from 'vue'
import Vuex from 'vuex'

//===================Modules=====================
import users from './modules/system/Users';


Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        users
    },
})