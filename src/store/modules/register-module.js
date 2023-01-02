import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import {
  auth
} from "@/plugins/firebase/firebase";
import Router from "@/router"
export default {
  namespaced: true,
  actions: {
    register({
      commit
    }, credentials) {
      const {
        email,
        password
      } = credentials
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          commit(`Toast/addToast`, {
            message: 'Zarejestrowano i Zalogowano Pomyślnie'
          }, {
            root: true
          })
          Router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    }
  },
}
