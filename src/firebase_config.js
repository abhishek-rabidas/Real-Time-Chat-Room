import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCg1bV05T0nRx7FsWX2KDr1bIxmRV_O1yA",
    authDomain: "messenger-app-186e4.firebaseapp.com",
    projectId: "messenger-app-186e4",
    storageBucket: "messenger-app-186e4.appspot.com",
    messagingSenderId: "633145610069",
    appId: "1:633145610069:web:1c8fd1f47cca3eff4129dc",
    measurementId: "G-E0BCZBRNRP"
});

const db = firebaseApp.firestore();

export default db;