import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCY7KesAsA_keMgIX9XxQKwFd2MsZKjNig",
  authDomain: "partyfixers-53c7d.firebaseapp.com",
  projectId: "partyfixers-53c7d",
  storageBucket: "partyfixers-53c7d.appspot.com",
  messagingSenderId: "10405373829",
  appId: "1:10405373829:web:bf7e8d17004a6c859906ec",
  measurementId: "G-WW2ZG1RD75",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);




// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import firebaseConfig from "./firebaseConfig";
// import {getFirestore}  from "firebase/firestore"

// firebase.initializeApp(firebaseConfig);

// let auth = firebase.auth();
// // let db = firebase.

// export {auth}
