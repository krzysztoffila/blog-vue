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
            message: this._vm.$ll("successLogin")
          }, {
            root: true
          })
          Router.push("/");
        })
        .catch((error) => {
          let errMsg = ''
          switch (error.code) {
            case "auth/invalid-email":
              errMsg = this._vm.$ll("invalidEmail")
              break;
            case "auth/user-not-found":
              errMsg = this._vm.$ll('noAccountFound')
              break;
            case "auth/wrong-password":
              errMsg = this._vm.$ll('incorrectPassword')
              break;
            case "auth/user-disabled":
              errMsg = this._vm.$ll('disabledUser')
              break;
            case "auth/email-not-found":
              errMsg = this._vm.$ll('emailNotFound')
              break;
            default:
              errMsg = this._vm.$ll('emailOrPasswordNotFound')
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
