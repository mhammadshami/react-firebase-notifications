// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBbR_CaynFnoLS_CT7DLN1td8gmRMvLMtQ",
  authDomain: "pushnotifications-bfdff.firebaseapp.com",
  projectId: "pushnotifications-bfdff",
  storageBucket: "pushnotifications-bfdff.appspot.com",
  messagingSenderId: "488808628046",
  appId: "1:488808628046:web:08193b4413b3ea4e9c681f",
  measurementId: "G-8K80JBGCQ6"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});