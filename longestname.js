const instructorWithLongestName = function(instructors) {
  let initialVal = 0;
  let highest = '';
  let course = '';
  let highestinfo = {};
  instructors.forEach(function(elements){
    if (elements['name'].length > initialVal){
      initialVal = elements['name'].length;
      highest = elements['name'];
      course = elements['course'];
    }
  });
  highestinfo.name = highest;
  highestinfo.course = course;
  return highestinfo;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));