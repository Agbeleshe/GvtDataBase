//You first must have install firebase to have the following.

import { initializeApp } from "firebase/app"; //
import { getFirestore } from "firebase/firestore"; // this allows us to do CRUD operations with firestore
import { getAuth } from "firebase/auth"; // This allow us authenticate users


const firebaseConfig = {
    apiKey: "AIzaSyDZsNZLrrIyqlCUwpxH1_QOIJ9-rc_eLkQ",
    authDomain: "mis-v1.firebaseapp.com",
    projectId: "mis-v1",
    storageBucket: "mis-v1.appspot.com",
    messagingSenderId: "666669287141",
    appId: "1:666669287141:web:2854a4a6584547b3c1760c",
    measurementId: "G-DQCJV40DVJ"
  };

initializeApp(firebaseConfig);

export const db = getFirestore()
export const auth = getAuth()