import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.prototype.$ll = function (key) {
    let ll = store.state.Lang.ll;
    let lang = store.state.Lang.lang
    if (ll[lang][key]) {
      return ll[lang][key];
    }
  },

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')