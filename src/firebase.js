import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU024qeTLHQt_dpk25HWmJdRNmTsuT4Lg",
  authDomain: "whatsapp-clone-529ef.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-529ef.firebaseio.com",
  projectId: "whatsapp-clone-529ef",
  storageBucket: "whatsapp-clone-529ef.appspot.com",
  messagingSenderId: "186472362934",
  appId: "1:186472362934:web:20995269ae639d1fbd4717",
  measurementId: "G-F460ZWZMHX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
