import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SingleBlog from '@/views/SingleBlog.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    //Przykładowy params TO PO : 
    path: '/blog/:blogId',
    name: 'singleBlog',
    component: SingleBlog
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router