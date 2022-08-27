const removeFromArray = function (inputArray, ...args) {
  //Find the elements
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] === args[i]) {
        inputArray.splice(j, 1);
        j = 0;
        continue;
      }
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
