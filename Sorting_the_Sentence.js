/*
* @param {string} s
* @return {string}

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

    For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".

Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
*/

var sortSentence = function(s) {
  // I: String
  // O: String reordered without trailing numbers
  // C: None
  // E: None

  // Split s into array of words
  let words = s.split(' ');

  // Create storage array
  let arr = [];

  // Iterate through array of words
  for (let i = 0; i < words.length; i++) {
    // Create a Number(spliced final index) variable to get number off of end of word
    let num = Number(words[i][words[i].length - 1]);

    // Assign current word to storage array at number - 1
    arr[num - 1] = words[i].slice(0, words[i].length - 1);
  }

  // return joined storage array and trim
  return arr.join(' ').trim();
};