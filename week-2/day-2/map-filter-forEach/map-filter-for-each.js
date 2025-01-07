
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
    let newArr = [];
    array.filter(s => {if(s === location && s.courses.past.forEach(s.courses.past > 1)){
        return newArr.push(s)
    }})
    return newArr
};

// Problem #4 //
//**Create a function called `filterByBootcamp` that takes in one parameter - `array` - 
//which represents an array of student objects like the array featured in data.js. This 
//function should use the native filter method to return a new array of only the students 
//who have completed Bootcamp (if their current phase is Bootcamp, they have not completed the course yet).
 
const filterByBootcamp = (student) => {
    let newArr = []
    students.filter(student => {if(students.courses.phase !== "Bootcamp"){newArr.push(student)}})
    return newArr;
};

// Problem #5 //
const mapCurrentCourses = () => {
    
};

// Problem #6 //
const mapPastCourses = () => {
    
};

