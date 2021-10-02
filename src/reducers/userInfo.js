const initialState = {
    name: "Shivom Srivastava",
    email: "guchiii@gheemail.com",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YSuXe-DWFb6NhBRqI5KtCgHaHa%26pid%3DApi&f=1",
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
