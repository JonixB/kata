const sumLargestNumbers = function(data) {
  let temp = 0;
  let sum = 0;
  for (let x = 0; x < data.length; x++) {
    for (let y = x; y < (data.length - 1); y++) {
      if (data[x] > data[y + 1]) {
        temp = data[x];
        data[x] = data[y +1];
        data[y + 1] = temp;
      }
    }
  }
  sum = data[data.length - 1] + data[data.length - 2];
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));