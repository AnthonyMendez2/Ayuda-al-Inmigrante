// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnbyY1OxYuAgPs026_KVQHEX1CDejiFyU",
  authDomain: "registro-ayuda-inmigrante.firebaseapp.com",
  projectId: "registro-ayuda-inmigrante",
  storageBucket: "registro-ayuda-inmigrante.appspot.com",
  messagingSenderId: "1060186602640",
  appId: "1:1060186602640:web:ed9ad021ececc5e8a22c15"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;  