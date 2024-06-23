import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {title: 'Home Page'}
    }

  ]
})

export default router