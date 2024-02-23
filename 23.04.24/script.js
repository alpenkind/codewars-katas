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

//TASK3
/*You are going to be given a word. Your job is to return the middle character of the word.
   If the word's length is odd, return the middle character.
   If the word's length is even, return the middle 2 characters.*/

let position = 0;

function getMiddle(s) {
  if (s.length % 2 !== 0) {
    position = s.length / 2;
    return s.substring(position, position + 1);
  } else {
    position = s.length / 2;
    return s.substring(position - 1, position + 1);
  }
}
