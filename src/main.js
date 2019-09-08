import Vue from 'vue'
import pt from 'vee-validate/dist/locale/pt_PT';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://104.238.165.7/api/v1';

Vue.use(VeeValidate);
Validator.localize('pt', pt);


// Validator.localize('pt', pt);



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
