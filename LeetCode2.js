// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.


/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length-1] : -1   
   };
   
   /**
    * const arr = [1, 2, 3];
    * arr.last(); // 3
    */


   //psuedo code 
   // we have an array that is constructed as an object we want the function to return the last element in the array otherwise -1. if the index is greater than 0 we know that the array has elements inside and to run the .length-1 to get the last element. 
