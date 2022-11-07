const calculateChange = function(total, cash) {
  let change = cash - total;
  let changeOb = {};
  let twenty = 0, ten = 0, five = 0, two = 0, one = 0, quarter = 0, dime = 0, nickel = 0, penny = 0;
  //loop until change is zero
  do {
    //for twenty dollars
    if (change >= 2000) {
      twenty = Math.floor(change / 2000);
      change = change - (twenty * 2000);
      if (twenty > 0) {
        changeOb['twentyDollar'] = twenty;
      }
    } else if (change >= 1000) { //<-- for 10 dollars
      ten = Math.floor(change / 1000);
      change = change - (ten * 1000);
      if (ten > 0) {
        changeOb['tenDollar'] = ten;
      }
    } else if (change >= 500) { //<-- for 5dollars
      five = Math.floor(change / 500);
      change = change - (five * 5000); 
      if (five > 0) {
        changeOb['fiveDollar'] = five;
      }
    } else if (change >= 200) { //<-- for 2 dollars
      two = Math.floor(change / 200);
      change = change - (two * 200); 
      if (two > 0) {
        changeOb['twoDollar'] = two;
      }
    } else if (change >= 100) { //<-- for 1 dollar
      one = Math.floor(change / 100);
      change = change - (one * 100); 
      if (one > 0) {
        changeOb['oneDollar'] = one;
      }
    } else if (change >= 25) { //<-- for 25 cents
      quarter = Math.floor(change / 25);
      change = change - (quarter * 25); 
      if (quarter > 0) {
        changeOb['quarter'] = quarter;
      }
    } else if (change >= 10) { //<-- for 10 cents
      dime = Math.floor(change / 10);
      change = change - (dime * 10); 
      if (dime > 0) {
        changeOb['dime'] = dime;
      }
    } else if (change >= 5) { //<-- for 5 cents
      nickel = Math.floor(change / 5);
      change = change - (nickel * 5); 
      if (nickel > 0) {
        changeOb['nickel'] = nickel;
      }
    } else if (change >= 1) { //<-- for 1 cent
      penny = Math.floor(change / 1);
      change = change - (penny * 1); 
      if (penny > 0) {
        changeOb['penny'] = penny;
      }
    } 
  }
  while (change > 0);
  return changeOb;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));