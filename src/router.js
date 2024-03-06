import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppCars from './pages/AppCars.vue';
import SingleCar from './pages/SingleCar.vue';
import AppNotFound from './pages/AppNotFound.vue';

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
        {
            path: '/cars/:slug',
            name: 'single-car',
            component: SingleCar
        },
        // {
        //     path: '/cars/brand/:slug',
        //     name: 'brand-car',
        //     component: BrandCar
        // },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router };