// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getMessaging, getToken} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbR_CaynFnoLS_CT7DLN1td8gmRMvLMtQ",
  authDomain: "pushnotifications-bfdff.firebaseapp.com",
  projectId: "pushnotifications-bfdff",
  storageBucket: "pushnotifications-bfdff.appspot.com",
  messagingSenderId: "488808628046",
  appId: "1:488808628046:web:08193b4413b3ea4e9c681f",
  measurementId: "G-8K80JBGCQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission()
  console.log('permission: ' , permission);

  if (permission === 'granted') {
    const token = await getToken(messaging, {
        vapidKey: "BMOBTb-aTvEUZRv95D1yrkEEa9BnnDmrubu66SD5mRWiqx7o6pdAdQLI-hD1oB-fIyY4m7GRBcwMH-EUn7XubEw"
      });
    console.log('token', token)
  }
}