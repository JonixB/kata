const multiplicationTable = function(maxValue) {
  let displayString = '';
  for (let x = 1; x <= maxValue; x++) {
    for (let y = 1; y <= maxValue; y++) {
      displayString += y * x;
      displayString += ' ';
    }
    console.log(displayString);
    displayString = '';
  }
  return displayString;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));