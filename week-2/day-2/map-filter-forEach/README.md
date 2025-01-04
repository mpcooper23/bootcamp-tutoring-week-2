Yesterday, we discussed Higher Order Functions on a more general level. We saw that when we create functions that take in other functions, it allows us to create much more flexible and abstract behavior. However, it's important to understand that developers have known about these concepts for a long time. Take this function we discussed yesterday:

```javascript
function subdivide(students, func){
    const output = [];
    for (let i = 0; i < students.length; i++){
        if (func(students[i]) === true){
            output.push(students[i]);
        }
    }
    return output;
}
```

We created this function so that we could flexibly subdivide our students; however, there is nothing about this function that necessitates it can only be utilized on an array of student objects. It could theoretically work on any array of items. Again, this is what we call filtering. Here is what a filter function would look like if written out:

```javascript
function filter(array, func){
    const output = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i]) === true){
            output.push(array[i]);
        }
    }
    return output;
}
```

As you can see, it's basically the same function. This filtering action is so fundamental that it actually exists as a **"native method"** on the Array.prototype. That means every array you create in JavaScript immediately has access to a filter method that does exactly what the function above does.

```javascript
const nums = [1, 2, 3, 4];
const strings = ['alex', 'francis', 'aaron'];
const movies = [
    { 
        title: 'In the Mouth of Madness',
        director: 'John Carpetner',
        year: 1994
    },
    {
        title: 'Prince of Darkness',
        director: 'John Carpenter',
        year: 1987
    },
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954
    };

// filter for even numbers
const evens = nums.filter(num => num % 2 === 0);
console.log(evens); // => [2, 4]

// filter for names that begin with 'a'
const beginsWithA = strings.filter(string => string[0] === 'a');
console.log(beginsWithA); // => ['alex', 'aaron']

// filter for movies directed by John Carpenter
const johnCarpenter = movies.filter(movie => movie.director === 'John Carpenter');
console.log(johnCarpenter); // => [{In the Mouth of Madness}, {Prince of Darkness}]
```

As you can see, we can use the filter method on each of the arrays above to create a new array of only the items that return true when passed to the callback functions. 

Other frequently used higher order methods are `array.map()` and `array.forEach()`. Use these resources to familiarize yourself with these methods:

`filter()`
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* https://www.w3schools.com/jsreF/jsref_filter.asp

`map()`
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* https://www.w3schools.com/jsreF/jsref_map.asp

`forEach()`
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* https://www.w3schools.com/jsref/jsref_foreach.asp