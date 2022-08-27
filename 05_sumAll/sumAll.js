const sumAll = function (firstInput, secondInput) {
  let sum = 0;
  let largerInput;
  let smallerInput;
  //input validation
  if (typeof firstInput != "number" || typeof secondInput != "number") {
    return "ERROR";
  }
  if (firstInput < 0 || secondInput < 0) {
    return "ERROR";
  }

  if (firstInput > secondInput) {
    largerInput = firstInput;
    smallerInput = secondInput;
  } else {
    largerInput = secondInput;
    smallerInput = firstInput;
  }
  for (let i = smallerInput; i <= largerInput; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
