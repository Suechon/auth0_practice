export default [
    {
        path: '/',
        name: 'top',
        component: () => import('../views/TopView.vue')
    },
    {
        path: '/public',
        name: 'public',
        component: () => import('../views/PublicView.vue')
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: () => import('../views/RedirectView.vue')
    },
]