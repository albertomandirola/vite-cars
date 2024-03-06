import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppCars from './pages/AppCars.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/cars',
            name: 'cars',
            component: AppCars
        },
        // {
        //     path: '/projects/:slug',
        //     name: 'single-project',
        //     component: SingleProject
        // },
        // {
        //     path: '/projects/type/:slug',
        //     name: 'type-projects',
        //     component: TypeProjects
        // },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'not-found',
        //     component: AppNotFound
        // }
    ]
});

export { router };