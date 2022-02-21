import React from 'react'
import {getToken,onMessage,getMessaging} from 'firebase/messaging';
// import {   } from "firebase/messaging/sw";
import app from './firebase';
const messaging = getMessaging();
// console.log(messaging,"messaging")
getToken(messaging,{vapidKey: "BK4wFet5q11bT8wVuu3xqJS59GumeZCScTxzUT09DEYq4PMBUFFlPyMM5PZCazzMV6kaQbpILZWW5RJRVsx85BA"}).then((currentToken) => {
  if (currentToken) {
    console.log("token:",currentToken)

    onMessage(messaging, (payload) => {
        
      })
  } else {
   
    console.log('No registration token available. Request permission to generate one.');
    
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);

});

export default function App() {
  return (
    <div>FireBase Account SetUp</div>
  )
}