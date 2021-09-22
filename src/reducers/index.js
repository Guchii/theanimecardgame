import changeUserCards from "./cardsupdown";
import {combineReducers} from 'redux';
import changeAllCards from "./AllCards";

const rootReducer = combineReducers({
    changeUserCards,
    changeAllCards
})

export default rootReducer;