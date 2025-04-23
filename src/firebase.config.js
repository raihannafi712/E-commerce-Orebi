// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNccM_7675_5OULA5ixFtPbYxJyrNHPRs",
  authDomain: "orebi-647a6.firebaseapp.com",
  projectId: "orebi-647a6",
  storageBucket: "orebi-647a6.firebasestorage.app",
  messagingSenderId: "675309355913",
  appId: "1:675309355913:web:ab1f8a979bc3dc942f1758",
  measurementId: "G-1ZGDMVSBS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default firebaseConfig;