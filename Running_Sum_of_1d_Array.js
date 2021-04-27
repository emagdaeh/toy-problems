/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

var runningSum = function(nums) {
  // Create result array set to the value of nums[0]
  let result = [];

  // Iterate over nums
  for (let i = 0; i < nums.length; i++) {
    // Create sum variable
    let sum = 0;

    // Create inner iteration starting at outer iteration + 1 and going in reverse
    for (let j = 0; j < i + 1; j++) {
      // Add to sum variable all indices
      sum += nums[j];
    }

    // Push sum to result array
    result.push(sum);
  }

  // Return result
  return result;
};