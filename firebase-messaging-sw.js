importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
  apiKey: "AIzaSyCAycI6omnvazYZLFp_koiX89GxBOV3xAw",
  authDomain: "firbase-cloud-messaging-faf86.firebaseapp.com",
  projectId: "firbase-cloud-messaging-faf86",
  storageBucket: "firbase-cloud-messaging-faf86.appspot.com",
  messagingSenderId: "600346661489",
  appId: "1:600346661489:web:5c89e70dc5a0d5056a01d0"
  })

const initMessaging = firebase.messaging()