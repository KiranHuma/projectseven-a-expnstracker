
 importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

 const firebaseConfig = {
    
  apiKey: "AIzaSyBWVxCSC2xCCSsiZWbSrbMVJHTtt1zoSgA",
  authDomain: "notification-expense.firebaseapp.com",
  databaseURL: "https://notification-expense.firebaseio.com",
  projectId: "notification-expense",
  storageBucket: "notification-expense.appspot.com",
  messagingSenderId: "345372377183",
  appId: "1:345372377183:web:da85ec0c63764194d01bea"

};
  firebase.initializeApp(firebaseConfig)
  firebase.messaging();