export const removeCard = (card) => {
    return {
        type: "REMOVE",
        newCard: card
    }
}
export const addCard = (card) => {
    return {
        type: "ADD",
        newCard: card
    }
}
