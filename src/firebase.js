import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG8lVFkOZhtOLrkcHES6nYMj0fWk0QJUA",
  authDomain: "clone-385c3.firebaseapp.com",
  projectId: "clone-385c3",
  storageBucket: "clone-385c3.appspot.com",
  messagingSenderId: "522293263268",
  appId: "1:522293263268:web:914b0c629ec5af6acd1f31",
  measurementId: "G-V7Y1WYLSLN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };