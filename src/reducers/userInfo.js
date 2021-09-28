const initialState = {
    name: "Shivom Srivastava",
    email: "guchiii@gheemail.com",
    lastDrawTime: 0,
}
const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETLASTDRAWTIME":
            return { ...state, lastDrawTime: Math.round(Date.now() / 1000) }
        default:
            return state
    }
}

export default userInfoReducer
