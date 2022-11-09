let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

function generateBoard(whiteQueen, blackQueen) {
  let rowcol = new Array(8);
  //generate the board first, x is column, y is row
  for (let x = 0; x < 8; x++) {
    //create row array
    rowcol[x] = new Array(8);
    for (let y = 0; y < 8; y++) {
      if ((x === whiteQueen[0]) && (y === whiteQueen[1])) {
        rowcol[x][y] = 1;
      } else if ((x === blackQueen[0]) && (y === blackQueen[1])) {
        rowcol[x][y] = 1;
      } else {
        rowcol[x][y] = 0;
      }  
    }
  }
  return rowcol;
}

function queenThreat(board) {
  let wQueen = [];
  let bQueen = [];
  //go through the board to check where the queens are
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 1) {
        //check if wQueen is emtpy
        if (wQueen.length === 0) {
          wQueen.push(x,y);
        } else {
          bQueen.push(x,y);
        }
      }
    }
  }

  //horizontal/vertical check
  if ((wQueen[0] === bQueen[0]) ||(wQueen[1] === bQueen[1])) {
    return true;
  }

  //diagonal check upwards
  let xCtr = 1;
  for (let x = wQueen[0]; x >= 1; x--) {
    if ((board[x-1][wQueen[1]-xCtr]) || (board[x-1][wQueen[1]+xCtr])) {
      return true;
    }
    xCtr += 1;
  }

  //diagonal check downwards
  //reset xCtr
  xCtr = 1;
  for (let x = wQueen[0]; x < 7; x++) {
    if ((board[x+1][wQueen[1]-xCtr]) || (board[x+1][wQueen[1]+xCtr])) {
      return true;
    }
    xCtr += 1;
  }
  return false;
}