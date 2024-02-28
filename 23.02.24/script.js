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

//TASK4
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive.
    Implement a function that determines whether a string that contains only letters is an isogram.
    Assume the empty string is an isogram. Ignore letter case.*/

function isIsogram(str) {
  for (let i = 0; i < str.length; i++) {
    for (let e = i + 1; e < str.length; e++) {
      if (str[i].toLowerCase() === str[e].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

//TASK5
/*Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  let result = 0;
  let array = [];
  array = str.match(/[aeiou]/g);
  if (array !== null) {
    result = array.length;
  }
  return result;
}
