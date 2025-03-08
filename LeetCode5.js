// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [];
    arr.forEach((el, i)=> newArr.push(fn(el, i)));
    return newArr;
};

//psuedo code
//we were given an array and a function as parameters
// we are asked to return a transformed array without using the .map method. To achieve this I used the .push method. We needed to still be able to iterate over the arry so I used the .forEach method. and used 2 parameters to pass in the elements and the index of the elements. 
// from there we are pushing the implicit return from the for each into the variable of newArr which is an empty array. and is the end result of the transformed array.