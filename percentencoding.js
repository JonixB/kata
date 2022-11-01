const urlEncode = function(text) {
  let newString = '';
  for (let x = 0; x < text.length; x++) {
    if (text[x] === ' ') {
      newString += '%20';
    } else {
      newString += text[x];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));