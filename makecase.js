const caseStyle = {
  camel: function(string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      if (string[x] === ' ') {
        x += 1;
        newString += string[x].toUpperCase();
      } else {
        newString += string[x];
      }
    }
    return newString;
  },
  
  pascal: function(string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      if ((x === 0)) {
        newString += string[x].toUpperCase();
      } else if (string[x] === ' ') {
        x += 1;
        newString += string[x].toUpperCase();
      } else {
        newString += string[x];
      }
    }
    return newString;
  },
  
  snake: function(string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      if ((string[x] === '!') || (string[x] === '?') || (string[x] === '.') || (string[x] === '\'') || (string[x] === '\"')) {
        x += 1;
        //check if the next char is a space or not
        if (string[x] === ' ') {
          newString += '_'
        } else {
          newString += string[x];
        }
      } else if (string[x] === ' ') {
        newString += '_'
      } else {
        newString += string[x];
      }
    }
    return newString;
  },
  
  kebab: function(string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      if ((string[x] === '!') || (string[x] === '?') || (string[x] === '.') || (string[x] === '\'') || (string[x] === '\"')) {
        x += 1;
        //check if the next char is a space or not
        if (string[x] === ' ') {
          newString += '-'
        } else {
          newString += string[x];
        }
      } else if (string[x] === ' ') {
        newString += '-'
      } else {
        newString += string[x];
      }
    }
    return newString;
  },
  
  title: function(string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      if (x === 0) {
        newString += string[x].toUpperCase();
      } else {
        if (string[x] === ' ') {
          newString += ' ';
          x += 1;
          newString += string[x].toUpperCase();
        } else {
          newString += string[x];
        }
      }
    }
    return newString;
  },
  
  vowel: function(string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      if ((string[x] === 'a') || (string[x] === 'e') || (string[x] === 'i') || (string[x] === 'o') || (string[x] === 'u')) {
        newString += string[x].toUpperCase();
      } else {
        newString += string[x];
      }
    }
    return newString;
  },
  
  consonant: function(string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      if ((string[x] === 'a') || (string[x] === 'e') || (string[x] === 'i') || (string[x] === 'o') || (string[x] === 'u')) {
        newString += string[x];
      } else {
        newString += string[x].toUpperCase();
      }
    }
    return newString;
  },
  
  upper: function (string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      newString += string[x].toUpperCase();
    }
    return newString;
  },
  
  lower: function (string) {
    let newString = '';
    for (let x = 0; x < string.length; x++) {
      newString += string[x].toLowerCase();
    }
    return newString;
  }
};

const makeCase = function(input, cse) {
  let newString = '';
  let precedenceOne = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  let precedenceTwo = ['vowel', 'consonant'];
  let precedenceThree = ['upper', 'lower'];

  //check if there is only one case argument
  if (!Array.isArray(cse)) {
    newString = caseStyle[cse](input);
  } else {
    for (let precedence of precedenceOne) {
      for (let x = 0; x < cse.length; x++) {
        if (precedence === cse[x]) {
          newString = caseStyle[cse[x]](input);
        }
      }
    }
    for (let precedence of precedenceTwo) {
      for (let x = 0; x < cse.length; x++) {
        if (precedence === cse[x]) {
          newString = caseStyle[cse[x]](input);
        }
      }
    }
    for (let precedence of precedenceThree) {
      for (let x = 0; x < cse.length; x++) {
        if (precedence === cse[x]){
          newString = caseStyle[cse[x]](input);
        }
      }
    }
  }
  return newString;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

