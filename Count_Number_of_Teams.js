/*
* @param {number[]} rating
* @return {number}

There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

    Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
    A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

Example 1:

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).

Example 2:

Input: rating = [2,1,3]
Output: 0
Explanation: We can't form any team given the conditions.

Example 3:

Input: rating = [1,2,3,4]
Output: 4
*/

var numTeams = function(rating) {
  // I: Array of integers
  // O: Integer
  // C: None
  // E: None

  // Create a count variable
  let count = 0;

  // Iterate through the rating array (i)
  for (let i = 0; i < rating.length; i++) {
    // Iterate through rating array starting at i + 1 index (j)
    for (let j = i + 1; j < rating.length; j++) {
      // If value at j is > i
      if (rating[j] > rating[i]) {
        // Iterate through rating array starting at j + 1 index (k)
        for (let k = j + 1; k < rating.length; k++) {
          // If value at k is > j
          if (rating[k] > rating[j]) {
            // Increment count
            count++;
          }
        }
      }
    }
  }

  // Iterate through the rating array (l)
  for (let l = 0; l < rating.length; l++) {
    // Iterate through rating array starting at l + 1 index (m)
    for (let m = l + 1; m < rating.length; m++) {
      // If value at m is < l
      if (rating[m] < rating[l]) {
        // Iterate through rating array starting at m + 1 index (n)
        for (let n = m + 1; n < rating.length; n++) {
          // If value at n is < m
          if (rating[n] < rating[m]) {
            // Incremenet count
            count++;
          }
        }
      }
    }
  }

  // Return count
  return count;
};