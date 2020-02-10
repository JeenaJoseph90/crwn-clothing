import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOsSXM6x-PUZpHlFwcwc92kr0D6ZBKSmM",
    authDomain: "crwn-db-e21db.firebaseapp.com",
    databaseURL: "https://crwn-db-e21db.firebaseio.com",
    projectId: "crwn-db-e21db",
    storageBucket: "crwn-db-e21db.appspot.com",
    messagingSenderId: "558055934768",
    appId: "1:558055934768:web:bd2b3e8632e804618816f5",
    measurementId: "G-424SY72D36"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;