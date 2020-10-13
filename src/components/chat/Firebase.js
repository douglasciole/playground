import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAtCXs7qNFMzoisM-_hBPuur4RJTo243IA",
    authDomain: "playgroundchat-73bf6.firebaseapp.com",
    databaseURL: "https://playgroundchat-73bf6.firebaseio.com",
    projectId: "playgroundchat-73bf6",
    storageBucket: "playgroundchat-73bf6.appspot.com",
    messagingSenderId: "295399304371",
    appId: "1:295399304371:web:207e8013c949b8a23b54c6",
    measurementId: "G-93YR58EMJK"
};

export default function FirebaseApp() {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const firestore = firebase.firestore();
}
