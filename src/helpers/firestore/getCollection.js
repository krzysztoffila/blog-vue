import {
    collection,
    query,
    onSnapshot,
} from "firebase/firestore";
import {
    db
} from "@/plugins/firebase/firebase.js"
import store from "@/store";

export default function getCollection(collectionName, storeModuleName, storeState) {

    const q = query(collection(db, collectionName));
    onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            let obj = doc.data()
            obj.id = doc.id
            data.push(obj);
        });
        console.log(data);
        store.state[storeModuleName][storeState] = data;
    });
}