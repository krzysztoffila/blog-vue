import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SingleBlog from '@/views/SingleBlog.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    //Przykładowy params TO PO :
    path: '/blog/:blogId',
    name: 'singleBlog',
    component: SingleBlog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
