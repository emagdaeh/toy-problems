/*
* @param {number[]} nums
* @return {number}

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
  // I: Array of integers
  // O: Integer
  // C: Attempt to solve in linear time and constant space
  // E: None

  // Create a storage object to hold numbers and their counts
  let storage = {};

  // Iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // If obj[nums[i]]
    if (storage[nums[i]]) {
      // Increment count
      storage[nums[i]]++;
      // Else
    } else {
      // obj[nums[i]] = 1;
      storage[nums[i]] = 1;
    }
  }

  // Iterate through storage obj
  for (let key in storage) {
    // If obj[key] > nums.length / 2
    if (storage[key] > (nums.length / 2)) {
      // Return key
      return key;
    }
  }
};