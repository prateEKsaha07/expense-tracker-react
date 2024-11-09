import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext);

    const[text, setText] = useState("");
    const[amount, setAmount] = useState(0)

    const onSubmit = e=> {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount : +amount  // had to convert it into number because before it was passing it as bunch of strings in thr array 
        }

        addTransaction(newTransaction)
    }

  return (
    <>
    <h3>Add A New Transaction </h3>
    <form onSubmit ={onSubmit}>
    <div className="form-control">
        <label htmlFor="text" className='disc'>transaction type</label>
        <input type="text" value={text} onChange = {(e) => setText(e.target.value)} placeholder ="transaction details" />
    </div>
    <div className="form-control">
        <label htmlFor="amount" className='disc'> transaction amount<br /></label>
        <input type="number" value={amount} onChange = {(e) => setAmount(e.target.value)} placeholder="enter amount........." />
    </div>
    <button className="btn">Add Transaction</button>
    </form>
    </>
  )
}
