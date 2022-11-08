const squareCode = function(message) {
  let coded = '';
  let stripped = spaceStrip(message);
  let sqrroot = Math.ceil(Math.sqrt(stripped.length));

  for (let x = 0; x < sqrroot; x++) {
    for (let y = x; y < stripped.length; y += sqrroot) {
      coded += stripped[y]; 
    }
    coded += ' ';
  }
  return coded;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

function spaceStrip(message) {
  let stripped = '';
  for (let x = 0; x < message.length; x++) {
    if (message[x] !== ' ') {
      stripped += message[x];
    } else {
      x += 1;
      stripped += message[x];
    }
  }
  return stripped;
}