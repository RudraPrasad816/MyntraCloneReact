import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAm58qTRHryp_gfZVqAWn71WRmC1j9gYB8",
    authDomain: "myntra-clone-f1532.firebaseapp.com",
    projectId: "myntra-clone-f1532",
    storageBucket: "myntra-clone-f1532.appspot.com",
    messagingSenderId: "310155396290",
    appId: "1:310155396290:web:8f8acb39a10d76792ba75b",
    measurementId: "G-L1396EZG6F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };