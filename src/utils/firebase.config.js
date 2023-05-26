// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT0UPbaA6kwF6Ozj6n1ZtJHljbJDUFCT4",
  authDomain: "chill-out-client.firebaseapp.com",
  projectId: "chill-out-client",
  storageBucket: "chill-out-client.appspot.com",
  messagingSenderId: "248602769551",
  appId: "1:248602769551:web:d02d77cf72d03bb72d98fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;