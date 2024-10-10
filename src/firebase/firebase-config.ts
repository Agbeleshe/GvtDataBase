import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDZsNZLrrIyqlCUwpxH1_QOIJ9-rc_eLkQ",
    authDomain: "mis-v1.firebaseapp.com",
    projectId: "mis-v1",
    storageBucket: "mis-v1.appspot.com",
    messagingSenderId: "666669287141",
    appId: "1:666669287141:web:2854a4a6584547b3c1760c",
    measurementId: "G-DQCJV40DVJ"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const userCollectionRef = collection(db, "users")