import Vue from 'vue'
import Vuex from 'vuex'
import Blog from '@/store/modules/blog-module.js'
import Categories from '@/store/modules/categories-module.js'
import Search from '@/store/modules/search-module.js'
import Lang from '@/store/modules/lang-module.js'
import Login from '@/store/modules/login-module.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Blog,
    Categories,
    Search,
    Lang,
    Login
  }
})