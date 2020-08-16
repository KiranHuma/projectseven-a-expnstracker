
import firebase from 'firebase';



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
  const messaging=firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission)=> {
         console.log(permission)
        if (permission==="granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token")
                  console.log( currentToken);
                } else {
                
                  console.log('No Instance ID token available. Request permission to generate one.');
                 
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
               
              });
              
        }
        })

}