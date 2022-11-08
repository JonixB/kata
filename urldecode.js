const urlDecode = function(text) {
  let decoded = {};
  let keyValueDecoder = '';
  let key = '';
  let value = '';
  for (let x = 0; x < text.length; x++) {
    if (text[x] === '=') { //<-- saves the key
      x += 1;
      key = keyValueDecoder;
      keyValueDecoder = '';
      keyValueDecoder += text[x];
    } else if (text[x] === '%' ) {
      keyValueDecoder += ' ';
      x += 2;
    } else if ((text[x] === '&') || (x === (text.length - 1))) { //<-- this means it's the start of a new key pair or the end of the string, push values into the object
      if (x === (text.length - 1)) {
        value = keyValueDecoder + text[x];
        decoded[key] = value;
      } else {
        value = keyValueDecoder;
        decoded[key] = value;
        keyValueDecoder = '';
      }
    } else {
      keyValueDecoder += text[x];
    }
  }
  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);