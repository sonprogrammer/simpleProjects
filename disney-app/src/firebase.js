// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAWD2BQzMWlkb3qa-51PNfn7MkQBD2aco",
  authDomain: "disney-b43d1.firebaseapp.com",
  projectId: "disney-b43d1",
  storageBucket: "disney-b43d1.appspot.com",
  messagingSenderId: "294817603811",
  appId: "1:294817603811:web:8654203cfb6086b2a165d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;