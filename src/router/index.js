/* eslint-disable */
// jshint esversion:6

import Vue from 'vue';
import Router from 'vue-router';
import paths from './path';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: paths
});