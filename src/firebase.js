import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCx1QYhT8Xc-i2PobLymdIK0D3xf3dpa50",
    authDomain: "messengerclone-1df2e.firebaseapp.com",
    databaseURL: "https://messengerclone-1df2e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "messengerclone-1df2e",
    storageBucket: "messengerclone-1df2e.appspot.com",
    messagingSenderId: "1060072012694",
    appId: "1:1060072012694:web:bba18b629f7ad3173d7bb7",
    measurementId: "G-T0Y5F7EQP2"
})

const db = firebaseApp.firestore();

export default db;
