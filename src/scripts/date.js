export const currentTime = () => {
    const date = new Date();
    return {
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
    }
}
