// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCd_VEXyfQp-d2bDxGi0GS7EGsgZSEJ6XE",
	authDomain: "car-shop-47788.firebaseapp.com",
	projectId: "car-shop-47788",
	storageBucket: "car-shop-47788.firebasestorage.app",
	messagingSenderId: "901717507673",
	appId: "1:901717507673:web:67504a94ce1981f5b0fb48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
