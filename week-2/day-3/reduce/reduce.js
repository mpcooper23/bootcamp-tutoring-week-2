// Problem #1 // 

/**
 * Create a function called `currentBootcampers` that takes in one parameter - `array` - 
 * which represents an array of student objects like the one featured in data.js. This 
 * function should use the native reduce method to return the number of students who are 
 * currently in Bootcamp.
 */

let currentBootcampers = (array) => {
    return array.reduce((acc, current) => {
        acc += current.courses.phase === 'Bootcamp';
        return acc;
    }, 0)
}


// Problem #2 //
/**
 * Create a function called `getNamesByLocation` that takes in two parameters - `array, location` 
 * - `array` represents an array of student objects like the one featured in data.js; `location` 
 * represents a string of a student's location. This function should return an array of the student's 
 * names who live in the input location.
 */

let getNamesByLocation = (array, location) => {
    return array.reduce((acc, current) => {
        if(current.location === location)
{acc.push(current.name)}
return acc;
    }, [])
}

// Problem #3 //
/**
 * Create a function called `getPrecourseNames` that takes in one parameter - `array` - which represents 
 * an array of student objects like the one featured in data.js. This function should use the native 
 * reduce method to return a string of every student's name who has completed Precourse followed by 
 * linebreak characters.
 */

let getPrecourseNames = (array) => {
return array.reduce((acc, current) => {
    for(let i = 0; i < current.courses.past.length; i++){
if(current.courses.past[i].phase === 'Precourse'){
acc += current.name + '\n';
}}
return acc;}, '')
}

// Problem #4 //

/**
 * Create a function called `locationBreakdown` that takes in one parameter - `array` - which 
 * represents an array of student objects like the one featured in data.js. This function should 
 * use the native reduce method to return an object where each key is a location and the value at 
 * the key is the number of students from that location.
 */

let locationBreakdown = (array) => {
    return array.reduce((acc, current) => {
if(!acc[current.location]){
    acc[current.location] = 1
}else {
    acc[current.location] += 1
}
return acc;
    }, {})
}
