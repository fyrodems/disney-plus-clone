import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// import { collection, addDoc, /*getDocs*/ } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqUKqZ0L2fC-jAT6G_EE0W-ja7hO-_wy4",
  authDomain: "disneyplus-clone-8b8c8.firebaseapp.com",
  projectId: "disneyplus-clone-8b8c8",
  storageBucket: "disneyplus-clone-8b8c8.appspot.com",
  messagingSenderId: "221891181439",
  appId: "1:221891181439:web:95791f84b1c66eb834f84a",
  measurementId: "G-FVGHW7R8J7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// try {
//   const docRef =  addDoc(collection(db, "movies"), {
//       backgroundImg: '',
//       type: 'series'
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// enable offline persistence
db.enablePersistence().catch((err) => {
  if (err.code === "failed-precondition") {
    console.log(
      "Persistence failed. Sprawdź, czy nie jest otwarta więcej niż jedna karta."
    );
  } else if (err.code === "unimplemented") {
    console.log("Persistence is not available in this browser.");
  }
});

export { db, auth, provider, storage, firebaseApp };
