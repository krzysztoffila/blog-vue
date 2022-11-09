import Vue from 'vue'
import Vuex from 'vuex'
import Blog from '@/store/modules/blog-module.js'
import Categories from '@/store/modules/categories-module.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Blog,
    Categories
  }
})