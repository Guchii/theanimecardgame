// Functions related to random numbers
// Tier List:
// S A B C F
// Tier S: 3%
// Tier A: 15%
// Tier B: 35%
// Tier C+F: 47%
export const getRandomNumber = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random()*step1;
    return Math.floor(step2)+min;
}

export const drawCard = (cards) => {
    let rand = getRandomNumber(0, cards.length-1);
    return cards[rand];
}