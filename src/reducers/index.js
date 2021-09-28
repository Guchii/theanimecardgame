import { combineReducers } from "redux"
import userCardsReducer from "./UserCards"
import allCardsReducer from "./AllCards"
import userInfoReducer from "./userInfo"

const rootReducer = combineReducers({
    userCardsReducer,
    allCardsReducer,
    userInfoReducer,
})

export default rootReducer
