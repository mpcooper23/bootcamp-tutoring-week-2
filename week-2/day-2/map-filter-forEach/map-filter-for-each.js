
// Problem #1 //
const logStudentInfo = (students) => {
    logStudentInfo => {students.forEach(console.log(`${students.name} - ${students.location} - ${students.courses.current}`))}
};

// Problem #2 //
const logCourses = (students) => {
    logCourses => {students.forEach().courses.forEach(console.log(`${courses.past.phase} - ${courses.past.date}`))}
};

// Problem #3 
//**Create a function called `filterByLocationAndCourses` that takes in two parameters - `array, location` - 
//`array` represents an array of student objects like the array featured in data.js; `location` represents 
//a string of a student's location. This function should use the native filter method to return a new array 
//of only the students whose location property matches the input location and who have at least 1 past course they have completed
//
const filterByCoursesAndLocation = (array, location) => {
    return array.filter(s => s.location === location && s.courses.past.length >= 1)
};

// Problem #4 //
//**Create a function called `filterByBootcamp` that takes in one parameter - `array` - 
//which represents an array of student objects like the array featured in data.js. This 
//function should use the native filter method to return a new array of only the students 
//who have completed Bootcamp (if their current phase is Bootcamp, they have not completed the course yet).
 
const filterByBootcamp = (students) => {
   return students.filter(student => student.courses.phase !== "Bootcamp")
};

// Problem #5 //
/**
 * Create a function called `mapCurrentCourses` that takes in one parameter - `array` - 
 * which represents an array of student objects like the array featured in data.js. 
 * This function should use the native map method to return a new array of strings of 
 * all every student's current course name and date as shown in the example below.
 */
const mapCurrentCourses = (students) => {
    return students.map(student => `${student.courses.current} - ${student.courses.date}`)
};

// Problem #6 //
/*Create a function called `mapPastCourses` that takes in one parameter - `array` - 
which represents an array of student objects like the array featured in data.js. 
This function should use the native map method to return a new array of objects 
where each key is phase and the value at each key is the date as shown in the example below.
*/
const mapPastCourses = (array) => {
    return array.map(student => {
        const pastCourses = {};
        student.courses.past.forEach(course => {pastCourses[course.phase] = course.date;})
       return pastCourses
    }
       );
}
