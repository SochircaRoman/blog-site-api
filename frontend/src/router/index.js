import { createWebHistory, createRouter } from 'vue-router';
import LoginItem from '../components/LoginItem.vue'
import RegisterItem from '../components/RegisterItem.vue'

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
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterItem
    }
  ]
})

export default router