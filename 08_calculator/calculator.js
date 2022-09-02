const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (inputArray) {
  return inputArray.reduce((total, next) => {
    return total + next;
  }, 0);
};

const multiply = function (inputArray) {
  return inputArray.reduce((total, next) => {
    return total * next;
  });
};

const power = function (base, power) {
  return Math.pow(base, power);
};

const factorial = function (input) {
  if (input == 1) {
    return 1;
  }

  if (input == 0) {
    return 1;
  }

  return input * factorial(input - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
