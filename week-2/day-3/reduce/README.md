Previously, we practiced using the native array methods of `map()`, `filter()`, and `forEach()`. Today, we will be discussing the native array method `reduce()`.

`reduce()` is a highly versatile array method that has much in common with `map()`, `filter()`, and `forEach()`, but it also has some key differences. The most obvious similarity between all of these methods is that each of them iterates through an array and invokes a callback function on each iteration. What separates `reduce()` is that unlike `map()` and `filter()`, reduce can return any datatype. Take a look at this example:

```javascript
const nums = [5, 6, 7, 8];

const odds = nums.filter(n => n % 2 !== 0);
console.log(odds); // => [5, 7]

const multiplied = nums.map(n => n * 10);
console.log(multiplied); // => [50, 60, 70, 80]
```

As you can see, whether you are filtering or mapping through an array, the result will **always** be a new array. This is not true of `reduce()`. Reduce can return any datatype by implementing called a `seed` argument. For instance, let's say we want to return the sum of all of the numbers in the `nums` array. We can actually do this using reduce:

```javascript
const sum = nums.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
// ^ 0 is the seed argument
```

Now, there is a lot going on here you might have questions about, but I want you start by viewing this example purely as a method invocation. Fundamentally, all we are doing here is invoking `nums.reduce()` and passing in two arguments...

```javascript
const sum = nums.reduce(/callback function/, /seed/);

// callback function
/*

(accumulator, current) => {
    return accumulator + current;
}

*/

// seed
// 0
```

This is exactly what we do when we invoke `map()` or `filter()`, the only difference is we are also passing in this `seed` argument of 0. The purpose of this seed argument is it initializes what the output of reduce is going to be. So, by passing in a seed argument of `0` we are ensuring that `reduce()` will return a number.

Now, take a look at the callback function we passed in:

```javascript
const sum = nums.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

// callback
/*

(accumulator, current) => {
    return accumulator + current;
}

*/
```

You may notice that this callback function looks different from the callback functions we used in our map and filter examples:

```javascript
const nums = [5, 6, 7, 8];

const odds = nums.filter(n => n % 2 !== 0);
console.log(odds); // => [5, 7]

const multiplied = nums.map(n => n * 10);
console.log(multiplied); // => [50, 60, 70, 80]

/*

// callback function #1
n => n % 2 !== 0

// callback function #2
n => n * 10

*/
```