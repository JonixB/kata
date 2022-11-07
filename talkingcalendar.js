const talkingCalendar = function(date) {
  let month = date[5] + date[6];
  let monString = months(month);
  let day = date[8] + date[9];
  let dayString = days(day);
  let yearString = '';
  for (let x = 0; x < 4; x++) {
    yearString += date[x];
  }
  return monString + ' ' + dayString + ', ' + yearString;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

function months(date) {
  switch(date) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
  }
}

function days(date) {
  switch(date) {
    case '01':
      return '1st';
    case '02':
      return '2nd';
    case '03':
      return '3rd';
    case '11':
      return date + 'th'
    case '12':
      return date + 'th'
    case '13':
      return date + 'th'
    default:
      return date + 'th'
  }
}