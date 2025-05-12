function plusMinus(arr: number[]): void {
  // Write your code here
  const arrSize: number = arr.length;
  let positiveCounter: number = 0;
  let negativeCounter: number = 0;
  let zeroCounter: number = 0;

  for (let i = 0; i < arrSize; i++) {
    const value: number = arr[i];
    if (value > 0) positiveCounter++;
    if (value < 0) negativeCounter++;
    if (value === 0) zeroCounter++;
  }

  const getResult = (value: number) => {
    return (value / arrSize).toFixed(5);
  };

  console.log(getResult(positiveCounter));
  console.log(getResult(negativeCounter));
  console.log(getResult(zeroCounter));
}

plusMinus([-4, 3, -9, 0, 4, 1]);