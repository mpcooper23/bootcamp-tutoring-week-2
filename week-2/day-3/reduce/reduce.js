// Problem #1 // 

/**
 * Create a function called `currentBootcampers` that takes in one parameter - `array` - 
 * which represents an array of student objects like the one featured in data.js. This 
 * function should use the native reduce method to return the number of students who are 
 * currently in Bootcamp.
 */
const currentBootcampers = (array) => {
    return array.reduce((acc, student) => {
        if(student.courses.phase === "Bootcamp"){
        return acc + 1;
    }
    return acc;}, 0);
};

// Problem #2 //
/**
 * Create a function called `getNamesByLocation` that takes in two parameters - `array, location` 
 * - `array` represents an array of student objects like the one featured in data.js; `location` 
 * represents a string of a student's location. This function should return an array of the student's 
 * names who live in the input location.
 */
const getNamesByLocation = (array, location) => {
   return array.reduce((acc, student) => {
    if(student.location === location){
        acc.push(student.name);
    }
    return acc;
}, [])};

// Problem #3 //
/**
 * Create a function called `getPrecourseNames` that takes in one parameter - `array` - which represents 
 * an array of student objects like the one featured in data.js. This function should use the native 
 * reduce method to return a string of every student's name who has completed Precourse followed by 
 * linebreak characters.
 */
const getPrecourseNames = (array) => {
    return array.reduce((acc, student) => {
        if (student.courses.past.includes("Precourse")) {
            acc += student.name + '\n'; // Append the student's name and a newline
        }
        return acc;
    }, '');
};

// Problem #4 //

/**
 * Create a function called `locationBreakdown` that takes in one parameter - `array` - which 
 * represents an array of student objects like the one featured in data.js. This function should 
 * use the native reduce method to return an object where each key is a location and the value at 
 * the key is the number of students from that location.
 */
const locationBreakdown = (array) => {
return array.reduce((acc, student) => {
const location = student.location;
if(acc[location]){
    acc[location] += 1
}else {acc[location] = 1
}
    return acc;
}, {});
};

