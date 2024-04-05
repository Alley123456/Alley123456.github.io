import { createRouter, createWebHashHistory } from 'vue-router'
import one from '../views/one.vue'

const routes = [
  {
    path: '/',
    name: 'one',
    component: one
  },
  {
    path: '/two',
    name: 'two',
    component: () => import('../views/two.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import('../views/three.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
