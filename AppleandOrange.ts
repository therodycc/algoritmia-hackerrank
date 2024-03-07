function countApplesAndOranges(houseStartPoint: number, houseEndPoint: number, appleTreeLocation: number, orangeTreeLocation: number, apples: number[], oranges: number[]): void {

    const getAmountOfFruitsInTheHouse = (treeLocation: number, fruits: number[]) => {
        let count: number = 0;
        for (let i = 0; i < fruits.length; i++) {
            const fruitDistance = fruits[i] + treeLocation;
            if (fruitDistance >= houseStartPoint && fruitDistance <= houseEndPoint) count++;
        }
        return count
    }

    console.log(getAmountOfFruitsInTheHouse(appleTreeLocation, apples))
    console.log(getAmountOfFruitsInTheHouse(orangeTreeLocation, oranges))
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])