// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


const isPalindrome = x => x == Number(x.toString().split("").reverse().join(""))? true: false

//pseudo code 
// we are running ternary to evaluate the expresssion. The expresssion is broken down to see if the integer passed into the parameter of x is a palindrom meaning the same foward as backwars. The right side of the comparison says that we use type conversion to conver the integer to a string so we have data structures to reverse the order to see the result. We then make sure that we do type conversion again with Number() to make sure that it comes back as a number. 