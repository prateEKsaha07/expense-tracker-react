import React ,{ createContext , useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    transactions : [
        {id:1 , text:"beers", amount: 3000 },
        {id:2, text:"MSG", amount: -6000},
        {id:3, text:"brown sugar", amount: 2000},
        {id:4, text:"gold flakes", amount: -60},
        {id:5, text:"heroin", amount: 2500},
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    return(<GlobalContext.Provider value ={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}