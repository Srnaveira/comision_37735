// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYA89IzC3vUpklTvh2gKxOJnuJugO-oLY",
  authDomain: "react-37735.firebaseapp.com",
  projectId: "react-37735",
  storageBucket: "react-37735.appspot.com",
  messagingSenderId: "944049826225",
  appId: "1:944049826225:web:754ed3bcbffc9a7f513590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)