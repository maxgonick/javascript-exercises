const palindromes = function (inputString) {
  //Cleaning up input string
  inputString = inputString.toLowerCase();
  inputString = inputString.replaceAll("!", "");
  inputString = inputString.replaceAll(",", "");
  inputString = inputString.replaceAll(".", "");
  inputString = inputString.replaceAll(" ", "");

  //Reverse string
  const reverseString = inputString.split("").reverse().join("");
  return reverseString == inputString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
