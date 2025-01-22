import HomeView from '@/views/HomeView.vue'
import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // using DYNAMIC IMPORT we only download the file once is needed
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      // projects/1
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue'),
    },
    {
      // catch all routes, it can be preceded from other module
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: h('p', { style: 'color: red;' }, '404 Not Found'),
    },
  ],
})

export default router
