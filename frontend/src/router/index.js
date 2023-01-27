import { createWebHistory, createRouter } from 'vue-router';
import LoginItem from '../components/LoginItem.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginItem
    }
  ]
})

export default router