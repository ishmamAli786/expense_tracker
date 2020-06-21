const TransactionReducer=((state,action)=>{
    switch(action.type){
        case "ADD Transaction":{
            return [action.playload, ...state]
        }
        default:
            return state;
    }
})
export default TransactionReducer;