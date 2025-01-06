
1. Create a function called `currentBootcampers` that takes in one parameter - `array` - which represents an array of student objects like the one featured in data.js. This function should use the native reduce method to return the number of students who are currently in Bootcamp.

2. reate a function called `getNamesByLocation` that takes in two parameters - `array, location` - `array` represents an array of student objects like the one featured in data.js; `location` represents a string of a student's location. This function should return an array of the student's names who live in the input location.

```javascript
// example output
getNamesByLocation(students, 'New Orleans, LA'); // => ['Stephanie Cooper', 'Bethany Joseph']
```

3. Create a function called `getPrecourseNames` that takes in one parameter - `array` - which represents an array of student objects like the one featured in data.js. This function should use the native reduce method to return a string of every student's name who has completed Precourse followed by linebreak characters.

```javascript
// example output
getPrecourseNames(students); // => "Nathan Coen\nKyle Bradley\n"
```

4. Create a function called `locationBreakdown` that takes in one parameter - `array` - which represents an array of student objects like the one featured in data.js. This function should use the native reduce method to return an object where each key is a location and the value at the key is the number of students from that location.

```javascript
// example output
locationBreakdown(students); // => { 'New Orleans, LA': 2, 'Atlanta, GA': 1, 'Baltimore, MD': 1 }
```
