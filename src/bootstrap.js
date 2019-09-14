window._ = require('lodash');

window.axios = require('axios');

window.moment = require('moment');

window.moment.locale('pt-br');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// window.axios.defaults.baseURL = 'http://localhost:8000/api/v1';
window.axios.defaults.baseURL = 'http://104.238.165.7/api/v1';


// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
