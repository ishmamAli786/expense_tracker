import React,{createContext,useReducer} from 'react';
import TransactionReducer from './transReducer';
const initialTransactions=[
    {amount:500,desc:"cash"},
    {amount:-50,desc:"Cold Drink"},
    {amount:100,desc:"Deposit"},
    {amount:-200,desc:"Utility Bills"},
]
export const TransactionContext=createContext(initialTransactions);

export const TransactionProvider = ({children})=>{
    let [state,dispatch]=useReducer(TransactionReducer,initialTransactions);


    function addTransaction(transObj){
        dispatch({
            type: "ADD_Transaction",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions: state,    
            addTransaction
        }}>
        {children}
        </TransactionContext.Provider>
    )
}