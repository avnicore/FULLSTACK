//const is used for declaring variables that are constant and cannot be reassigned.
//let is used for declaring variables that can be reassigned.
const students = [
  { name: "Jane", attendance: 88, score: 72 },
  { name: "Aman", attendance: 79, score: 68 },
  { name: "Priya", attendance: 92, score: 90 },
  { name: "Rahul", attendance: 85, score: 60 },
  { name: "Sara", attendance: 95, score: 55 },
];
let eligiblecount = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].attendance >= 85 && students[i].score >= 65) {
   console.log(students[i].name+ " is eligible");
   eligiblecount++;
  }
  else{
    console.log(students[i].name+ " is not eligible");
  }

  if(students[i].score%2==0){
    console.log(students[i].name+ " has even score");
  }
  else{
    console.log(students[i].name+ " has odd score");
  }

  console.log(students[i].name + " type of attendance:  " + typeof students[i].attendance);
}

console.log(85=="85");
console.log(85==="85");

console.log("Number of eligible students: " + eligiblecount);