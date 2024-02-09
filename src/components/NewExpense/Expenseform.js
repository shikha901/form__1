import React, { useState } from 'react';
import './Expenseform.css';

const Expenseform = () => { 

  const [enteredTitle, SetEnteredTitle] = useState('');
  const [enteredAmount, SetEnteredAmount] = useState('');
  const [enteredDate, SetEnteredDate] = useState('');
  
  
  const titleChangeHandler =(event)=>{SetEnteredTitle(event.target.value);};
  const amountChangeHandler =(event)=>{SetEnteredAmount(event.target.value);};
  const dateChangeHandler =(event)=>{SetEnteredDate(event.target.value);};


 return(  
   <form>
    <div className="new-expense__controls">

       <div className="new-expense__control">
         <label>Tiltle</label>
            <input type="text" onChange={titleChangeHandler}/>
         
       </div>

       <div className="new-expense__control">
          <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}  />
         
       </div>

       <div className="new-expense__control">
          <label>Date</label>
            <input type="date" onChange={dateChangeHandler }/>
         
       </div>

    </div>

       <div className="new-expense__action">
          <button type="submit">Add Expense</button>
       </div>

   </form>
 );
}
export default Expenseform;
 
