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
