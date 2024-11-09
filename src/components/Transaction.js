import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
    <span>
        {transaction.text}
        </span>
        <span>
            {sign}rs{Math.abs(transaction.amount)}
        </span>
        <button onClick = {() => deleteTransaction(transaction.id)} className="delete-btn">
            x
        </button>
    </li>
  )
}
