// jshint esversion:6
require('./bootstrap');
import Vue from 'vue';
import pt from 'vee-validate/dist/locale/pt_PT';
import VeeValidate, { Validator } from 'vee-validate';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueSweetalert2 from 'vue-sweetalert2';
import * as VueGoogleMaps from 'vue2-google-maps';
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { init } from '@/helpers/init';
import { acl } from '@/mixins/AccessControl';
AOS.init();

// Vue.prototype.$moment = moment;
Vue.config.productionTip = false;
Vue.use(VeeValidate);
Validator.localize('pt', pt);
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';
Vue.use(VueSweetalert2, { confirmButtonColor: '#004D40', cancelButtonColor: '##C62828' });

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCQ9szMDr4OGjND9wjr3stqZpvcBWdJIlc',
    libraries: 'places',
  },
});


Vue.mixin({
  computed: {
    authUser: function () { return this.$store.getters.authUser; }
  },
});
Vue.mixin(acl);


init(store, router);
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
