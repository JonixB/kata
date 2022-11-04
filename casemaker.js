const camelCase = function(input) {
  let newString = '';
  for (let x = 0; x < input.length; x++) {
    if (input[x] === ' ') {
      x += 1;
      newString += input[x].toUpperCase();
    } else {
      newString += input[x];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));