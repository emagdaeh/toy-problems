/*
* @param {string} command
* @return {string}

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"
*/

var interpret = function(command) {
  // Create result variable
  let result = '';

  // Iterate through command string
  for (let i = 0; i < command.length; i++) {
    // If index is G
    if (command[i] === 'G') {
      // Concat G on to result
      result += 'G';

      // Else if index is ( and next index is )
    } else if (command[i] === '(' && command[i + 1] === ')') {
      // Concat o on to result
      result += 'o';

      // Increment i by 2
      i++;

      // Else
    } else {
      // Concat al on to result
      result += 'al';

      // Increment i by 4
      i += 3;
    }
  }

  // Return result
  return result;
};