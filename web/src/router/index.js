import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../views/TopView.vue'
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'top',
    component: TopView
  },
  {
    path: '/public',
    name: 'public',
    component: () => import('../views/PublicView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
