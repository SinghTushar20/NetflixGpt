// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeAc5i5pD3RwQImhIQbtdnWEl5hR_MN08",
  authDomain: "netflixgpt-81ce0.firebaseapp.com",
  projectId: "netflixgpt-81ce0",
  storageBucket: "netflixgpt-81ce0.firebasestorage.app",
  messagingSenderId: "887550326240",
  appId: "1:887550326240:web:805fe1d1b51a2160932785",
  measurementId: "G-VK1B94BZXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
