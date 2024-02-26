//TASK 1
//Descending Order
/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321  */

function descendingOrder(n) {
  let arr = n
    .toString()
    .split("")
    .map((str) => parseInt(str));

  let sortedarray = arr.sort(function (a, b) {
    return b - a;
  });

  return parseInt(sortedarray.join(""));
}

//Task 2
// Cat Years & Dog Years

/*
I have a cat and a dog.


I got them at the same time as kitten/puppy. That was humanYears years ago.


Return their respective ages now as [humanYears,catYears,dogYears]


NOTES:


humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

let humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + (humanYears - 2) * 4;
    dogYears = 15 + 9 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
};

//Task 3
// Twice as old
/*Your function takes two arguments:


current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
