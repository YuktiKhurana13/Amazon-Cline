import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyClQTaIMyfgd1XPYgB9W_bhz4WuMTaF4a4",
    authDomain: "clone-9fe3a.firebaseapp.com",
    databaseURL: "https://clone-9fe3a.firebaseio.com",
    projectId: "clone-9fe3a",
    storageBucket: "clone-9fe3a.appspot.com",
    messagingSenderId: "906430249471",
    appId: "1:906430249471:web:55742982b443448e980fca",
    measurementId: "G-ERY08DLNPN"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};