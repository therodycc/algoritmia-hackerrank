function miniMaxSum(arr: number[]): void {
    const resultArray: number[] = []

    for (let i = 0; i < arr.length; i++) {
        const _arr = arr.filter((_, index) => i !== index)

        const sum = _arr.reduce((acc, num) => acc += num, 0)
        resultArray.push(sum)
    }

    resultArray.sort((a, b) => a - b)

    const smallestNumber  = resultArray[0]
    const biggestNumber = resultArray[resultArray.length - 1]

    console.log(`${smallestNumber} ${biggestNumber}`)
}

miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([7, 69, 2, 221, 8974])