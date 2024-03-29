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
import AppPerfil from '@/pages/frontend/Perfil.vue';
import AppPartner from '@/pages/frontend/Partner.vue';



//  Admin
import Admin from '@/components/backend/App.vue';
import Dashboard from '@/pages/backend/Dashboard.vue';
import BackPerfil from '@/pages/backend/Perfil.vue';
import Partners from '@/components/backend/percursu/partners/Index.vue';
import ListPartners from '@/components/backend/percursu/partners/List.vue';
import CreatePartner from '@/components/backend/percursu/partners/Create.vue';
import Partner from '@/components/backend/percursu/partners/View.vue';
import UpdatePartner from '@/components/backend/percursu/partners/Update.vue';

import Users from '@/components/backend/system/users/Index.vue';
import ListUsers from '@/components/backend/system/users/List.vue';
import CreateUser from '@/components/backend/system/users/Create.vue';
import User from '@/components/backend/system/users/View.vue';
import UpdateUser from '@/components/backend/system/users/Update.vue';

import Permissions from '@/components/backend/system/permissions/Index.vue';
import ListPermissions from '@/components/backend/system/permissions/List.vue';

import Roles from '@/components/backend/system/roles/Index.vue';
import ListRoles from '@/components/backend/system/roles/List.vue';

//CMS
import Posts from '@/components/backend/cms/posts/Index.vue';
import ListPosts from '@/components/backend/cms/posts/List.vue';
import CreatePost from '@/components/backend/cms/posts/Create.vue';
import Post from '@/components/backend/cms/posts/View.vue';
import UpdatePost from '@/components/backend/cms/posts/Update.vue';

import Categories from '@/components/backend/cms/categories/Index.vue';
import ListCategories from '@/components/backend/cms/categories/List.vue';

import Tags from '@/components/backend/cms/tags/Index.vue';
import ListTags from '@/components/backend/cms/tags/List.vue';

import Error_403 from '@/pages/errors/403.vue';



export default [

    //Admin Paths
    {
        path: '/admin',
        component: Admin,
        meta: {
            requiresAuth: true,
            breadcrumb: true,
            manager: true,
        },
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true,
                    breadcrumb: true,
                },
            },
            {
                path: 'perfil',
                name: 'back-perfil',
                component: BackPerfil
            },
            {
                path: 'parceiros',
                component: Partners,
                children: [
                    {
                        path: '/',
                        name: 'list-partners',
                        component: ListPartners
                    }, {
                        path: 'criar',
                        name: 'create-partner',
                        component: CreatePartner
                    }, {
                        path: 'editar/:username',
                        name: 'update-partner',
                        component: UpdatePartner
                    }, {
                        path: 'ver/:username',
                        name: 'view-partner',
                        component: Partner
                    },
                ]
            },
            {
                path: '/utilizadores',
                component: Users,
                meta: {
                    admin: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'list-users',
                        component: ListUsers
                    }, {
                        path: 'criar',
                        name: 'create-user',
                        component: CreateUser
                    }, {
                        path: 'editar/:username',
                        name: 'update-user',
                        component: UpdateUser
                    }, {
                        path: 'ver',
                        name: 'view-user',
                        component: User
                    },
                ]
            },
            {
                path: '/permissoes',
                component: Permissions,
                meta: {
                    admin: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'list-permissions',
                        component: ListPermissions
                    },
                ]
            },
            {
                path: '/papeis',
                component: Roles,
                meta: {
                    admin: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'list-roles',
                        component: ListRoles
                    },
                ]
            },
            {
                path: '/publicacoes',
                component: Posts,
                children: [
                    {
                        path: '/',
                        name: 'list-posts',
                        component: ListPosts
                    }, {
                        path: 'criar',
                        name: 'create-post',
                        component: CreatePost
                    }, {
                        path: 'editar',
                        name: 'update-post',
                        component: UpdatePost
                    }, {
                        path: 'ver',
                        name: 'view-post',
                        component: Post
                    },
                ]
            },
            {
                path: '/categorias',
                component: Categories,
                children: [
                    {
                        path: '/',
                        name: 'list-categories',
                        component: ListCategories
                    },
                ]
            },
            // {
            //     path: '/empresas',
            //     component: Companies,
            //     children: [
            //         {
            //             path: '/',
            //             name: 'list-companies',
            //             component: ListCompanies
            //         },
            //     ]
            // },
            {
                path: '/marcadores',
                component: Tags,
                children: [
                    {
                        path: '/',
                        name: 'list-tags',
                        component: ListTags
                    },
                ]
            },

            // {
            //     path: '/settings',
            //     component: Settings,
            //     children: [
            //         {
            //             path: 'registo_pessoal',
            //             name: 'folks',
            //             component: Folks
            //         },
            //         {
            //             path: 'entidades',
            //             name: 'entities',
            //             component: Entities
            //         },
            //         {
            //             path: 'geral',
            //             name: 'general',
            //             component: General
            //         },
            //     ]
            // },

            // { path: '/ajuda', name: 'help', component: Help },
        ]
    },
    //App Frontend Paths

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
                        path: '/colaboradores/criar',
                        name: 'criar-colobaradores',
                        component: CreatePartner
                    },
                    {
                        path: '/colaboradores/editar/:username',
                        name: 'editar-colobaradores',
                        component: UpdatePartner
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
                    {
                        path: '/perfil/:username',
                        name: 'app-perfil',
                        component: AppPerfil
                    },

                    {
                        path: '/403',
                        name: '403_error',
                        component: Error_403
                    }


                ]
            },
            {
                path: 'colaborador/:username',
                name: 'app-partner',
                component: AppPartner
            },
        ]
    },
];