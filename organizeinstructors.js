const organizeInstructors = function(instructors) {
  let orgInstructors = {};
  let course = ''
  for (let x = 0; x < instructors.length; x++) {
    if (instructors[x].course in orgInstructors) {
      orgInstructors[instructors[x].course].push(instructors[x].name);
    } else {
      orgInstructors[instructors[x].course] = [];
      orgInstructors[instructors[x].course].push(instructors[x].name);
    }
  }
  return orgInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));