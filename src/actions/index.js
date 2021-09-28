//action creators

export const removeCard = (card) => {
    return {
        type: "REMOVE_FROM_USER_CARDS",
        newCard: card,
    }
}

export const addCard = (card) => {
    return {
        type: "ADD_TO_USER_CARDS",
        newCard: card,
    }
}

export const setDrawTime = () => {
    return {
        type: "SETLASTDRAWTIME",
    }
}

