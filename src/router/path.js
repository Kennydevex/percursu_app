/* eslint-disable */
// jshint esversion:6
import App from '@/components/frontend/App.vue';
import Home from '@/pages/frontend/Home.vue';
import Colaboradores from '@/pages/frontend/Colaboradores.vue';
import Noticias from '@/pages/frontend/Noticias.vue';
import Formacoes from '@/pages/frontend/Formacoes.vue';
import Empregos from '@/pages/frontend/Empregos.vue';
import Principal from '@/pages/frontend/Principal.vue';
import Login from '@/pages/frontend/Login.vue';
import Register from '@/pages/frontend/Register.vue';

export default [

    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                component: Principal,
                children: [
                    {
                        path: '/',
                        name: 'home',
                        component: Home
                    }, {
                        path: '/empregos',
                        name: 'empregos',
                        component: Empregos
                    }, {
                        path: '/formacoes',
                        name: 'formacoes',
                        component: Formacoes
                    }, {
                        path: '/colaboradores',
                        name: 'colaboradores',
                        component: Colaboradores
                    },
                    {
                        path: '/noticias',
                        name: 'noticias',
                        component: Noticias
                    }, {
                        path: '/login',
                        name: 'login',
                        component: Login
                    }, {
                        path: '/registar',
                        name: 'register',
                        component: Register
                    },
                ]
            }
        ]
    },
];