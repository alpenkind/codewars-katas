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

//Task4
//Band name generator
/*My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:


"dolphin" -> "The Dolphin"


However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:


"alaska" -> "Alaskalaska"


Complete the function that takes a noun as a string, and returns her preferred band name written as a string.*/

function bandNameGenerator(str) {
  if (str.substring(0, 1) === str.substring(str.length - 1)) {
    return str.charAt(0).toUpperCase() + str.slice(1).repeat(2);
  } else {
    return "The " + str.charAt(0).toUpperCase() + str.slice(1);
  }
}

//Task5
//Name shuffler
/*Write a function that returns a string in which firstname is swapped with last name.


Example(Input --> Output)


"john McClane" --> "McClane john"*/

function nameShuffler(str) {
  let arr = 0;
  arr = str.split(" ");
  return arr[1] + " " + arr[0];
}

//Task 6
// BMI
/*Write function bmi that calculates body mass index (bmi = weight / height2).


if bmi <= 18.5 return "Underweight"


if bmi <= 25.0 return "Normal"


if bmi <= 30.0 return "Overweight"


if bmi > 30 return "Obese"*/

function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

//Task7
// Traffic Lights
/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.


Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.


For example, when the input is green, output should be yellow.*/

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}

//Task8
// Highest and Lowest
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

function highAndLow(numbers) {
  let testen = numbers.split(" ");
  testen = testen.map((str) => parseInt(str));
  return [Math.max(...testen), Math.min(...testen)].join(" ");
}
