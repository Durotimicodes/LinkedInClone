import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB88tlw-axVEvnOsJPS30Jz1rlSsLMep6A",
    authDomain: "linkedin-clone-292f9.firebaseapp.com",
    projectId: "linkedin-clone-292f9",
    storageBucket: "linkedin-clone-292f9.appspot.com",
    messagingSenderId: "874460055286",
    appId: "1:874460055286:web:13dcc8b349ffe04f5f0ed7"
};

//use this to initialize the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };