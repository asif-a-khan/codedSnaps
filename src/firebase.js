import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAQER6sDPhtQUklzgDwa7ao1nF_iE7C8Q",
  authDomain: "scdb-960ee.firebaseapp.com",
  projectId: "scdb-960ee",
  storageBucket: "scdb-960ee.appspot.com",
  messagingSenderId: "925644500591",
  appId: "1:925644500591:web:1ba3c368fc242a2088a79a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
