// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

let marks = 50
function getGrade(marks) {
  let grade;
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  return grade;
}

// Output the grade
console.log(`student grade is ${getGrade(marks)}.`);