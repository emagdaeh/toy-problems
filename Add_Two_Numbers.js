/*

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

var addTwoNumbers = function(l1, l2) {
  // Create storage array for each list
  let l1Arr = [];
  let l2Arr = [];

  // Step through each list pushing each toString'ed number
  for (let i = 0; i < l1.length; i++) {
    l1Arr.push(l1[i].value.toString());
  }

  for (let j = 0; j < l2.length; j++) {
    l2Arr.push(l2[j].value.toString());
  }

  let revL1 = [];
  let revL2 = [];

  for (let k = l1Arr.length; k > 0; k--) {
    revL1.push(l1Arr[k]);
  }

  for (let l = l2Arr.length; l > 0; l--) {
    revL2.push(l2Arr[l]);
  }

  // Join each array of stringed numbers
  let l1Joined = revL1.join('');
  let l2Joined = revL2.join('');

  // parseInt each stringed, joined number
  let l1Int = parseInt(l1Joined);
  let l2Int = parseInt(l2Joined);

  // Add the two numbers together and return the result
  return l1Int + l2Int;
};