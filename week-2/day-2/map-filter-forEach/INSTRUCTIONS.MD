
1. Create a function called `logStudentInfo` that takes in one parameter - `array` - which represents an array of student objects like the array featured in data.js. This function should log each student's name, location and current course as shown in the example below. You must use the forEach method in your implementation.

```javascript
// example output
logStudentInfo(students);
/*
LOGS =>
Stephanie Cooper - New Orleans, LA - Current Course: Bootcamp
Bethany Joseph - New Orleans, LA - Current Course: Bootcamp

etc...
*/
```
logStudentInfo(array) => {
array.forEach()
}


2. Create a function called `logCourses` that takes in one parameter - `array` - which represents an array of student objects like the array featured in data.js. This function should use the forEach method to iterate through each student, and then it use use forEach again to iterate through each student's past courses. It should log each past course's name and date as shown in the example below.

```javascript
// example output
logCourses(students);
/*
LOGS =>
Prep - 11/02/2024
Prep - 11/02/2024

etc...
*/
```

3. Create a function called `filterByLocationAndCourses` that takes in two parameters - `array, location` - `array` represents an array of student objects like the array featured in data.js; `location` represents a string of a student's location. This function should use the native filter method to return a new array of only the students whose location property matches the input location and who have at least 1 past course they have completed.

4. Create a function called `filterByBootcamp` that takes in one parameter - `array` - which represents an array of student objects like the array featured in data.js. This function should use the native filter method to return a new array of only the students who have completed Bootcamp (if their current phase is Bootcamp, they have not completed the course yet).

5. Create a function called `mapCurrentCourses` that takes in one parameter - `array` - which represents an array of student objects like the array featured in data.js. This function should use the native map method to return a new array of strings of all every student's current course name and date as shown in the example below.

```javascript
// example output
mapCurrentCourses(students);
/*
RETURNS =>
[
    "Bootcamp - 12/02/2024",
    "Bootcamp - 12/02/2024",
    "Immersion - Junior - 12/18/2024",
    "Immersion - Junior - 12/18/2024"
]
*/
```

6. Create a function called `mapPastCourses` that takes in one parameter - `array` - which represents an array of student objects like the array featured in data.js. This function should use the native map method to return a new array of objects where each key is phase and the value at each key is the date as shown in the example below.

```javascript
// example output
mapPastCourses(students);
/*
RETURNS => 
[
    { Prep: 11/02/2024 },
    { Prep: 11/02/2024 },
    { Precourse: 11/18/2024, Bootcamp: 10/18/2024, Prep: 09/18/2024 },
    etc...
]
*/
```