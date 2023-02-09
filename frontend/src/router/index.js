import { createWebHistory, createRouter } from 'vue-router';
import LoginItem from '../components/LoginItem.vue';
import RegisterItem from '../components/RegisterItem.vue';
import HomeItem from '../components/HomeItem.vue';

// lazy-loaded
const Profile = () => import("../components/ProfileItem.vue")
const UserBoard = () => import("../components/UserBoard.vue")
const AdminBoard = () => import("../components/AdminBoard.vue")

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeItem
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
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: AdminBoard,
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: UserBoard,
    },
  ]
})

export default router