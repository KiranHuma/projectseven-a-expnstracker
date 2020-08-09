import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import swal from 'sweetalert';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
 
  const blnc = () => {
    
  
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
      swal('Your Expenses are more than income.You should keep check on your spendings');
        else
        for ( i = 0; i < transactions.length; i++) {
          if (transactions[i].amount > 0)
          swal('Blanced Account');
    }}
  }
  return (
    <>
      <h4 type="submit" onClick={blnc}>Your Balance</h4>
    
    <h1 type="submit" onClick={blnc}>${total}</h1>
    </>
  )
}