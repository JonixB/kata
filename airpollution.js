const checkAir = function (samples, threshold) {
  let dirtCounter = 0;
  for (let air of samples) {
    if (air === 'dirty') {
      dirtCounter += 1;
    }
  }
  if ((dirtCounter / samples.length) > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))