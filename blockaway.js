const blocksAway = function(directions) {
  let east = 0; //east = right/left
  let north = 0; //north = up/down
  let facedDirection = '';

  //initializing the first value of the faced direction
  if (directions[0] === 'right') {
    facedDirection = 'north';
  } else if (directions[0] === 'left') {
    facedDirection = 'east';
  }

  for (let x = 1; x <= directions.length; x += 2) {
    if (facedDirection === 'north') { //left is west, right is east
      if (directions[x-1] === 'right') {
        east += directions[x];
        facedDirection = 'east';
      } else if (directions[x-1] === 'left') {
        east -= directions[x];
        facedDirection = 'west';
      }
    } else if (facedDirection === 'east') { //left is north, right is south
      if (directions[x-1] === 'right') {
        north -= directions[x];
        facedDirection = 'south';
      } else if (directions[x-1] === 'left') {
        north += directions[x];
        facedDirection = 'north';
      }
    } else if (facedDirection === 'west') { //left is south, right is north
      if (directions[x-1] === 'right') {
        north += directions[x];
        facedDirection = 'north';
      } else if (directions[x-1] === 'left') {
        north -= directions[x];
        facedDirection = 'south';
      }
    } else if (facedDirection === 'south') { //left is west, right is east
      if (directions[x-1] === 'right') {
        east -= directions[x];
        facedDirection = 'west';
      } else if (directions[x-1] === 'left') {
        east += directions[x];
        facedDirection = 'east';
      }
    }
  }
  let coords = {
    east: east,
    north: north
  };
  return coords;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));