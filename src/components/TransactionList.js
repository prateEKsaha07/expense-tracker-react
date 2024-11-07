import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
        <h3>history</h3>
        {transactions.map(transaction => (<li className="minus"> <span>{transaction.text}</span><button className="delete-btn">{transaction.amount}</button></li>))}
        <ul className="list">
          {/* {context.Transactions.map(transaction => (
            <li className="minus"> <span>{context.transaction.text}</span></li>
          ))} */}
          {/* <li className="minus"> <span>400</span><button className="delete-btn">x</button></li> */}
        </ul>
    </>
  )
}
