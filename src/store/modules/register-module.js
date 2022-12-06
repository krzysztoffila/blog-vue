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
    register(_, credentials) {
      const {
        email,
        password
      } = credentials
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log("Zarejestrowano Pomyślnie");
          console.log(auth.currentUser);
          console.log(Router);
          Router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    }
  },
}
