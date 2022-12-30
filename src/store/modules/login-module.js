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
    password: ''
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
              errMsg = "Invalid email";
              break;
            case "auth/user-not-found":
              errMsg = "No account with thah email was found";
              break;
            case "auth/wrong-password":
              errMsg = "Incorrect password";
              break;
            case "auth/user-disabled":
              errMsg = "User is disabled";
              break;
            case "auth/email-not-found":
              errMsg = "Email not Found"
              break;
            default:
              errMsg = "Email or password was incorrect";
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
