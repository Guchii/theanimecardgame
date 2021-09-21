// Functions related to random numbers

export const getRandomNumber = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random()*step1;
    return Math.floor(step2)+min;
}

export const drawCard = (cards) => {
    let rand = getRandomNumber(0, cards.length-1);
    return cards[rand];
}
