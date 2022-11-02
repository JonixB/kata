const repeatNumbers = function(data) {
  //loop for the length of the array
  let repeatingString = '';

  //if there is only one array
  if (data.length === 1) {
    for (let x = 0; x < data[0][1]; x++){
      repeatingString += data[0][0];
    }
    return repeatingString;
  } else { //if there is more than one array

    //loop for how many arrays are within the array
    for (let x = 0; x < data.length; x++) {

      //loop to repeat number on the first element based on the second element on the array
      for (let y = 0; y < data[x][1]; y++) {

        //check if it's the last element to remove the comma at the end
        if (x === (data.length - 1)) {
          repeatingString += data[x][0];
        } else {

          //check if it's the end of the loop to add a comma
          if (y === (data[x][1] -1)) {
            repeatingString += data[x][0];
            repeatingString += ', ';
          } else {
            repeatingString += data[x][0];
          } 
        }
      }
    }
    return repeatingString;
  }
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));