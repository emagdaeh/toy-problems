/*
* @param {number[]} nums
* @return {number[][]}

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]
*/

var subsets = function(nums) {
  // I: Array of integers
  // O: Matrix
  // C: None
  // E: Empty nums array, array of only one number

  // Create result variable and include an empty array in it
  let result = [[]];

  // Handle case of empty array
  if (nums.length === 0) {
    return result;
  }

  // Handle case of array of only one number
  if (nums.length === 1) {
    result.push(nums);
    return result;
  }

  // Iterate through nums array (i)
  for (let i = 0; i < nums.length; i++) {
    // Push an array of i into result
    result.push([nums[i]]);

    // Nested iteration (j) starting at i + 1
    for (let j = i + 1; j < nums.length; j++) {
      // Create storage array set to the value of i
      let storage = [nums[i]];

      // Push current value of storage
      result.push(storage);

      // Push value of j into storage array
      storage.push(nums[j]);
    }
  }

  // Assign a boolean to false in preparation for checking if nums array is present
  let alreadyThere = false;

  // Iterate through result and compare to nums
  for (let k = 0; k < result.length; k++) {
     if (JSON.stringify(result[k]) === JSON.stringify(nums)) {
       alreadyThere = true;
     }
  }

  // Push nums to result if not present already
  if (alreadyThere === false) {
     result.push(nums);
  }

  // Return result
  return result;
};