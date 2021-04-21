// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]



// Constraints:

//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lower-case English letters.

var groupAnagrams = function(strs) {
  // Create result array var
  let results = [];

  // Iterate through the strs array starting at index 0
  for (let i = 0; i < strs.length; i++) {
    // Create an anagram array var set to index 0 of strs
    let anagram = [strs[i]];

    // Create a new var to hold split string.sort of index 0
    let outerCharsVar = strs[i].split('').sort();

    // Create conditional check for last index, if so, don't do the following
    if (i !== strs.length) {
      // Iterate through the strs array starting at next index
      for (let j = i + 1; j < strs.length; j++) {
        // Split the strings into chars and sort the chars and set to a var
        let innerCharsVar = strs[j].split('').sort();

        // Check for equivalency of each array at outer loop index and inner loop index
        if (outerCharsVar.join() === innerCharsVar.join()) {
          // If equivalent, push inner loop index strs into anagram arr
          anagram.push(strs[j]);
          strs.splice(j, 1);
        }
      }

      // Push anagram arr into result array
      results.push(anagram);
    }
  }

  // return result array
  return results;
};

const test = ["eat","tea","tan","ate","nat","bat"];

const answer = groupAnagrams(test);

console.log(answer);