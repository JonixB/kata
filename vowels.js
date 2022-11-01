const numberOfVowels = function(data) {
  let vowelNum = 0;
  let strng = data.toLowerCase();
  for (let x = 0; x < strng.length; x++){
    if ((strng[x] === 'a') || (strng[x] === 'e') || (strng[x] === 'i') || (strng[x] === 'o') || (strng[x] === 'u')){
      vowelNum += 1;
    }
  }
  return vowelNum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));