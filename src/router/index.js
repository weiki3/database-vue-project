import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'gallery',
      // route level code-splitting
      // this generates a separate chunk (gallery.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/detail/:vid(\\d+)',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    }
  ]
})

export default router
