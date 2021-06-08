import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBhMdcSFdhMIhdvtfbjv6vLWjZ7I9fgBbE",
    authDomain: "clone-34bbf.firebaseapp.com",
    projectId: "clone-34bbf",
    storageBucket: "clone-34bbf.appspot.com",
    messagingSenderId: "88362118385",
    appId: "1:88362118385:web:21301777c31cf395b78d50",
    measurementId: "G-VPH4TNSN0Z"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};