// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkKcLtf0Wo3pjq6eojK-o2_6ZgoJNUpOs",
  authDomain: "my-demo-94397.firebaseapp.com",
  projectId: "my-demo-94397",
  storageBucket: "my-demo-94397.appspot.com",
  messagingSenderId: "677841889214",
  appId: "1:677841889214:web:4ecf10fa1e4ba4a9453bef",
};

// Initialize and export Firebase
export const firebase = initializeApp(firebaseConfig);
