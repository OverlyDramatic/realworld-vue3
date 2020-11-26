import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../layout/index.vue'

const route = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: route
})

export default router
