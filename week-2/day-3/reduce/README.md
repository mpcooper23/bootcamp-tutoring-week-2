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

The key thing to remember here is that in each of these callback functions for map and filter, the `n` param represents the current item in the array that is being passed to the callback function at that point. In this case of filter, we are applying a test to that value (when divided by 2 does the result NOT equal 0); in the case of map we are returning the result of multiplying that value by 10. But in either case, the only parameter we are working with is `n`.

In the case of our reduce example, our callback function looks like this:

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

The callback function in this case has a param of `accumulator` and `current`. The first thing to understand here is that the param `current` in this case serves same purpose as `n` in the previous examples. `current` represents the current item in the array the callback function is receiving at that point. 

But what about this `accumulator` param? This is unique to `reduce()`. Think of this `accumulator` as the current state of whatever it is you are trying to return. In this case, `accumulator` represents the state of the sum we are ultimately trying to return. And here is a vital connection: whatever you pass in as the `seed` acts as the first value of `accumulator`. Here is how you can envision this process playing out:

```javascript
const sum = nums.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

/* iteration #1

      0          5
(accumulator, current) => { return 0 + 5 }
            
              returns => 5

*/
//////////////////////////////////////////
/* iteration #2

      5          6
(accumulator, current) => { return 5 + 6 }

              returns => 11

*/
/////////////////////////////////////////
/* iteration #3

      11         7
(accumulator, current) => { return 11 + 7 }

              returns => 18
*/
/////////////////////////////////////////
/* iteration #4

      18         8
(accumulator, current) => { return 18 + 8 }

              returns => 26
*/
```

So, because of our `seed` value, the first time our callback function is invoked, the value of `accumulator` will be 0, and the value of `current` will be the first value we are accessing the array, which is 5. And every time the callback function is invoked, it is going to return the result of adding accumulator to the current value in the array.

The key thing that makes this process work though is this: whatever the callback function becomes the value of accumulator on the next iteration. That is why on iteration #2 the value of `accumulator` will be 5 (the result of adding 0 + 5). This is how reduce "accumulates" its return value. Whatever the final value returned by the callback function is what reduce returns.

Additional reduce info:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
* https://www.w3schools.com/jsref/jsref_reduce.asp