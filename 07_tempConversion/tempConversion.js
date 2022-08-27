const ftoc = function (inputF) {
  inputF = (inputF - 32) * (5 / 9);
  return parseFloat(inputF.toFixed(1));
};

const ctof = function (inputC) {
  inputC = 1.8 * inputC + 32;
  return parseFloat(inputC.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
