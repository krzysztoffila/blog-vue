import {
  getFirestore
} from "firebase/firestore";
import {
  initializeApp
} from "firebase/app";
import {
  getAuth
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCXE5d4gcsk80i8a3jB7gFgwrMQf14VaI",
  authDomain: "blog-22031.firebaseapp.com",
  projectId: "blog-22031",
  storageBucket: "blog-22031.appspot.com",
  messagingSenderId: "300309075639",
  appId: "1:300309075639:web:b9c9a9aa0280b39fff5f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Exportowanie bazy danych
export const db = getFirestore(app)
// Autoryzacja
export const auth = getAuth(app)
