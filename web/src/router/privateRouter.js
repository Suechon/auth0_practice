import { authGuard } from '@auth0/auth0-vue'

export default [
    {
        path: '/private',
        name: 'private',
        beforeEnter: authGuard,
        component: () => import('../views/PrivateView.vue')
    },
    {
        path: '/admin',
        name: 'admins',
        beforeEnter: authGuard,
        meta: { authority: true },
        component: () => import('../views/AdminView.vue')
    },
]