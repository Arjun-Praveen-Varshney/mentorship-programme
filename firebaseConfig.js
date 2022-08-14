// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW-Oyd2y8LWdY8OYnyvL2E_CVUxki4JLU",
  authDomain: "mentorship-programme.firebaseapp.com",
  projectId: "mentorship-programme",
  storageBucket: "mentorship-programme.appspot.com",
  messagingSenderId: "1024279514365",
  appId: "1:1024279514365:web:24d8106dee69d45894c294",
  measurementId: "G-J0NB345GQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export { auth, database };
export const db = getFirestore(app);
