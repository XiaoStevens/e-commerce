import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyB2KBdTbWf3h7sxRVS8M4Kvhtza8018ZLg",
  authDomain: "e-com-5c0b6.firebaseapp.com",
  databaseURL: "https://e-com-5c0b6.firebaseio.com",
  projectId: "e-com-5c0b6",
  storageBucket: "e-com-5c0b6.appspot.com",
  messagingSenderId: "762601470454",
  appId: "1:762601470454:web:403a09382b4a3337872fd7",
  measurementId: "G-9PT3M9G2DR"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
