import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantsView from '../views/RestaurantsView/RestaurantsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/restaurants',
      name: 'restaurant',
      component: RestaurantsView
    }
  ]
})

export default router
