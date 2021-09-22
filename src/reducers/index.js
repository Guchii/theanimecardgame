import userCardsReducer from "./UserCards";
import { combineReducers } from 'redux';
import allCardsReducer from "./AllCards";

const rootReducer = combineReducers({
    userCardsReducer,
    allCardsReducer
})

export default rootReducer;