import {
  collection,
  addDoc
} from "firebase/firestore";
import {
  db
} from "@/plugins/firebase/firebase.js"

export default async function addDocument(collectionName, doc) {
  await addDoc(collection(db, collectionName), doc);
}
