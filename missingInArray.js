/*
Input: n = 5, arr[] = [1,2,3,5]
Output: 4
Explanation : All the numbers from 1 to 5 are present except 4.

The array is a permutation of size n with one element missing. Return the missing element.
*/

const missingNum = (N, arr) => {
  let expectedSum = (N * (N + 1)) / 2;
  let arraySum = arr.reduce((res, num) => res + num, 0);

  return expectedSum - arraySum;
};
