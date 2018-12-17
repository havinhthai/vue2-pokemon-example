import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '../pages/Homepage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'Homepage',
            path: '/homepage',
            component: Homepage,
        },
    ],
});
