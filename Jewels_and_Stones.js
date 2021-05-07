/*
* @param {string} jewels
* @param {string} stones
* @return {number}

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
*/

var numJewelsInStones = function(jewels, stones) {
  // I: Two strings
  // O: Integer
  // C: All jewel characters are unique
  // E: None

  // Create a count variable set ot 0
  let count = 0;

  // Create split jewels variable
  const splitJewels = jewels.split('');

  // Create split stones variable
  const splitStones = stones.split('');

  // Iterate through split jewels
  for (let i = 0; i < splitJewels.length; i++) {
    // Nested itereate through split stones
    for (let j = 0; j < splitStones.length; j++) {
      // If jewel[i] === stone[j]
      if (splitJewels[i] === splitStones[j]) {
        // Incremenet count
        count++;
      }
    }
  }

  // Return count
  return count;
};