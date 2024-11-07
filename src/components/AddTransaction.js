import React, { useState } from 'react'

export const AddTransaction = () => {

    const[text, setText] = useState("");
    const[amount, setAmount] = useState(0)

  return (
    <>
    <h3>
        add new transaction
    </h3>
    <form>
    <div className="form-control">
        <label htmlFor="text">text</label>
        <input type="text" value={text} onChange = {(e) => setText(e.target.value)} placeholder ="enter text........." />
    </div>
    <div className="form-control">
        <label htmlFor="amount">
            amount<br />
            (negative - expense, positive - income)
        </label>
        <input type="number" value={amount} onChange = {(e) => setAmount(e.target.value)} placeholder="enter amount........." />
    </div>
    <button className="btn">add transaction</button>
    </form>
    </>
  )
}
