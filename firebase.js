// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqUpgjtNhpPZqQoCvqM5VIOhyON11vRPA",
  authDomain: "ecommerce-d1bd9.firebaseapp.com",
  projectId: "ecommerce-d1bd9",
  storageBucket: "ecommerce-d1bd9.appspot.com",
  messagingSenderId: "77793249931",
  appId: "1:77793249931:web:3ee4fa52c16599c6df628e",
  measurementId: "G-3YQRB443MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const analytics = getAnalytics(app);
const auth = firebase.auth();
const firebaseApp = firebase.initializeApp(firebaseConfig);

export {db,auth};