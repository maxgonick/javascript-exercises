const fibonacci = function (index) {
  if (index < 0) {
    return "OOPS";
  }

  let firstIndex = 0;
  let nextIndex = 1;

  for (let i = 0; i < index; i++) {
    let tempNext = nextIndex;
    nextIndex = firstIndex + nextIndex;
    firstIndex = tempNext;
  }
  return firstIndex;
};

// Do not edit below this line
module.exports = fibonacci;
