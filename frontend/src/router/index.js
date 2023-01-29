import { createWebHistory, createRouter } from 'vue-router';
import LoginItem from '../components/LoginItem.vue'
import RegisterItem from '../components/RegisterItem.vue'

// lazy-loaded
const Profile = () => import("../components/ProfileItem.vue")

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
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: Profile,
    },
  ]
})

export default router