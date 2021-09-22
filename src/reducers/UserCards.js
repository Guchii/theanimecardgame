//reducer of user data

const userCardsReducer = (state=[], action)=>{
    switch(action.type){
        case "ADD_TO_USER_CARDS":
            return [...state, action.newCard];
        case "REMOVE_FROM_USER_CARDS":
            return [...state, action.newCard];
        default:
            return state;
    }
}
export default userCardsReducer