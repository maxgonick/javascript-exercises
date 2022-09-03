const findTheOldest = function (objArray) {
  const aliveArray = objArray.map((element) => {
    let yearsAlive;
    if (element.yearOfDeath == undefined) {
      let currentYear = new Date().getFullYear();
      return currentYear - element.yearOfBirth;
    } else {
      return element.yearOfDeath - element.yearOfBirth;
    }
  });
  let longestAlive = aliveArray.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
  });

  let index = aliveArray.findIndex((element) => element == longestAlive);

  return objArray[index];
};

// Do not edit below this line
module.exports = findTheOldest;
