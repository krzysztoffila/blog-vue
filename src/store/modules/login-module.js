import Vue from "vue";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  auth
} from "@/plugins/firebase/firebase";
import Router from "@/router"
export default {
  namespaced: true,
  state: {
    email: '',
    password: '',
  },
  getters: {},
  mutations: {},
  actions: {
    login({
      commit
    }, credentials) {
      let {
        email,
        password
      } = credentials
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          commit(`Toast/addToast`, {
            message: 'Zalogowano Pomyślnie'
          }, {
            root: true
          })
          Router.push("/");
        })
        .catch((error) => {
          let errMsg = ''
          switch (error.code) {
            case "auth/invalid-email":
              errMsg = Vue.prototype.$ll("invalidEmail")
              break;
            case "auth/user-not-found":
              errMsg = Vue.prototype.$ll('noAccountFound')
              break;
            case "auth/wrong-password":
              errMsg = Vue.prototype.$ll('incorrectPassword')
              break;
            case "auth/user-disabled":
              errMsg = Vue.prototype.$ll('disabledUser')
              break;
            case "auth/email-not-found":
              errMsg = Vue.prototype.$ll('emailNotFound')
              break;
            default:
              errMsg = Vue.prototype.$ll('emailOrPasswordNotFound')
              break;
          }
          commit(`Toast/addToast`, {
            message: errMsg,
            variant: 'danger'
          }, {
            root: true
          })
        });
    }
  },
}
