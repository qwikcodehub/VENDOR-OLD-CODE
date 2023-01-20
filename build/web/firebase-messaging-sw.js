importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");




firebase.initializeApp({
  apiKey: "AIzaSyBoQO0-gyDG6mXuNLAclsk8Sq8NgqQCU6w",
    authDomain: "store-qwik-production.firebaseapp.com",
    projectId: "store-qwik-production",
    storageBucket: "store-qwik-production.appspot.com",
    messagingSenderId: "406042946214",
    appId: "1:406042946214:web:c96309090b2b9d21d8a267",
    measurementId: "G-B3ZT8ZWSM8"
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});