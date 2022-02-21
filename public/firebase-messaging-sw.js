importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


// eslint-disable-next-line no-undef
firebase.initializeApp({
  messagingSenderId: "600346661489",
  })

const initMessaging = firebase.messaging()
