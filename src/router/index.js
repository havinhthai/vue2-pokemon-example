import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '../pages/Homepage.vue';
import About from '../pages/About.vue';
import Profile from '../pages/Profile.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'Homepage',
            path: '/',
            component: Homepage,
        },
        {
            name: 'About',
            path: '/about',
            component: About,
        },
        {
            name: 'Profile',
            path: '/:id',
            component: Profile,
        },
    ],
});
