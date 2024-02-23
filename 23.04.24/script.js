//TASK1
//Complete the solution so that it reverses the string passed into it//

function solution(str) {
  const array = str.split("");
  const reversedArray = array.reverse();
  return reversedArray.join("");
}

//TASK2

/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order).
  The original array will be not empty and will contain at least "number" even numbers.*/

function isEven(arrayNumber) {
  return arrayNumber % 2 === 0;
}
function evenNumbers(array, number) {
  const evenArray = array.filter(isEven).slice(-number);
  return evenArray;
}
