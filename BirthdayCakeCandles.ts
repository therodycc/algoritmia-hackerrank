function birthdayCakeCandles(candles: number[]): number {
    const tallestNumber = candles.sort((a, b) => b - a)[0];
    let count: number = 0;

    for (let index = 0; index < candles.length; index++) {
        const element = candles[index];
        if (element === tallestNumber) {
            count += 1
        }
    }

    return count
}

console.log(birthdayCakeCandles([4, 4, 3, 1]));