//TASK 1

//We need a function that can transform a string into a number.

const stringToNumber = function (str) {
  return parseFloat(str);
  return null;
};

console.log(stringToNumber("4"));

//TASK 2
/* Return negative Number

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else if (num <= 0) {
    return num;
  }
}

console.log(makeNegative(7));

//TASK 3

/*You get an array of numbers, return the sum of all of the positives ones.
  
  Example [1,-4,7,12] => 1 + 7 + 12 = 20
  
  Note: if there is nothing to sum, the sum is default to 0.*/

function sumUp(totalvalue, other) {
  console.log("totalvalue " + totalvalue);
  console.log("other " + other);

  return totalvalue + other;
}

function positiveSum(arr) {
  let summe = arr.filter(function (arr) {
    return arr > 0;
  });

  return summe.reduce(sumUp, 0);
}

//TASK4

/*Consider an array/list of sheep where some sheep may be missing from their place.
 We need a function that counts the number of sheep present in the array (true means present).*/

function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

///TASK5

///TASK 5
/*Write a function that removes the spaces from the string, then return the resultant string.*/

function noSpace(x) {
  return x.replace(/\s/g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
