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
    login(_, credentials) {
      let {
        email,
        password,
        errMsg
      } = credentials
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          Router.push("/");
        })
        .catch((error) => {
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
            default:
              errMsg = "Email or password was incorrect";
          }
          alert(error.message);
        });
    }
  },
}
