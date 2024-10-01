// Input: n = 4, arr[] = [0,3,1,2]
// Output: -1
// Explanation: There is no repeating element in the array. Therefore output is -1.

// Input: n = 5, arr[] = [2,3,1,2,3]
// Output: 2 3
// Explanation: 2 and 3 occur more than once in the given array.

function findDuplicates(a, n) {
  if (a.length > 0) {
    let sortedArr = a.sort((a, b) => Number(a) - Number(b));
    let res = sortedArr.filter((val, index) => val == sortedArr[index - 1]);
    console.log(res.length > 0 ? [...new Set(res)].join(" ") : "-1");
  } else {
    console.log("-1");
  }
}
