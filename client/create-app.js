import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import createRouter from './config/router';

import './assets/styles/global.less';

Vue.use(VueRouter);

export default() => {
    const router = createRouter();

    const app = new Vue({
        router,
        render: h => h(App)
    });

    return { app, router };
};
