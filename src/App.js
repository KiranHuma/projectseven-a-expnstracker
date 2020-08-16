import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
// import { initNotification } from './services/firebaseService'
// import BGImage from './boder.jpg';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import firebase from 'firebase';


function App() {
  const firebaseMessaging = () => {
    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
          console.log("Token:", currentToken);
        } else {
          console.log('No Instance ID token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    })
    messaging.onTokenRefresh(() => {
      messaging.getToken().then((refreshedToken) => {
        console.log('Token refreshed.');
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        console.log("Refreshed Token", refreshedToken);
        // ...
      }).catch((err) => {
        console.log('Unable to retrieve refreshed token ', err);
      });
    });
  }

  firebaseMessaging();
  return (
  
    <div className="container"  >
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
   
  );
}

export default App;