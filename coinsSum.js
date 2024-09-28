const findCoins = (sum, coins) => {
  let result = {},
    sumLeft = sum,
    index = 0,
    sortedArr = coins.sort((a, b) => a - b).reverse();

  while (sumLeft !== 0 && index < coins.length) {
    if (sumLeft - sortedArr[index] < 0) {
      index++;
    } else {
      let currentVal = sortedArr[index].toString();
      sumLeft = sumLeft - sortedArr[index];
      result[currentVal] = result[currentVal] ? result[currentVal] + 1 : 1;
    }
  }
  console.log("Result", result);
};
findCoins(54, [25, 3, 2]);
