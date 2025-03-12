
// Problem #1 //
/**
 * 
 * Create a function called `logStudentInfo` that takes in one parameter - `array` - 
 * which represents an array of student objects like the array featured in data.js. 
 * This function should log each student's name, location and current course as shown 
 * in the example below. You must use the forEach method in your implementation.} 
 */

function logStudentInfo(array){
return array.forEach(student => `${student.name} - ${student.location} - Current course: ${student.courses.current.phase}`)
}


// Problem #2 //
/*2. Create a function called `logCourses` that takes in one parameter - `array` - which represents an array of student 
objects like the array featured in data.js. This function should use the forEach method to iterate through each student, 
and then it use use forEach again to iterate through each student's past courses. It should log each past course's name 
and date as shown in the example below.*/

const logCourses = (students) => {
  logCourses => {students.forEach().courses.forEach(console.log(`${courses.past.phase} - ${courses.past.date}`))}
};


  

// Problem #3
//**Create a function called `filterByLocationAndCourses` that takes in two parameters - `array, location` - 
//`array` represents an array of student objects like the array featured in data.js; `location` represents 
//a string of a student's location. This function should use the native filter method to return a new array 
//of only the students whose location property matches the input location and who have at least 1 past course they have completed
//


let filterByCoursesAndLocation = (array, location) => {
 return array.filter(s => {
    if(s.courses.past && s.courses.past.length > 0){
      return s.location === location
    }
    return false;
  })
}
  


// Problem #4 //
//**Create a function called `filterByBootcamp` that takes in one parameter - `array` - 
//which represents an array of student objects like the array featured in data.js. This 
//function should use the native filter method to return a new array of only the students 
//who have completed Bootcamp (if their current phase is Bootcamp, they have not completed the course yet).
 
let filterByBootcamp = (array) => {
  return array.filter(s => {
for(let i = 0; i < s.courses.past.length; i++){
  if(s.courses.past[i].phase === 'Bootcamp'){
    return true;
  }
}
})
}
// Problem #5 //
/**
 * Create a function called `mapCurrentCourses` that takes in one parameter - `array` - 
 * which represents an array of student objects like the array featured in data.js. 
 * This function should use the native map method to return a new array of strings of 
 * all every student's current course name and date as shown in the example below.
 * 
 */

let mapCurrentCourses = array => {
  return array.map(s => `${s.courses.current.phase} - ${s.courses.current.date}`)
}

// Problem #6 //
/*Create a function called `mapPastCourses` that takes in one parameter - `array` - 
which represents an array of student objects like the array featured in data.js. 
This function should use the native map method to return a new array of objects 
where each key is phase and the value at each key is the date as shown in the example below.
*/

