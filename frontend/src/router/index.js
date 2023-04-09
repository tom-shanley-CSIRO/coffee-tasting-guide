import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CoffeeView from '../views/CoffeeView.vue';
import CoffeeLogsView from '../views/CoffeeLogsView.vue';
import LogView from '../views/LogView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: CoffeeView
    },
    {
      path: '/coffee-logs',
      name: 'coffee-logs',
      component: CoffeeLogsView
    },
    {
      path: '/log',
      name: 'log',
      component: LogView
    },
  ]
})

export default router
