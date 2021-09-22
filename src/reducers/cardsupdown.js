const initialState = []

const changeUserCards = (state=initialState, action)=>{
    switch(action.type){
        case "ADD":
            return [...state, action.newCard];
        case "REMOVE":
            return [...state, action.newCard];
        default:
            return state;
    }
}
export default changeUserCards