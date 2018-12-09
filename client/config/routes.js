export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        props: true,
        component: () => import('../views/todo/todo.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue')
    }
];
