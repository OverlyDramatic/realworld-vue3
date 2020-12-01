import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../layout/Layout.vue'
import Home from '../views/home/Home.vue'
import NotFound from '../views/not-found/NotFound.vue'

const route = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import('../views/login/Login.vue'),
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('../views/login/Login.vue'),
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('../views/article/Article.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/profile/Profile.vue')
      },
      {
        path: '/editor',
        name: 'Editor',
        component: () => import('../views/editor/Editor.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/setting/Setting.vue')
      }
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: route,
})

export default router
